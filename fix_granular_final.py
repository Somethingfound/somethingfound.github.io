import os
import glob

def fix_granular_final():
    """Final fix for GRANULAR SPACES"""
    
    subdir_path = "Stills/GRANULAR SPACES stills"
    
    print(f"Final fix for GRANULAR SPACES...")
    
    # Get all image files
    image_files = []
    for ext in ['*.jpg', '*.jpeg', '*.png', '*.gif']:
        image_files.extend(glob.glob(os.path.join(subdir_path, ext)))
    
    # Sort by numeric value
    def get_numeric_value(filename):
        name = os.path.basename(filename)
        num_str = os.path.splitext(name)[0]
        try:
            return int(num_str)
        except:
            return 999999
    
    image_files.sort(key=get_numeric_value)
    
    # Get extension
    ext = os.path.splitext(image_files[0])[1]
    
    print(f"  Found {len(image_files)} files to rename")
    
    # Rename files to be sequential starting from 1
    for i, old_file in enumerate(image_files):
        new_name = f"{i+1}{ext}"
        new_path = os.path.join(subdir_path, new_name)
        
        old_name = os.path.basename(old_file)
        
        # Only rename if the name is different
        if old_name != new_name:
            # Remove existing file if it exists
            if os.path.exists(new_path):
                os.remove(new_path)
            
            # Rename the file
            os.rename(old_file, new_path)
            print(f"  {old_name} -> {new_name}")
        else:
            print(f"  {old_name} already correct")
    
    print(f"  Done! Now has {len(image_files)} sequential files")

if __name__ == "__main__":
    fix_granular_final()
    print("Complete!")
