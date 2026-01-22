// Folders with image count and extension
const imageFolders = [
  { path: 'Stills/ANGELIKA stills', count: 7, ext: 'jpg', contain: false, category: 'fiction', name: 'ANGELIKA', description: 'A portrait of Angelika, exploring identity and perception.', vimeoId: '' },
  { path: 'Stills/CLAYALLIANCE stills', count: 15, ext: 'jpg', contain: false, category: 'documentary', name: 'CLAYALLIANCE', description: 'Documentary about clay workers and their traditional craft.', vimeoId: '' },
  { path: 'Stills/COOLING SYSTEMS stills', count: 175, ext: 'jpg', contain: false, category: 'documentary', name: 'COOLING SYSTEMS', description: 'An exploration of industrial cooling systems and architecture.', vimeoId: '' },
  { path: 'Stills/CYBEAU stills', count: 25, ext: 'jpg', contain: false, category: 'fiction', name: 'CYBEAU', description: 'A fiction film project.', vimeoId: '1125334197' },
  { path: 'Stills/GRANULAR SPACES stills', count: 37, ext: 'jpg', contain: false, category: 'archive', name: 'GRANULAR SPACES', description: 'Archival exploration of granular landscapes and textures.', vimeoId: '' },
  { path: 'Stills/I.M.A.G.E stills', count: 14, ext: 'jpg', contain: false, category: 'archive', name: 'I.M.A.G.E', description: 'An experimental archive piece exploring digital imagery.', vimeoId: '' },
  { path: 'Stills/LA CITTÁ stills', count: 9, ext: 'jpg', contain: false, category: 'documentary', name: 'LA CITTÁ', description: 'A documentary exploring urban landscapes and city life.', vimeoId: '1125339826' },
  { path: 'Stills/LZ129 stills', count: 33, ext: 'jpg', contain: false, category: 'archive', name: 'LZ129', description: 'Archive footage of the Hindenburg airship.', vimeoId: '1134835635' },
  { path: 'Stills/RESPACE stills', count: 20, ext: 'jpg', contain: false, category: 'documentary', name: 'RESPACE', description: 'A documentary about space and spatial relationships.', vimeoId: '' },
  { path: 'Stills/SELFDESTRUCTIVE stills', count: 5, ext: 'jpg', contain: false, category: 'archive', name: 'SELFDESTRUCTIVE', description: 'An experimental archive piece on self-destruction.', vimeoId: '1134868223' },
  { path: 'Stills/SIGNALOGIA stills', count: 51, ext: 'jpg', contain: false, category: 'documentary', name: 'SIGNALOGIA', description: 'A documentary study of signals and communication systems.', vimeoId: '' },
  { path: 'Stills/SALT stills', count: 60, ext: 'jpg', contain: true, category: 'documentary', name: 'SALT', description: 'A documentary about salt production and its cultural significance.', vimeoId: '1135521486' },
  { path: 'Stills/SUTURE stills', count: 78, ext: 'jpg', contain: false, category: 'documentary', name: 'SUTURE', description: 'A documentary following surgical procedures and healing.', vimeoId: '' },
];

// Current tab state - always hybrid for content
let currentTab = 'hybrid';
let previousTab = 'hybrid'; // Track previous tab for returning from contact
let detailView = null; // Track if detail view is open { imageUrl, folderIndex }
const tabButtons = ['logo'];

// Track used images for bottom row to avoid duplicates
let usedBottomRowImages = new Set();

