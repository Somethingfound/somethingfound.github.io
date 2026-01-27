// Helper function to apply appropriate background sizing based on project
function applyBackgroundSizing(back, folderIndex) {
  const folder = imageFolders[folderIndex];
  const projectName = folder.name;
  
  // Remove all sizing classes first
  back.classList.remove('contain', 'lz129-crop', 'image-scale');
  
  // Apply appropriate class based on project
  if (projectName === 'LZ129') {
    back.classList.add('lz129-crop');
  } else if (projectName === 'I.M.A.G.E') {
    back.classList.add('image-scale');
  } else if (folder.contain) {
    back.classList.add('contain');
  }
}

// Folders with image count and extension
const imageFolders = [
  { path: 'Stills/ANGELIKA stills', count: 6, ext: 'jpg', contain: false, category: 'Hybrid', name: 'ANGELIKA', description: 'Retracing some car tire traces. Directed by Emil Baadsgaard. Edited and effects by Emil Baadsgaards and Leonardo Dal Bo. Sound design by Oskar Uhrskov Mikkelsen.', vimeoId: '1137756990' },
  { path: 'Stills/CLAYALLIANCE stills', count: 6, ext: 'jpg', contain: false, category: 'Client', name: 'CLAYALLIANCE', description: 'LerAlliancen (The Clay Alliance) is a collaboration between consultants, builders, researchers and contractors working to develop stamped clay soil for a proven, standardized and scalable building material. The publication presents the first results – from technical tests and robot-based production to international experience and specific pilot projects. Stamped clay soil has a number of advantages: low carbon footprint, high degree of circularity, natural moisture and indoor climate benefits, as well as the possibility of beautiful, exposed surfaces. With LerAlliancen, one of the world\'s oldest building materials is brought into a new era – as a climate-friendly component in the future of construction and an example of how we can reconcile the knowledge of the past with today\'s technology and collaboration. Produced by Something Found for Realdania, Pension Denmark and Kirkbi. Realdania research project report: https://realdania.dk/publikationer/faglige-publikationer/leralliancen', vimeoId: '1139696098' },
  { path: 'Stills/COOLING SYSTEMS stills', count: 35, ext: 'jpg', contain: false, category: 'documentary', name: 'COOLING SYSTEMS', description: 'Cooling Systems, 2025, Italy. Short - Post Production. Feature in development. At the Cervia salt pan, cycles of life echo one another on an intra-planetary journey between subjects large and small. Established to produce what was once the most widespread natural preservative, salt, the Cervia salt pan is now a sanctuary for a unique ecosystem, controlled by human visitors through their labour and leisure. A film by Something Found. Cinematography Leonardo Dal Bo. Additional Cinematography Oskar Uhrskov Mikkelsen. Editing Leonardo Dal Bo. Sound Design Oskar Uhrskov Mikkelsen. Password: tides.', vimeoId: '1147861076' },
  { path: 'Stills/CYBEAU stills', count: 17, ext: 'jpg', contain: false, category: 'fiction', name: 'CYBEAU', description: 'Cybeau is a short film about the pursuit for the ideal mechanical beauty in the near future. Androids compete in "The world\'s most marvelous android" a transhumanist beauty pageant, where the boundaries of the organic body are transgressed into insentient realms. The clash between Organic/Mechanic becomes apparent when a storm pours over the show and the sleek silver skin of the competitors gets washed off, revealing a lost human underneath. The spectacle is shown through brief stroboscopic views of the contestants, highlighting distinct facial features. Password: rainyevening.', vimeoId: '1125334197' },
  { path: 'Stills/GRANULAR SPACES stills', count: 20, ext: 'jpg', contain: false, category: 'Experimental', name: 'GLINT Video Granulizer', description: 'GLINT is a "Video Granulizer", taking inspiration from granular synthesis. It is a performance tool for real time reactive video.\n\nVideo Granulizer, 2025 (in progress)\n\nOskar Uhrskov Mikkelsen', vimeoId: '' },
  { path: 'Stills/I.M.A.G.E stills', count: 5, ext: 'jpg', contain: false, category: 'archive', name: 'I.M.A.G.E', description: 'An anti-advert selling those delectable and elusive I.M.A.G.E\'s for your consumption. Imitation becomes realisation. Writer, Director, Editor: Toby Paul Jones. Composed by: Andrew Jones. Starring Sinda Nichols. Special thanks to Mono No Aware, NYC - Intro to 16mm Course.', vimeoId: '' },
  { path: 'Stills/LA CITTÁ stills', count: 8, ext: 'jpg', contain: false, category: 'documentary', name: 'LA CITTÁ SUL RETRO', description: 'La Cittá Sul Retro (The City Tucked Away) follows the night-time inhabitants of Bologna and witnesses the unseen beauty of their lives in the dark. Beneath the sleeping city, a low frequency stirs as the energy of night begins to surface…\n\nCast:\nMassimo Scola - The Beekeeper\nSilvio Cesta Ruiz - Owner of \'Sabor Latino\' Kiosk\nAlessandro Guidi - The Street Artist\nCarlo Filippo Rusconi - The Horse Rider\nAndrea and Gianmarco Bellia - The Altar Boys\nSirol slr - The Road Signs Painters\nThe Vespa Scooter Riders\n\nCrew:\nDirected and filmed by Leonardo Dal Bo Lo Porto\nProduced by Toby Paul Jones\nEdited by Simon Christiansen\nSound Design by Oskar Uhrskov\n\n11 min, 2020, Italy\nPremiere at Cineteca di Bologna\nOnline Premiere via No Budge\nFeatured on Vice ID', vimeoId: '1125339826' },
  { path: 'Stills/LZ129 stills', count: 20, ext: 'jpg', contain: false, category: 'archive', name: 'LZ129', description: '2017, 3min, Denmark. Screened on Vimeo Staff Pick. LZ 129 is a found footage documentary that explores the industrial power and magnificence of the German Zeppelin airship. The film is a portrait of the Zeppelin as a living thing - from its construction, to flight, to its eventual demise in the Hindenburg disaster. LZ 129 evokes an emotional response from the viewer whereby underneath an aesthetic celebration of the Zeppelin as spectacle, Hitler\'s shadow casts a dangerous puzzle - the power of spectacle to avert the eye. Directed by Leonardo Dal Bo. Produced by Toby Paul Jones. Edited by Simon Christiansen, Lukass Purmals and Leonardo Dal Bo. Sound design by Mitra Bolouri Rasmussen.', vimeoId: '1134835635' },
  { path: 'Stills/RESPACE stills', count: 12, ext: 'jpg', contain: false, category: 'documentary', name: 'FEET ON THE GROUND, HEAD IN THE SKY', description: 'FEET ON THE GROUND, HEAD IN THE SKY is a documentary recording the connected lives of the residents of Silvertown, London and the diffusive effects of their hidden lives inside the walls of the Tate Institute - a former community hub reclaimed once more to its former glory after years of dereliction and neglect. Directed and Edited by Toby Paul Jones. Composed by Oskar Mikkelsen. Sound by Oskar Mikkelsen. Produced by SOMETHING FOUND.', vimeoId: '' },
  { path: 'Stills/SELFDESTRUCTIVE stills', count: 6, ext: 'jpg', contain: false, category: 'archive', name: 'SELFDESTRUCTIVE', description: '2018, 3 min. The looping sound tape degenerates as the atomic bomb danger is represented over and over in its self-destructive, dreadful yet sublime beauty. As the images echo pieces such as A Movie and The Atomic Café, the question arises: how can we protect ourselves from the naturalization process of the spectacularization of war? By exacerbating this visual phenomenon until we exorcise it? Directed by Leonardo Dal Bo. Sound Design Oskar Uhrskov Mikkelsen. Featured on Dogmilk Films.', vimeoId: '1134868223' },
  { path: 'Stills/SIGNALOGIA stills', count: 43, ext: 'jpg', contain: false, category: 'documentary', name: 'SIGNALOGIA', description: '2022 - on going, Italy, France, London, Mexico, site-specific artwork. Featured on Exibart. Through a painting-photography-video practice Signalogia infuses identity into anonymous spaces calling upon the inhabitants to re-identify themselves within the urban context. As the city margin expands, so does the prevalence of anonymous spaces. Signalogia proposes an inward expansion, highlighting new potentials within the already existing border of the metropolis. By bringing presence to otherwise invisible actors like air-inlets, silos, electrical junctions, they are made accomplices in the alternative city. Artwork by Leonardo Dal Bo. Curated by Oskar Uhrskov Mikkelsen.', vimeoId: '1133983165' },
  { path: 'Stills/SUTURE stills', count: 70, ext: 'jpg', contain: false, category: 'documentary', name: 'SUTURE', description: 'A documentary following surgical procedures and healing.', vimeoId: '1157528596' }
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
  
  // Handle logo fade effects when switching to/from contact
  if (tab === 'contact') {
    // Fade out original SF logo and fade in contact SF logo
    const originalLogo = document.querySelector('.logo .cell-back img');
    const contactLogo = document.querySelector('.sf-logo');
    
    if (originalLogo) {
      originalLogo.style.transition = 'opacity 0.5s ease';
      originalLogo.style.opacity = '0';
    }
    
    if (contactLogo) {
      contactLogo.style.transition = 'opacity 0.5s ease';
      contactLogo.style.opacity = '0';
      setTimeout(() => {
        contactLogo.style.opacity = '1';
      }, 100);
    }
  } else if (previousTab === 'contact') {
    // Fade in original SF logo and fade out contact SF logo
    const originalLogo = document.querySelector('.logo .cell-back img');
    const contactLogo = document.querySelector('.sf-logo');
    
    if (originalLogo) {
      originalLogo.style.transition = 'opacity 0.5s ease';
      originalLogo.style.opacity = '1';
    }
    
    if (contactLogo) {
      contactLogo.style.transition = 'opacity 0.5s ease';
      contactLogo.style.opacity = '0';
    }
  }
  
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
        ${imageFolders[img.folderIndex].name === 'LZ129' ? 'background-size: 140% auto; background-position: center center;' : imageFolders[img.folderIndex].name === 'I.M.A.G.E' ? 'background-size: 110% auto; background-position: center;' : 'background-size: cover; background-position: center;'}
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
  
  // Add navigation arrows for the strip
  const stripLeftArrow = document.createElement('div');
  stripLeftArrow.innerHTML = '‹';
  stripLeftArrow.style.cssText = `
    position: fixed;
    bottom: 8vh;
    left: 20px;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    user-select: none;
    opacity: 0.7;
    transition: opacity 0.2s ease;
    z-index: 101;
    pointer-events: auto;
  `;
  
  const stripRightArrow = document.createElement('div');
  stripRightArrow.innerHTML = '›';
  stripRightArrow.style.cssText = `
    position: fixed;
    bottom: 8vh;
    right: 20px;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    user-select: none;
    opacity: 0.7;
    transition: opacity 0.2s ease;
    z-index: 101;
    pointer-events: auto;
  `;
  
  // Add hover effects
  stripLeftArrow.addEventListener('mouseenter', () => stripLeftArrow.style.opacity = '1');
  stripLeftArrow.addEventListener('mouseleave', () => stripLeftArrow.style.opacity = '0.7');
  stripRightArrow.addEventListener('mouseenter', () => stripRightArrow.style.opacity = '1');
  stripRightArrow.addEventListener('mouseleave', () => stripRightArrow.style.opacity = '0.7');
  
  // Add click handlers for strip navigation
  stripLeftArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    updateScrollPosition(Math.max(0, scrollOffset - 200));
  });
  
  stripRightArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    updateScrollPosition(scrollOffset + 200);
  });
  
  // Add arrows to page
  document.body.appendChild(stripLeftArrow);
  document.body.appendChild(stripRightArrow);
  
  // Store arrows for cleanup
  currentStrip.leftArrow = stripLeftArrow;
  currentStrip.rightArrow = stripRightArrow;
  
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
    
    // Generate new tiles when scrolling near the end (right side)
    if (scrollOffset > totalWidth - viewportWidth * 2) {
      // Add another cycle of tiles to the right
      allProjectsOrdered.forEach(project => {
        const tile = document.createElement('div');
        const img = getUniqueProjectImage(project.index);
        
        tile.style.cssText = `
          flex: 0 0 20vw;
          height: 100%;
          position: relative;
          background-image: url('${img.url}');
          ${imageFolders[img.folderIndex].name === 'LZ129' ? 'background-size: 140% auto; background-position: center center;' : imageFolders[img.folderIndex].name === 'I.M.A.G.E' ? 'background-size: 110% auto; background-position: center;' : 'background-size: cover; background-position: center;'}
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
    
    // Generate new tiles when scrolling near the beginning (left side)
    if (scrollOffset < viewportWidth * 2) {
      // Add another cycle of tiles to the left
      const tilesToAdd = [];
      allProjectsOrdered.forEach(project => {
        const tile = document.createElement('div');
        const img = getUniqueProjectImage(project.index);
        
        tile.style.cssText = `
          flex: 0 0 20vw;
          height: 100%;
          position: relative;
          background-image: url('${img.url}');
          ${imageFolders[img.folderIndex].name === 'LZ129' ? 'background-size: 140% auto; background-position: center center;' : imageFolders[img.folderIndex].name === 'I.M.A.G.E' ? 'background-size: 110% auto; background-position: center;' : 'background-size: cover; background-position: center;'}
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
        
        tilesToAdd.push(tile);
      });
      
      // Add tiles to the beginning of the strip
      tilesToAdd.forEach(tile => {
        currentStrip.insertBefore(tile, currentStrip.firstChild);
      });
      
      // Adjust scroll offset to compensate for added tiles
      scrollOffset += tilesToAdd.length * tileWidth;
      startScrollOffset += tilesToAdd.length * tileWidth;
      
      // Apply the new offset immediately to prevent visual jump
      currentStrip.style.transform = `translateX(-${scrollOffset}px)`;
    }
    
    // Remove tiles that are far off-screen to the right
    while (tiles.length > allProjectsOrdered.length * 3 && scrollOffset > tileWidth * 5) {
      const firstTile = tiles[0];
      currentStrip.removeChild(firstTile);
      // Adjust scroll offset to compensate for removed tile
      scrollOffset -= tileWidth;
      startScrollOffset -= tileWidth;
      
      // Apply the new offset immediately to prevent visual jump
      currentStrip.style.transform = `translateX(-${scrollOffset}px)`;
    }
    
    // Remove tiles that are far off-screen to the left
    while (tiles.length > allProjectsOrdered.length * 3 && scrollOffset < totalWidth - viewportWidth * 2 - tileWidth * 5) {
      const lastTile = tiles[tiles.length - 1];
      currentStrip.removeChild(lastTile);
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
    
    // Remove arrows from DOM
    if (currentStrip.leftArrow && document.body.contains(currentStrip.leftArrow)) {
      document.body.removeChild(currentStrip.leftArrow);
    }
    if (currentStrip.rightArrow && document.body.contains(currentStrip.rightArrow)) {
      document.body.removeChild(currentStrip.rightArrow);
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
        applyBackgroundSizing(back, newImage.folderIndex);
      }
    }
  });
}

