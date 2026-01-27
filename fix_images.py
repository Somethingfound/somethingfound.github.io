import os
import glob

def fix_image_naming():
    """Fix image naming by renaming all files sequentially"""
    
    stills_dir = "Stills"
    
    for subdir in os.listdir(stills_dir):
        subdir_path = os.path.join(stills_dir, subdir)
        if os.path.isdir(subdir_path):
            print(f"Fixing {subdir}...")
            
            # Get all image files
            image_files = []
            for ext in ['*.jpg', '*.jpeg', '*.png', '*.gif']:
                image_files.extend(glob.glob(os.path.join(subdir_path, ext)))
            
            if not image_files:
                print(f"  No images found")
                continue
            
            # Sort files to maintain order
            image_files.sort()
            
            # Get extension from first file
            ext = os.path.splitext(image_files[0])[1]
            
            # Check if files are already correctly named
            already_correct = True
            for i, file in enumerate(image_files, 1):
                expected_name = f"{i}{ext}"
                if not file.endswith(expected_name):
                    already_correct = False
                    break
            
            if already_correct:
                print(f"  Files are already correctly named")
                continue
            
            # Rename all files
            for i, old_file in enumerate(image_files, 1):
                new_file = f"{i}{ext}"
                new_path = os.path.join(subdir_path, new_file)
                
                # Remove existing file if it exists
                if os.path.exists(new_path):
                    os.remove(new_path)
                
                # Rename the file
                os.rename(old_file, new_path)
                print(f"  {old_file.split('/')[-1]} -> {new_file}")
            
            print(f"  Fixed {len(image_files)} files")

if __name__ == "__main__":
    fix_image_naming()
    print("Done!")