// Function to create project order without adjacent duplicates
function createNonAdjacentProjectOrder(excludeIndex) {
  const availableProjects = imageFolders
    .map((f, i) => ({ ...f, index: i }))
    .filter(f => f.index !== excludeIndex);
  
  // Group by name
  const projectGroups = {};
  availableProjects.forEach(project => {
    if (!projectGroups[project.name]) {
      projectGroups[project.name] = [];
    }
    projectGroups[project.name].push(project);
  });
  
  // Create order ensuring no same names are adjacent
  const result = [];
  const names = Object.keys(projectGroups).sort();
  let lastUsedName = null;
  let remainingProjects = [...names];
  
  while (remainingProjects.length > 0) {
    // Find a name that's different from the last used
    let availableNames = remainingProjects.filter(name => name !== lastUsedName);
    
    // If only one name left and it's the same as last, we have to use it
    if (availableNames.length === 0 && remainingProjects.length === 1) {
      availableNames = remainingProjects;
    }
    
    // Pick a random available name
    const selectedName = availableNames[Math.floor(Math.random() * availableNames.length)];
    const projectGroup = projectGroups[selectedName];
    const selectedProject = projectGroup.shift(); // Take first project from group
    
    result.push(selectedProject);
    lastUsedName = selectedName;
    
    // Remove name from remaining if no more projects left
    if (projectGroup.length === 0) {
      remainingProjects = remainingProjects.filter(name => name !== selectedName);
    }
  }
  
  return result;
}
function getUniqueRandomImage(folderIndex, maxAttempts = 10) {
  const folder = imageFolders[folderIndex];
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    const imageNum = Math.floor(Math.random() * folder.count) + 1;
    const imageUrl = `${folder.path}/${imageNum}.${folder.ext}`;
    const imageKey = `${folderIndex}-${imageNum}`;
    
    if (!usedBottomRowImages.has(imageKey)) {
      usedBottomRowImages.add(imageKey);
      return { 
        url: imageUrl,
        contain: folder.contain,
        folderIndex: folderIndex
      };
    }
    attempts++;
  }
  
  // Fallback: return first image if we can't find unique one
  const fallbackUrl = `${folder.path}/1.${folder.ext}`;
  usedBottomRowImages.add(`${folderIndex}-1`);
  return { 
    url: fallbackUrl,
    contain: folder.contain,
    folderIndex: folderIndex
  };
}

// Track usage count for folders and shuffled order for images
const folderUsageCount = new Array(imageFolders.length).fill(0);
const folderShuffledOrder = [];
const folderShuffleIndex = [];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

imageFolders.forEach((folder, i) => {
  const indices = [];
  for (let j = 1; j <= folder.count; j++) indices.push(j);
  folderShuffledOrder[i] = shuffle(indices);
  folderShuffleIndex[i] = 0;
});

function getRandomImage(forCategory = null) {
  // Filter folders based on current tab or specified category
  const category = forCategory || currentTab;
  let validFolderIndices = [];
  if (category === 'hybrid') {
    validFolderIndices = imageFolders.map((_, i) => i);
  } else {
    imageFolders.forEach((folder, i) => {
      if (folder.category === category) validFolderIndices.push(i);
    });
  }
  
  if (validFolderIndices.length === 0) return null;
  
  // Find folders with minimum usage count among valid folders
  const minUsage = Math.min(...validFolderIndices.map(i => folderUsageCount[i]));
  const leastUsedFolders = validFolderIndices.filter(i => folderUsageCount[i] === minUsage);
  
  const folderIndex = leastUsedFolders[Math.floor(Math.random() * leastUsedFolders.length)];
  folderUsageCount[folderIndex]++;
  
  const folder = imageFolders[folderIndex];
  const imageNum = folderShuffledOrder[folderIndex][folderShuffleIndex[folderIndex]];
  folderShuffleIndex[folderIndex]++;
  
  if (folderShuffleIndex[folderIndex] >= folder.count) {
    const indices = [];
    for (let j = 1; j <= folder.count; j++) indices.push(j);
    folderShuffledOrder[folderIndex] = shuffle(indices);
    folderShuffleIndex[folderIndex] = 0;
  }
  
  return { 
    url: `${folder.path}/${imageNum}.${folder.ext}`,
    contain: folder.contain,
    folderIndex: folderIndex
  };
}

function getImageFromFolder(folderIndex) {
  const folder = imageFolders[folderIndex];
  const imageNum = folderShuffledOrder[folderIndex][folderShuffleIndex[folderIndex]];
  folderShuffleIndex[folderIndex]++;
  
  if (folderShuffleIndex[folderIndex] >= folder.count) {
    const indices = [];
    for (let j = 1; j <= folder.count; j++) indices.push(j);
    folderShuffledOrder[folderIndex] = shuffle(indices);
    folderShuffleIndex[folderIndex] = 0;
  }
  
  return { 
    url: `${folder.path}/${imageNum}.${folder.ext}`,
    contain: folder.contain,
    folderIndex: folderIndex
  };
}