function closeDetailView() {
  if (!detailView) return;
  
  const detailPanel = document.getElementById('detailPanel');
  
  // Clean up picture viewer if it exists
  if (detailPanel.cleanupGallery) {
    detailPanel.cleanupGallery();
    detailPanel.cleanupGallery = null;
  }
  
  detailView = null;
  const grid = document.querySelector('.grid');
  const cells = grid.querySelectorAll('.cell');
  
  // Clear video immediately to stop playback
  detailPanel.querySelector('.detail-video').innerHTML = '';
  
  // Remove continuous strip and restore bottom row
  removeContinuousStrip();
  
  // Get current grid configuration for proper row calculation
  const config = getGridConfig();
  
  // Pre-generate all new images to restore tile backgrounds
  const newImages = [];
  cells.forEach((cell, i) => {
    const row = Math.floor(i / config.cols);
    if (row === 0) return; // Skip top row
    newImages[i] = getRandomImage();
  });
  
  // Restore grid borders and images for middle rows
  cells.forEach((cell, i) => {
    const row = Math.floor(i / config.cols);
    if (row >= 1 && row <= 3) {
      cell.classList.remove('grid-hidden');
      cell.classList.remove('animating');
      cell.classList.remove('contact-flip');
      cell.classList.remove('flipped');
      cell.classList.remove('detail-bottom');
      
      const back = cell.querySelector('.cell-back');
      back.classList.remove('contact-back');
      
      // Restore the background image
      if (newImages[i]) {
        back.style.backgroundImage = `url('${newImages[i].url}')`;
        cell.dataset.folderIndex = newImages[i].folderIndex;
        cell.dataset.projectName = imageFolders[newImages[i].folderIndex].name;
        if (newImages[i].contain) {
          back.classList.add('contain');
        } else {
          back.classList.remove('contain');
        }
      }
    }
  });
  
  // Now fade out the panel (tiles already reset underneath)
  detailPanel.classList.remove('open');
  
  // Force fade black overlay out immediately and ensure it happens
  const blackOverlay = document.getElementById('blackOverlay');
  blackOverlay.style.opacity = '0';
  
  // Double-check after a delay in case something interferes
  setTimeout(() => {
    blackOverlay.style.opacity = '0';
  }, 200);
}

