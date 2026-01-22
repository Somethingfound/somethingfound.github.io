#!/usr/bin/env python3
"""
Image optimization script for Something Found website
Optimizes project stills for responsive web design
"""

import os
import shutil
from pathlib import Path
from PIL import Image, ImageOps
import argparse

def setup_directories(base_path, output_path):
    """Create output directory structure"""
    output_base = Path(output_path)
    output_base.mkdir(exist_ok=True)
    
    # Create Stills directory
    stills_dir = output_base / "Stills"
    stills_dir.mkdir(exist_ok=True)
    
    return stills_dir

def get_project_name_from_path(folder_path):
    """Extract clean project name from folder path"""
    folder_name = Path(folder_path).name
    # Remove "stills" suffix and clean up
    if "stills" in folder_name.lower():
        project_name = folder_name.replace("stills", "").replace("STILLS", "").strip()
    else:
        project_name = folder_name
    
    # Handle special cases
    project_name = project_name.replace("  ", " ").strip()
    
    return project_name

def optimize_image(input_path, output_path, max_width=1200, quality=85):
    """Optimize a single image for web"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (for PNG with alpha)
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            
            # Auto-orient based on EXIF
            img = ImageOps.exif_transpose(img)
            
            # Calculate new dimensions
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save as JPEG with optimization
            img.save(output_path, 'JPEG', quality=quality, optimize=True, progressive=True)
            
            # Print file size reduction
            original_size = os.path.getsize(input_path)
            optimized_size = os.path.getsize(output_path)
            reduction = (1 - optimized_size / original_size) * 100
            
            print(f"* {Path(input_path).name}: {original_size//1024}KB -> {optimized_size//1024}KB ({reduction:.1f}% reduction)")
            
    except Exception as e:
        print(f"* Error processing {input_path}: {e}")

def process_project_folder(source_folder, stills_output_dir):
    """Process a single project folder"""
    project_name = get_project_name_from_path(source_folder)
    project_output_dir = stills_output_dir / f"{project_name} stills"
    project_output_dir.mkdir(exist_ok=True)
    
    print(f"\nProcessing project: {project_name}")
    
    # Find all image files
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'}
    image_files = []
    
    for root, dirs, files in os.walk(source_folder):
        for file in files:
            if Path(file).suffix.lower() in image_extensions:
                image_files.append(Path(root) / file)
    
    if not image_files:
        print(f"  No images found in {source_folder}")
        return 0
    
    # Process and rename images sequentially
    image_files.sort()
    for i, img_path in enumerate(image_files, 1):
        # Determine output filename
        ext = 'jpg'  # Always output as JPG for consistency
        output_filename = f"{i}.{ext}"
        output_path = project_output_dir / output_filename
        
        # Optimize image
        optimize_image(img_path, output_path, max_width=1200, quality=85)
    
    print(f"  * Processed {len(image_files)} images")
    return len(image_files)

def main():
    parser = argparse.ArgumentParser(description='Optimize project images for web')
    parser.add_argument('--source', required=True, help='Source PROJECTS directory')
    parser.add_argument('--output', required=True, help='Output directory for optimized images')
    parser.add_argument('--max-width', type=int, default=1200, help='Maximum image width')
    parser.add_argument('--quality', type=int, default=85, help='JPEG quality (1-100)')
    
    args = parser.parse_args()
    
    source_path = Path(args.source)
    output_path = Path(args.output)
    
    if not source_path.exists():
        print(f"* Source directory not found: {source_path}")
        return
    
    print("Something Found Image Optimizer")
    print("=" * 50)
    print(f"Source: {source_path}")
    print(f"Output: {output_path}")
    print(f"Max width: {args.max_width}px")
    print(f"Quality: {args.quality}%")
    
    # Setup output directories
    stills_output_dir = setup_directories(source_path, output_path)
    
    # Find all project folders with stills
    project_folders = []
    for item in source_path.iterdir():
        if item.is_dir() and not item.name.startswith('._'):
            # Look for stills subfolder
            stills_found = False
            for subitem in item.iterdir():
                if subitem.is_dir() and 'still' in subitem.name.lower():
                    project_folders.append(subitem)
                    stills_found = True
            
            if not stills_found:
                print(f"* No stills folder found for {item.name}")
    
    print(f"\nFound {len(project_folders)} project folders with stills")
    
    # Process each project
    total_images = 0
    project_data = []
    
    for project_folder in sorted(project_folders):
        count = process_project_folder(project_folder, stills_output_dir)
        if count > 0:
            project_name = get_project_name_from_path(project_folder)
            project_data.append({
                'name': project_name.upper(),
                'count': count,
                'path': f"Stills/{project_name} stills",
                'ext': 'jpg',
                'contain': False,
                'category': 'documentary',  # Default category
                'description': f'A {project_name} project.',
                'vimeoId': ''  # To be filled manually
            })
            total_images += count
    
    # Generate JavaScript code for imageFolders array
    print(f"\nGenerated JavaScript for main.js:")
    print("=" * 50)
    print("const imageFolders = [")
    for i, project in enumerate(project_data):
        comma = "," if i < len(project_data) - 1 else ""
        print(f"  {{ path: '{project['path']}', count: {project['count']}, ext: '{project['ext']}', contain: {str(project['contain']).lower()}, category: '{project['category']}', name: '{project['name']}', description: '{project['description']}', vimeoId: '{project['vimeoId']}' }}{comma}")
    print("];")
    
    print(f"\nOptimization complete!")
    print(f"Total projects: {len(project_data)}")
    print(f"Total images: {total_images}")
    print(f"Output saved to: {output_path}")

if __name__ == "__main__":
    main()