function switchTab(tab) {
  // If clicking contact while already on contact, go back to hybrid
  if (tab === 'contact' && currentTab === 'contact') {
    tab = 'hybrid';
  }
  
  if (tab === currentTab) return;
  
  // Save previous tab (but not if switching to contact)
  if (tab !== 'contact' && currentTab !== 'contact') {
    previousTab = currentTab;
  } else if (currentTab === 'contact') {
    // Returning from contact, set to hybrid
    currentTab = 'hybrid';
  } else {
    // Going to contact, save current as previous
    previousTab = currentTab;
  }
  
  currentTab = tab;
  
  // Update button states - only update the logo cell
  document.querySelectorAll('.cell.static').forEach(cell => {
    const cellTab = cell.dataset.tab;
    if (cellTab === 'contact' && tab === 'contact') {
      cell.classList.add('flipped');
    } else if (cellTab === 'contact') {
      cell.classList.remove('flipped');
    }
  });
  
  // Refresh content tiles
  refreshContentTiles();
}

// Global reference to strip elements
let currentStrip = null;
let currentTopBorder = null;

function createContinuousStrip(allProjectsOrdered, capturedBottomRowImages = []) {
  // Remove existing strip if any
  removeContinuousStrip();
  
  // Create strip container
  currentStrip = document.createElement('div');
  currentStrip.style.cssText = `
    position: fixed;
    bottom: 0;
    left: -2px;
    width: calc(100% + 2px);
    height: 20vh;
    display: flex;
    transition: transform 0.1s ease-out;
    cursor: grab;
    z-index: 100;
    box-sizing: border-box;
  `;
  
  // Create top border
  currentTopBorder = document.createElement('div');
  currentTopBorder.style.cssText = `
    position: fixed;
    bottom: 20vh;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: white;
    z-index: 1000;
    pointer-events: none;
  `;
  
  // Track which images we've used for each project
  const usedProjectImages = {};
  allProjectsOrdered.forEach(project => {
    usedProjectImages[project.index] = new Set();
  });
  
  // Function to get a unique image for a project
  function getUniqueProjectImage(projectIndex) {
    const maxAttempts = 10;
    let attempts = 0;
    
    while (attempts < maxAttempts) {
      const img = getImageFromFolder(projectIndex);
      const imageKey = `${projectIndex}-${img.url.split('/').pop().split('.')[0]}`;
      
      if (!usedProjectImages[projectIndex].has(imageKey)) {
        usedProjectImages[projectIndex].add(imageKey);
        return img;
      }
      attempts++;
    }
    
    // Fallback: clear some used images and try again
    if (usedProjectImages[projectIndex].size > 0) {
      usedProjectImages[projectIndex].clear();
      return getImageFromFolder(projectIndex);
    }
    
    return getImageFromFolder(projectIndex);
  }
  
  // Create initial tiles (more cycles for infinite scroll feel)
  const cyclesNeeded = allProjectsOrdered.length < 5 ? 10 : 6;
  const showTitles = true; // Always show titles in the strip
  
  for (let cycle = 0; cycle < cyclesNeeded; cycle++) {
    allProjectsOrdered.forEach((project, projectIndex) => {
      const tile = document.createElement('div');
      let img;
      
      // Always get fresh images from correct projects
      img = getUniqueProjectImage(project.index);
      
      tile.style.cssText = `
        flex: 0 0 20vw;
        height: 100%;
        position: relative;
        background-image: url('${img.url}');
        background-size: cover;
        background-position: center;
        cursor: pointer;
        border-left: 1px solid white;
        box-sizing: border-box;
      `;
      
      // Add project name overlay
      if (showTitles) {
        const nameOverlay = document.createElement('div');
        nameOverlay.className = 'project-name-overlay';
        nameOverlay.textContent = project.name;
        tile.appendChild(nameOverlay);
      }
      
      tile.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Only handle click if we haven't dragged
        if (!hasDragged) {
          if (detailView && detailView.folderIndex === project.index) {
            closeDetailView();
          } else {
            openDetailView('', project.index);
          }
        }
      });
      
      currentStrip.appendChild(tile);
    });
  }
  
  // Add to page
  document.body.appendChild(currentStrip);
  document.body.appendChild(currentTopBorder);
  
  // Hide original bottom row
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, i) => {
    const row = Math.floor(i / 5);
    if (row === 4) {
      cell.style.visibility = 'hidden';
    }
  });
  
  // Add scrolling functionality
  let scrollOffset = 0;
  let isDragging = false;
  let startX = 0;
  let startScrollOffset = 0;
  let hasDragged = false;
  
  const updateScrollPosition = (offset) => {
    // Calculate total width of one cycle
    const tileWidth = window.innerWidth * 0.2;
    const maxScroll = allProjectsOrdered.length * tileWidth;
    
    // Wrap around but keep it smooth
    scrollOffset = offset;
    
    // Apply transform to the strip without transition during scroll
    currentStrip.style.transition = 'none';
    currentStrip.style.transform = `translateX(-${scrollOffset}px)`;
    
    // Defer DOM manipulation to avoid flickering during scroll
    requestAnimationFrame(() => {
      manageTiles();
    });
  };
  
  const manageTiles = () => {
    const tiles = currentStrip.children;
    const tileWidth = window.innerWidth * 0.2;
    const totalWidth = tiles.length * tileWidth;
    const viewportWidth = window.innerWidth;
    const showTitles = true; // Always show titles in the strip
    
    // Generate new tiles when scrolling near the end
    if (scrollOffset > totalWidth - viewportWidth * 2) {
      // Add another cycle of tiles
      allProjectsOrdered.forEach(project => {
        const tile = document.createElement('div');
        const img = getUniqueProjectImage(project.index);
        
        tile.style.cssText = `
          flex: 0 0 20vw;
          height: 100%;
          position: relative;
          background-image: url('${img.url}');
          background-size: cover;
          background-position: center;
          cursor: pointer;
          border-left: 1px solid white;
          box-sizing: border-box;
        `;
        
        // Add project name overlay
        if (showTitles) {
          const nameOverlay = document.createElement('div');
          nameOverlay.className = 'project-name-overlay';
          nameOverlay.textContent = project.name;
          tile.appendChild(nameOverlay);
        }
        
        tile.addEventListener('click', (e) => {
          e.stopPropagation();
          
          if (!hasDragged) {
            if (detailView && detailView.folderIndex === project.index) {
              closeDetailView();
            } else {
              openDetailView('', project.index);
            }
          }
        });
        
        currentStrip.appendChild(tile);
      });
    }
    
    // Remove tiles that are far off-screen to the left, but be more conservative
    while (tiles.length > allProjectsOrdered.length * 3 && scrollOffset > tileWidth * 5) {
      const firstTile = tiles[0];
      currentStrip.removeChild(firstTile);
      // Adjust scroll offset to compensate for removed tile
      scrollOffset -= tileWidth;
      startScrollOffset -= tileWidth;
      
      // Apply the new offset immediately to prevent visual jump
      currentStrip.style.transform = `translateX(-${scrollOffset}px)`;
    }
  };
  
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * 0.5; // Increase sensitivity
    updateScrollPosition(scrollOffset + delta);
  };
  
  const handleMouseDown = (e) => {
    isDragging = true;
    hasDragged = false;
    startX = e.clientX;
    startScrollOffset = scrollOffset;
    
    currentStrip.style.transition = 'none';
    currentStrip.style.cursor = 'grabbing';
    e.preventDefault();
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const newOffset = startScrollOffset - deltaX;
    
    // Mark as dragged if we've moved enough
    if (Math.abs(deltaX) > 5) {
      hasDragged = true;
    }
    
    updateScrollPosition(newOffset);
  };
  
  const handleMouseUp = () => {
    if (!isDragging) return;
    
    isDragging = false;
    
    // Restore transition after a short delay to ensure smooth stop
    setTimeout(() => {
      currentStrip.style.transition = 'transform 0.1s ease-out';
    }, 50);
    
    currentStrip.style.cursor = 'grab';
    
    // Reset drag flag after a short delay
    setTimeout(() => {
      hasDragged = false;
    }, 100);
  };
  
  // Store event listeners for cleanup
  currentStrip.handleWheel = handleWheel;
  currentStrip.handleMouseDown = handleMouseDown;
  currentStrip.handleMouseMove = handleMouseMove;
  currentStrip.handleMouseUp = handleMouseUp;
  
  // Add event listeners
  currentStrip.addEventListener('wheel', handleWheel);
  currentStrip.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
}