function createPictureViewer(container, folder) {
  // Create image gallery container
  const galleryContainer = document.createElement('div');
  galleryContainer.style.cssText = `
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
  `;
  
  // Create main image element
  const mainImage = document.createElement('img');
  mainImage.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    cursor: pointer;
  `;
  
  // Create navigation arrows
  const leftArrow = document.createElement('div');
  leftArrow.innerHTML = '‹';
  leftArrow.style.cssText = `
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3rem;
    color: white;
    cursor: pointer;
    user-select: none;
    opacity: 0.7;
    transition: opacity 0.2s ease;
    z-index: 10;
  `;
  
  const rightArrow = document.createElement('div');
  rightArrow.innerHTML = '›';
  rightArrow.style.cssText = `
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3rem;
    color: white;
    cursor: pointer;
    user-select: none;
    opacity: 0.7;
    transition: opacity 0.2s ease;
    z-index: 10;
  `;
  
  // Add hover effects
  leftArrow.addEventListener('mouseenter', () => leftArrow.style.opacity = '1');
  leftArrow.addEventListener('mouseleave', () => leftArrow.style.opacity = '0.7');
  rightArrow.addEventListener('mouseenter', () => rightArrow.style.opacity = '1');
  rightArrow.addEventListener('mouseleave', () => rightArrow.style.opacity = '0.7');
  
  // Track current image index
  let currentImageIndex = 0;
  const totalImages = folder.count;
  
  // Function to load image by index
  function loadImage(index) {
    const imagePath = `${folder.path}/${index + 1}.${folder.ext}`;
    mainImage.src = imagePath;
    currentImageIndex = index;
  }
  
  // Navigation functions
  function nextImage() {
    const nextIndex = (currentImageIndex + 1) % totalImages;
    loadImage(nextIndex);
  }
  
  function prevImage() {
    const prevIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    loadImage(prevIndex);
  }
  
  // Add click handlers
  mainImage.addEventListener('click', (e) => {
    e.stopPropagation();
    nextImage();
  });
  
  leftArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    prevImage();
  });
  
  rightArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    nextImage();
  });
  
  // Create keyboard handler
  function handleKeydown(e) {
    if (detailView && detailView.folderIndex === imageFolders.indexOf(folder)) {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    }
  }
  
  // Add keyboard navigation
  document.addEventListener('keydown', handleKeydown);
  
  // Store cleanup function for when detail view closes
  galleryContainer.cleanup = () => {
    document.removeEventListener('keydown', handleKeydown);
  };
  
  // Load first image
  loadImage(0);
  
  // Add to container
  galleryContainer.appendChild(leftArrow);
  galleryContainer.appendChild(mainImage);
  galleryContainer.appendChild(rightArrow);
  container.appendChild(galleryContainer);
  
  return galleryContainer;
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
  const config = getGridConfig();
  cells.forEach((cell, i) => {
    const row = Math.floor(i / config.cols);
    if (row >= 1 && row <= 3) {
      cell.classList.add('grid-hidden');
    }
  });
  
  // Update detail panel content
  const videoContainer = detailPanel.querySelector('.detail-video');
  videoContainer.innerHTML = ''; // Clear previous
  
  detailPanel.querySelector('.detail-title').textContent = folder.name;
  detailPanel.querySelector('.detail-description').textContent = folder.description;
  
  // Get all projects in non-adjacent order, excluding current project
  const allProjectsOrdered = createNonAdjacentProjectOrder(folderIndex);
  
  // Clear used images tracking for new detail view
  usedBottomRowImages.clear();
  
  // Capture bottom row images BEFORE they get changed
  const bottomRowCells = Array.from(cells).filter((cell, i) => Math.floor(i / config.cols) === config.rows - 1);
  const capturedBottomRowImages = bottomRowCells.map(cell => {
    const back = cell.querySelector('.cell-back');
    const imageUrl = back.style.backgroundImage.slice(5, -2); // Remove url('') and ')
    const folderIndex = parseInt(cell.dataset.folderIndex);
    return { url: imageUrl, folderIndex: folderIndex };
  });
  
  // Store reference to current gallery for cleanup
  let currentGallery = null;
  
  // Animate panel opening
  requestAnimationFrame(() => {
    cells.forEach((cell, i) => {
      const row = Math.floor(i / config.cols);
      if (row >= 1 && row <= 3) {
        cell.classList.add('animating');
        const back = cell.querySelector('.cell-back');
        back.style.backgroundImage = 'none';
      }
    });
    
    requestAnimationFrame(() => {
      cells.forEach((cell, i) => {
        const row = Math.floor(i / config.cols);
        if (row >= 1 && row <= 3) {
          cell.classList.add('contact-flip');
          cell.querySelector('.cell-back').classList.add('contact-back');
          cell.classList.add('flipped');
        }
      });
      
      // Update bottom row
      cells.forEach((cell, i) => {
        const row = Math.floor(i / config.cols);
        const col = i % config.cols;
        if (row === config.rows - 1) {
          cell.classList.add('detail-bottom');
          const back = cell.querySelector('.cell-back');
          const targetProject = allProjectsOrdered[col % allProjectsOrdered.length];
          const img = getUniqueRandomImage(targetProject.index);
          
          back.style.backgroundImage = `url('${img.url}')`;
          cell.dataset.folderIndex = img.folderIndex;
          cell.dataset.projectName = targetProject.name;
          
          applyBackgroundSizing(back, img.folderIndex);
          cell.classList.add('flipped');
        }
      });
      
      setTimeout(() => {
        cells.forEach((cell, i) => {
          const row = Math.floor(i / config.cols);
          if (row >= 1 && row <= 3) {
            cell.classList.remove('animating');
          }
        });
        detailPanel.classList.add('open');
        
        // Create continuous strip
        createContinuousStrip(allProjectsOrdered, capturedBottomRowImages);
        
        // Load content after panel is visible
        setTimeout(() => {
          if (folder.vimeoId && folder.vimeoId.trim() !== '') {
            // Load Vimeo iframe for projects with videos
            const iframe = document.createElement('iframe');
            iframe.src = `https://player.vimeo.com/video/${folder.vimeoId}?autoplay=0&title=0&byline=0&portrait=0`;
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            videoContainer.appendChild(iframe);
          } else {
            // Create picture viewer for projects without videos
            currentGallery = createPictureViewer(videoContainer, folder);
          }
        }, 100);
      }, 500);
    });
  });
  
  // Store cleanup function
  detailPanel.cleanupGallery = () => {
    if (currentGallery && currentGallery.cleanup) {
      currentGallery.cleanup();
    }
  };
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

