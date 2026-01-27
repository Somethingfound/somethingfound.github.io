import os
import glob

def fix_granular_spaces_complete():
    """Fix GRANULAR SPACES folder completely"""
    
    subdir_path = "Stills/GRANULAR SPACES stills"
    
    print(f"Fixing GRANULAR SPACES completely...")
    
    # Get all image files that actually exist
    image_files = []
    for ext in ['*.jpg', '*.jpeg', '*.png', '*.gif']:
        image_files.extend(glob.glob(os.path.join(subdir_path, ext)))
    
    if not image_files:
        print(f"  No images found")
        return
    
    # Sort files by their numeric value
    def get_numeric_value(filename):
        name = os.path.basename(filename)
        num_str = os.path.splitext(name)[0]
        try:
            return int(num_str)
        except:
            return 999999
    
    image_files.sort(key=get_numeric_value)
    
    # Get extension from first file
    ext = os.path.splitext(image_files[0])[1]
    
    print(f"  Found {len(image_files)} files")
    
    # Rename all files sequentially from 1
    for i, old_file in enumerate(image_files):
        new_name = f"{i+1}{ext}"
        new_path = os.path.join(subdir_path, new_name)
        
        # Remove existing file if it exists
        if os.path.exists(new_path):
            os.remove(new_path)
        
        # Rename the file
        os.rename(old_file, new_path)
        old_name = os.path.basename(old_file)
        print(f"  Renamed {old_name} -> {new_name}")
    
    print(f"  Renamed {len(image_files)} files")

if __name__ == "__main__":
    fix_granular_spaces_complete()
    print("Done!")