function removeContinuousStrip() {
  if (currentStrip) {
    // Remove event listeners
    if (currentStrip.handleWheel) {
      currentStrip.removeEventListener('wheel', currentStrip.handleWheel);
      currentStrip.removeEventListener('mousedown', currentStrip.handleMouseDown);
      document.removeEventListener('mousemove', currentStrip.handleMouseMove);
      document.removeEventListener('mouseup', currentStrip.handleMouseUp);
    }
    
    // Remove from DOM
    if (document.body.contains(currentStrip)) {
      document.body.removeChild(currentStrip);
    }
    currentStrip = null;
  }
  
  if (currentTopBorder && document.body.contains(currentTopBorder)) {
    document.body.removeChild(currentTopBorder);
    currentTopBorder = null;
  }
  
  // Show original bottom row
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, i) => {
    const row = Math.floor(i / 5);
    if (row === 4) {
      cell.style.visibility = 'visible';
      const back = cell.querySelector('.cell-back');
      const newImage = getRandomImage();
      if (newImage) {
        back.style.backgroundImage = `url('${newImage.url}')`;
        cell.dataset.folderIndex = newImage.folderIndex;
        cell.dataset.projectName = imageFolders[newImage.folderIndex].name; // Add project name
        if (newImage.contain) {
          back.classList.add('contain');
        } else {
          back.classList.remove('contain');
        }
      }
    }
  });
}