// Responsive grid configuration
function getGridConfig() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspectRatio = width / height;
  
  // Calculate 16:9 tile dimensions based on original 5x5 layout
  const baseTileWidth = width / 5; // Original 5-column width
  const baseTileHeight = baseTileWidth * (9/16); // 16:9 aspect ratio
  const tilesThatFitVertically = Math.floor(height / baseTileHeight);
  
  // Keep 16:9 tile format, adjust visible rows based on screen
  let cols, rows;
  
  if (aspectRatio >= 1.7) {
    // Very wide screens - 5x5 = 25 tiles
    cols = 5;
    rows = 5;
  } else if (aspectRatio >= 1.4) {
    // Wide landscape - 4x6 = 24 tiles
    cols = 4;
    rows = 6;
  } else if (aspectRatio >= 1.1) {
    // Mild landscape - 3x8 = 24 tiles
    cols = 3;
    rows = 8;
  } else if (aspectRatio >= 0.7) {
    // Near square/mild portrait - 2x12 = 24 tiles
    cols = 2;
    rows = 12;
  } else {
    // Portrait/vertical (9:16 and narrower) - 1x5 tiles visible, maintain 16:9 tile height
    cols = 1;
    rows = Math.min(5, tilesThatFitVertically); // Show max 5 rows based on 16:9 tile height
  }
  
  return { 
    cols: cols, 
    rows: rows, 
    totalCells: cols * rows,
    bottomRowCells: 0,
    logoPosition: Math.floor(cols / 2),
    needsScrolling: aspectRatio < 0.7, // Enable scrolling for portrait
    tileHeight: baseTileHeight // Maintain original 16:9 tile height
  };
}

