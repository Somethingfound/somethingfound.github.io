import os
import glob

def fix_image_naming():
    """Fix image naming by renaming all files sequentially"""
    
    stills_dir = "Stills"
    
    for subdir in os.listdir(stills_dir):
        subdir_path = os.path.join(stills_dir, subdir)
        if os.path.isdir(subdir_path):
            print(f"Fixing {subdir}...")
            
            # Get all image files that actually exist
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
            
            # Check what files we have and what we need
            current_names = [os.path.basename(f) for f in image_files]
            expected_names = [f"{i}{ext}" for i in range(1, len(image_files) + 1)]
            
            print(f"  Found {len(image_files)} files: {current_names}")
            print(f"  Expected names: {expected_names}")
            
            # Rename files that don't have correct names
            renamed_count = 0
            for i, old_file in enumerate(image_files):
                old_name = os.path.basename(old_file)
                expected_name = f"{i+1}{ext}"
                
                if old_name != expected_name:
                    new_path = os.path.join(subdir_path, expected_name)
                    
                    # Remove existing file if it exists
                    if os.path.exists(new_path):
                        os.remove(new_path)
                        print(f"  Removed existing {expected_name}")
                    
                    # Rename the file
                    os.rename(old_file, new_path)
                    print(f"  Renamed {old_name} -> {expected_name}")
                    renamed_count += 1
            
            if renamed_count == 0:
                print(f"  All files already correctly named")
            else:
                print(f"  Renamed {renamed_count} files")

if __name__ == "__main__":
    fix_image_naming()
    print("Done!")