function closeDetailView() {
  if (!detailView) return;
  detailView = null;
  
  const detailPanel = document.getElementById('detailPanel');
  const grid = document.querySelector('.grid');
  const cells = grid.querySelectorAll('.cell');
  
  // Clear video immediately to stop playback
  detailPanel.querySelector('.detail-video').innerHTML = '';
  // Fade black overlay out to restore background video
  const blackOverlay = document.getElementById('blackOverlay');
  blackOverlay.style.opacity = '0';
  
  // Remove continuous strip and restore bottom row
  removeContinuousStrip();
  
  // Restore grid borders for middle rows only
  cells.forEach((cell, i) => {
    const row = Math.floor(i / 5);
    if (row >= 1 && row <= 3) {
      cell.classList.remove('grid-hidden');
    }
  });
  
  // Pre-generate all new images
  const newImages = [];
  cells.forEach((cell, i) => {
    const row = Math.floor(i / 5);
    if (row >= 1) {
      newImages[i] = getRandomImage();
    }
  });
  
  // Disable tile transitions before panel fades
  cells.forEach((cell, i) => {
    const row = Math.floor(i / 5);
    if (row === 0) return;
    cell.style.transition = 'none';
    cell.querySelector('.cell-inner').style.transition = 'none';
  });
  
  // Force reflow
  void document.body.offsetHeight;
  
  // Reset all tiles instantly (while panel still covers them)
  cells.forEach((cell, i) => {
    const row = Math.floor(i / 5);
    if (row === 0) return;
    
    cell.classList.remove('contact-flip');
    cell.classList.remove('detail-bottom');
    cell.classList.remove('animating');
    cell.classList.remove('flipped');
    cell.classList.remove('fading');
    
    const back = cell.querySelector('.cell-back');
    back.classList.remove('contact-back');
    
    // Load new image onto back
    if (newImages[i]) {
      back.style.backgroundImage = `url('${newImages[i].url}')`;
      cell.dataset.folderIndex = newImages[i].folderIndex;
      cell.dataset.projectName = imageFolders[newImages[i].folderIndex].name; // Add project name
      if (newImages[i].contain) {
        back.classList.add('contain');
      } else {
        back.classList.remove('contain');
      }
    }
  });
  
  // Force reflow then re-enable transitions
  void document.body.offsetHeight;
  
  cells.forEach((cell, i) => {
    const row = Math.floor(i / 5);
    if (row === 0) return;
    cell.style.transition = '';
    cell.querySelector('.cell-inner').style.transition = '';
  });
  
  // Now fade out the panel (tiles already reset underneath)
  detailPanel.classList.remove('open');
}

