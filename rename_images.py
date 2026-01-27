import os
import shutil

def rename_images_sequentially():
    """Rename all images in stills folders to be sequential starting from 1"""
    
    # Get all directories in Stills folder
    stills_dir = "Stills"
    if not os.path.exists(stills_dir):
        print(f"Stills directory not found: {stills_dir}")
        return
    
    # Process each subdirectory in Stills
    for subdir in os.listdir(stills_dir):
        subdir_path = os.path.join(stills_dir, subdir)
        if os.path.isdir(subdir_path):
            print(f"\nProcessing {subdir}...")
            
            # Get all image files in the subdirectory
            image_files = []
            for file in os.listdir(subdir_path):
                if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
                    image_files.append(file)
            
            if not image_files:
                print(f"  No image files found in {subdir}")
                continue
            
            # Sort image files to maintain some order
            image_files.sort()
            
            # Get the extension from the first image (assuming all have same extension)
            first_ext = os.path.splitext(image_files[0])[1]
            
            # Rename files sequentially
            for i, old_file in enumerate(image_files, 1):
                old_path = os.path.join(subdir_path, old_file)
                new_file = f"{i}{first_ext}"
                new_path = os.path.join(subdir_path, new_file)
                
                # Only rename if the target filename doesn't already exist
                if old_path != new_path:
                    # If target file exists, remove it first
                    if os.path.exists(new_path):
                        os.remove(new_path)
                        print(f"  Removed existing {new_file}")
                    
                    # Rename the file
                    shutil.move(old_path, new_path)
                    print(f"  Renamed {old_file} -> {new_file}")
                else:
                    print(f"  {old_file} already has correct name")
            
            print(f"  Processed {len(image_files)} images")

if __name__ == "__main__":
    rename_images_sequentially()
    print("\nRenaming complete!")