// Update grid CSS dynamically
function updateGridCSS() {
  const config = getGridConfig();
  const grid = document.querySelector('.grid');
  
  grid.style.gridTemplateColumns = `repeat(${config.cols}, 1fr)`;
  
  // Always use proper 16:9 height for all layouts
  const tileWidth = window.innerWidth / config.cols; // Full width divided by columns
  const idealTileHeight = tileWidth * (9/16); // Perfect 16:9 aspect ratio
  
  if (config.needsScrolling) {
    // Portrait mode: 25 rows with scrolling
    grid.style.gridTemplateRows = `repeat(25, ${idealTileHeight}px)`;
    grid.classList.add('scrollable');
  } else {
    // All other modes: adjust tile height but limit the adjustment
    const availableHeight = window.innerHeight;
    const rowsNeeded = config.rows;
    const maxTileHeight = idealTileHeight * 1.2; // Allow max 20% taller than 16:9
    const minTileHeight = idealTileHeight * 0.8; // Allow max 20% shorter than 16:9
    
    let adjustedTileHeight = availableHeight / rowsNeeded;
    
    // Limit the adjustment to stay close to 16:9
    adjustedTileHeight = Math.max(minTileHeight, Math.min(maxTileHeight, adjustedTileHeight));
    
    grid.style.gridTemplateRows = `repeat(${rowsNeeded}, ${adjustedTileHeight}px)`;
    grid.classList.remove('scrollable');
  }
}