function openDetailView(imageUrl, folderIndex) {
  detailView = { imageUrl, folderIndex };
  const detailPanel = document.getElementById('detailPanel');
  const folder = imageFolders[folderIndex];
  
  // Fade black overlay in for fade-to-black effect
  const blackOverlay = document.getElementById('blackOverlay');
  blackOverlay.style.opacity = '1';
  
  // Hide grid borders for middle rows only
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, i) => {
    const row = Math.floor(i / 5);
    if (row >= 1 && row <= 3) {
      cell.classList.add('grid-hidden');
    }
  });
  
  // Update detail panel content - use Vimeo player instead of image
  const videoContainer = detailPanel.querySelector('.detail-video');
  videoContainer.innerHTML = ''; // Clear previous
  
  detailPanel.querySelector('.detail-title').textContent = folder.name;
  detailPanel.querySelector('.detail-category').textContent = folder.category.charAt(0).toUpperCase() + folder.category.slice(1);
  detailPanel.querySelector('.detail-description').textContent = folder.description;
  
  // Get all projects in non-adjacent order, excluding current project
  const allProjectsOrdered = createNonAdjacentProjectOrder(folderIndex);
  
  // Clear used images tracking for new detail view
  usedBottomRowImages.clear();
  
  // Capture bottom row images BEFORE they get changed
  const bottomRowCells = Array.from(cells).filter((cell, i) => Math.floor(i / 5) === 4);
  const capturedBottomRowImages = [];
  
  bottomRowCells.forEach((cell, index) => {
    const back = cell.querySelector('.cell-back');
    const imageUrl = back.style.backgroundImage;
    const folderIndex = cell.dataset.folderIndex;
    
    if (imageUrl && folderIndex) {
      capturedBottomRowImages.push({
        url: imageUrl.slice(5, -2), // Remove url('') wrapper
        folderIndex: parseInt(folderIndex)
      });
    }
  });
  
  // STEP 1: Immediately clear all background images and mark as animating
  requestAnimationFrame(() => {
    cells.forEach((cell, i) => {
      const row = Math.floor(i / 5);
      if (row >= 1 && row <= 3) {
        cell.classList.add('animating');
        const back = cell.querySelector('.cell-back');
        back.style.backgroundImage = 'none';
      }
    });
    
    // STEP 2: Flip all at once after clearing (no stagger for speed)
    requestAnimationFrame(() => {
      cells.forEach((cell, i) => {
        const row = Math.floor(i / 5);
        if (row >= 1 && row <= 3) {
          cell.classList.add('contact-flip');
          cell.querySelector('.cell-back').classList.add('contact-back');
          cell.classList.add('flipped');
        }
      });
      
      // Update bottom row - show projects in non-adjacent order
      cells.forEach((cell, i) => {
        const row = Math.floor(i / 5);
        const col = i % 5;
        if (row === 4) {
          cell.classList.add('detail-bottom');
          const back = cell.querySelector('.cell-back');
          const targetProject = allProjectsOrdered[col % allProjectsOrdered.length];
          const img = getUniqueRandomImage(targetProject.index);
          
          back.style.backgroundImage = `url('${img.url}')`;
          cell.dataset.folderIndex = img.folderIndex;
          cell.dataset.projectName = targetProject.name;
          
          // Add project name overlay
          let nameOverlay = back.querySelector('.project-name-overlay');
          if (!nameOverlay) {
            nameOverlay = document.createElement('div');
            nameOverlay.className = 'project-name-overlay';
            back.appendChild(nameOverlay);
          }
          nameOverlay.textContent = targetProject.name;
          
          if (img.contain) {
            back.classList.add('contain');
          } else {
            back.classList.remove('contain');
          }
          cell.classList.add('flipped');
        }
      });
      
      // Remove animating class and show panel after flip completes
      setTimeout(() => {
        cells.forEach((cell, i) => {
          const row = Math.floor(i / 5);
          if (row >= 1 && row <= 3) {
            cell.classList.remove('animating');
          }
        });
        detailPanel.classList.add('open');
        
        // Create continuous strip
        createContinuousStrip(allProjectsOrdered, capturedBottomRowImages);
        
        // Load Vimeo iframe after panel is visible
        setTimeout(() => {
          const iframe = document.createElement('iframe');
          iframe.src = `https://player.vimeo.com/video/${folder.vimeoId}?autoplay=0&title=0&byline=0&portrait=0`;
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
          iframe.setAttribute('allowfullscreen', '');
          videoContainer.appendChild(iframe);
        }, 100);
      }, 500);
    });
  });
}

function refreshContentTiles() {
  const grid = document.querySelector('.grid');
  const cells = grid.querySelectorAll('.cell');
  const contactPanel = document.getElementById('contactPanel');
  const detailPanel = document.getElementById('detailPanel');
  
  // Close detail view if open
  if (detailView) {
    detailView = null;
    detailPanel.classList.remove('open');
  }
  
  if (currentTab === 'contact') {
    // Fade black overlay in for contact page
    const blackOverlay = document.getElementById('blackOverlay');
    blackOverlay.style.opacity = '1';
    
    // Hide grid borders
    cells.forEach(cell => cell.classList.add('grid-hidden'));
    
    // Use requestAnimationFrame for smooth animation
    requestAnimationFrame(() => {
      // Clear images and mark animating for middle rows (1-3)
      cells.forEach((cell, i) => {
        const row = Math.floor(i / 5);
        if (row >= 1 && row <= 3) {
          cell.classList.add('animating');
          const back = cell.querySelector('.cell-back');
          back.style.backgroundImage = 'none';
        }
      });
      
      // Flip middle rows to white, unflip bottom row to show video
      requestAnimationFrame(() => {
        cells.forEach((cell, i) => {
          const row = Math.floor(i / 5);
          if (row >= 1 && row <= 3) {
            cell.classList.add('contact-flip');
            cell.querySelector('.cell-back').classList.add('contact-back');
            cell.classList.add('flipped');
          } else if (row === 4) {
            // Bottom row - unflip to show transparent front (video background)
            cell.classList.remove('flipped');
          }
        });
        
        // Show panel after flip completes
        setTimeout(() => {
          cells.forEach((cell, i) => {
            const row = Math.floor(i / 5);
            if (row >= 1 && row <= 3) {
              cell.classList.remove('animating');
            }
          });
          contactPanel.classList.add('open');
        }, 500);
      });
    });
  } else {
    // Fade black overlay out and restore grid when leaving contact page
    const blackOverlay = document.getElementById('blackOverlay');
    blackOverlay.style.opacity = '0';
    cells.forEach(cell => cell.classList.remove('grid-hidden'));
    
    // Pre-generate all new images
    const newImages = [];
    cells.forEach((cell, i) => {
      const row = Math.floor(i / 5);
      if (row === 0) return;
      newImages[i] = getRandomImage();
    });
    
    // Disable tile transitions before panel fades
    cells.forEach((cell, i) => {
      const row = Math.floor(i / 5);
      if (row === 0) return;
      cell.style.transition = 'none';
      cell.querySelector('.cell-inner').style.transition = 'none';
    });
    
    // Force reflow
    void document.body.offsetHeight;
    
    // Reset all tiles instantly (while panel still covers them)
    cells.forEach((cell, i) => {
      const row = Math.floor(i / 5);
      if (row === 0) return;
      
      cell.classList.remove('contact-flip');
      cell.classList.remove('detail-bottom');
      cell.classList.remove('animating');
      cell.classList.remove('flipped');
      cell.classList.remove('fading');
      
      const back = cell.querySelector('.cell-back');
      back.classList.remove('contact-back');
      
      // Load new image onto back
      if (newImages[i]) {
        back.style.backgroundImage = `url('${newImages[i].url}')`;
        cell.dataset.folderIndex = newImages[i].folderIndex;
        cell.dataset.projectName = imageFolders[newImages[i].folderIndex].name; // Add project name
        if (newImages[i].contain) {
          back.classList.add('contain');
        } else {
          back.classList.remove('contain');
        }
      }
    });
    
    // Force reflow then re-enable transitions
    void document.body.offsetHeight;
    
    cells.forEach((cell, i) => {
      const row = Math.floor(i / 5);
      if (row === 0) return;
      cell.style.transition = '';
      cell.querySelector('.cell-inner').style.transition = '';
    });
    
    // Now fade out the panel (tiles already reset underneath)
    contactPanel.classList.remove('open');
    
    // Auto-flip one random tile after panel fades
    setTimeout(() => {
      const contentCells = Array.from(cells).filter((c, i) => Math.floor(i / 5) > 0 && !c.classList.contains('flipped'));
      if (contentCells.length > 0) {
        const randomCell = contentCells[Math.floor(Math.random() * contentCells.length)];
        randomCell.classList.add('flipped');
      }
    }, 450);
  }
}