function setupGrid() {
  const grid = document.querySelector('.grid');
  grid.innerHTML = '';
  
  // Get responsive configuration
  const config = getGridConfig();
  updateGridCSS();
  
  // Create the correct number of tiles for each configuration
  let totalTiles;
  if (config.needsScrolling) {
    totalTiles = 25; // Always 25 tiles for portrait mode
  } else {
    totalTiles = config.cols * config.rows; // Full grid for landscape modes
  }
  
  // Create all grid cells
  for (let i = 0; i < totalTiles; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    
    const row = Math.floor(i / config.cols);
    const col = i % config.cols;
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
    
    // Handle top row navigation (only for the first row)
    if (isTopRow) {
      if (col === config.logoPosition) {
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
      // Content cell
      const img = getRandomImage();
      if (img) {
        back.style.backgroundImage = `url('${img.url}')`;
        cell.dataset.folderIndex = img.folderIndex;
        cell.dataset.projectName = imageFolders[img.folderIndex].name;
        applyBackgroundSizing(back, img.folderIndex);
      }
      
      cell.addEventListener('click', () => {
        // Don't allow clicking when contact panel is open
        if (currentTab === 'contact') return;
        
        // If already flipped, open detail view
        if (cell.classList.contains('flipped')) {
          const imageUrl = back.style.backgroundImage.slice(5, -2);
          const folderIndex = parseInt(cell.dataset.folderIndex);
          openDetailView(imageUrl, folderIndex);
          return;
        }
        
        // Flip cell
        cell.classList.add('flipped');
      });
    }
    
    inner.appendChild(front);
    inner.appendChild(back);
    cell.appendChild(inner);
    grid.appendChild(cell);
  }
  
  // Auto-flip one random content cell after a delay
  setTimeout(() => {
    const cells = grid.querySelectorAll('.cell');
    const contentCells = Array.from(cells).filter((c, i) => {
      const row = Math.floor(i / config.cols);
      return row > 0 && !c.classList.contains('flipped');
    });
    if (contentCells.length > 0) {
      const randomCell = contentCells[Math.floor(Math.random() * contentCells.length)];
      randomCell.classList.add('flipped');
    }
  }, 450);
}

// Handle window resize
window.addEventListener('resize', () => {
  setupGrid();
});

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
          applyBackgroundSizing(back, img.folderIndex);
        }
      }
      cell.classList.toggle('flipped');
    }
  }
  const nextDelay = poissonInterval(0.5);
  setTimeout(randomClick, nextDelay);
}

// Initialize grid immediately when page loads
document.addEventListener('DOMContentLoaded', () => {
  setupGrid();
});

setTimeout(randomClick, 2000);