function setupGrid() {
  const grid = document.querySelector('.grid');
  grid.innerHTML = '';
  
  // Fixed 5x5 grid = 25 cells
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    
    const row = Math.floor(i / 5);
    const col = i % 5;
    const isTopRow = row === 0;

    if (isTopRow) {
      cell.classList.add('edge-top');
    }
    if (col === 0) {
      cell.classList.add('edge-left');
    }
    
    if (isTopRow) {
      cell.classList.add('static');
    }
    
    const inner = document.createElement('div');
    inner.className = 'cell-inner';
    
    const front = document.createElement('div');
    front.className = 'cell-front';
    
    const back = document.createElement('div');
    back.className = 'cell-back';
    
    // Top row navigation
    if (isTopRow) {
      // Only the middle position (col 2) gets the logo
      if (col === 2) {
        cell.classList.add('logo');
        cell.dataset.tab = 'contact';
        
        // Front side
        const logoImg = document.createElement('img');
        logoImg.src = 'SF Logo.png';
        logoImg.alt = 'SOMETHING FOUND';
        front.appendChild(logoImg);
        const contactLabel = document.createElement('span');
        contactLabel.className = 'contact-label';
        contactLabel.textContent = 'Contact';
        front.appendChild(contactLabel);
        
        // Back side (when active)
        const logoImgBack = document.createElement('img');
        logoImgBack.src = 'SF Logo.png';
        logoImgBack.alt = 'SOMETHING FOUND';
        back.appendChild(logoImgBack);
        const contactLabelBack = document.createElement('span');
        contactLabelBack.className = 'contact-label';
        contactLabelBack.textContent = 'Contact';
        back.appendChild(contactLabelBack);
        
        cell.addEventListener('click', () => switchTab('contact'));
      } else {
        // Blank cells for other positions
        cell.classList.add('blank');
        cell.dataset.tab = 'blank';
        
        // Front side - empty
        const labelFront = document.createElement('span');
        labelFront.textContent = '';
        front.appendChild(labelFront);
        
        // Back side - empty
        const labelBack = document.createElement('span');
        labelBack.textContent = '';
        back.appendChild(labelBack);
        
        // Make blank cells non-clickable
        cell.style.pointerEvents = 'none';
      }
    } else {
      const img = getRandomImage();
      if (img) {
        back.style.backgroundImage = `url('${img.url}')`;
        cell.dataset.folderIndex = img.folderIndex;
        cell.dataset.projectName = imageFolders[img.folderIndex].name; // Add project name
        if (img.contain) back.classList.add('contain');
      }
      
      cell.addEventListener('click', () => {
        // Don't allow clicking when contact panel is open
        if (currentTab === 'contact') return;
        
        // If already flipped, open detail view
        if (cell.classList.contains('flipped')) {
          const imageUrl = back.style.backgroundImage.slice(5, -2); // Remove url('')
          const folderIndex = parseInt(cell.dataset.folderIndex);
          const projectName = cell.dataset.projectName;
          
          openDetailView(imageUrl, folderIndex);
          return;
        }
        
        // If detail view is open, close it first
        if (detailView) {
          closeDetailView();
          return;
        }
        
        const img = getRandomImage();
        if (img) {
          back.style.backgroundImage = `url('${img.url}')`;
          cell.dataset.folderIndex = img.folderIndex;
          cell.dataset.projectName = imageFolders[img.folderIndex].name; // Add project name
          if (img.contain) {
            back.classList.add('contain');
          } else {
            back.classList.remove('contain');
          }
        }
        cell.classList.add('flipped');
      });
    }
    
    inner.appendChild(front);
    inner.appendChild(back);
    cell.appendChild(inner);
    
    grid.appendChild(cell);
  }
}

setupGrid();

// Close buttons
document.getElementById('detailCloseBtn').addEventListener('click', closeDetailView);
document.getElementById('contactCloseBtn').addEventListener('click', () => switchTab(previousTab));

// Poisson-distributed random clicks
function poissonInterval(lambda) {
  return -Math.log(1 - Math.random()) / lambda * 1000;
}

function randomClick() {
  // Don't auto-click when contact panel or detail view is open
  if (currentTab !== 'contact' && !detailView) {
    const cells = document.querySelectorAll('.cell:not(.static)');
    if (cells.length > 0) {
      const randomIndex = Math.floor(Math.random() * cells.length);
      const cell = cells[randomIndex];
      // Just flip the tile, don't open detail view
      if (!cell.classList.contains('flipped')) {
        const back = cell.querySelector('.cell-back');
        const img = getRandomImage();
        if (img) {
          back.style.backgroundImage = `url('${img.url}')`;
          cell.dataset.folderIndex = img.folderIndex;
          cell.dataset.projectName = imageFolders[img.folderIndex].name; // Add project name
          if (img.contain) {
            back.classList.add('contain');
          } else {
            back.classList.remove('contain');
          }
        }
      }
      cell.classList.toggle('flipped');
    }
  }
  const nextDelay = poissonInterval(0.5);
  setTimeout(randomClick, nextDelay);
}

setTimeout(randomClick, 2000);
