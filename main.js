// Folders with image count and extension
const imageFolders = [
  { path: 'Stills/CYBEAU stills', count: 26, ext: 'jpg', contain: false, category: 'fiction', name: 'CYBEAU', description: 'A fiction film project.', vimeoId: '1125334197' },
  { path: 'Stills/LA CITTÁ SUL RETRO stills', count: 9, ext: 'jpg', contain: false, category: 'documentary', name: 'LA CITTÁ SUL RETRO', description: 'A documentary exploring urban landscapes.', vimeoId: '1125339826' },
  { path: 'Stills/LZ129 stills', count: 31, ext: 'jpg', contain: false, category: 'archive', name: 'LZ129', description: 'Archive footage of the Hindenburg.', vimeoId: '1134835635' },
  { path: 'Stills/SALT stills', count: 60, ext: 'jpg', contain: true, category: 'documentary', name: 'SALT', description: 'A documentary about salt production.', vimeoId: '1135521486' },
  { path: 'Stills/SELFDESTRUCTIVE stills', count: 5, ext: 'png', contain: false, category: 'archive', name: 'SELFDESTRUCTIVE', description: 'An experimental archive piece.', vimeoId: '1134868223' }
];

// Current tab state - always hybrid for content
let currentTab = 'hybrid';
let previousTab = 'hybrid'; // Track previous tab for returning from contact
let detailView = null; // Track if detail view is open { imageUrl, folderIndex }
const tabButtons = ['logo'];

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

function closeDetailView() {
  if (!detailView) return;
  detailView = null;
  
  const detailPanel = document.getElementById('detailPanel');
  const grid = document.querySelector('.grid');
  const cells = grid.querySelectorAll('.cell');
  
  // Clear video immediately to stop playback
  detailPanel.querySelector('.detail-video').innerHTML = '';
  
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
  
  // Update detail panel content - use Vimeo player instead of image
  const videoContainer = detailPanel.querySelector('.detail-video');
  videoContainer.innerHTML = ''; // Clear previous
  
  detailPanel.querySelector('.detail-title').textContent = folder.name;
  detailPanel.querySelector('.detail-category').textContent = folder.category.charAt(0).toUpperCase() + folder.category.slice(1);
  detailPanel.querySelector('.detail-description').textContent = folder.description;
  
  const grid = document.querySelector('.grid');
  const cells = grid.querySelectorAll('.cell');
  
  // Get category folders for bottom row
  const categoryFolders = imageFolders
    .map((f, i) => ({ ...f, index: i }))
    .filter(f => f.category === folder.category);
  
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
      
      // Update bottom row
      cells.forEach((cell, i) => {
        const row = Math.floor(i / 5);
        const col = i % 5;
        if (row === 4) {
          cell.classList.add('detail-bottom');
          const back = cell.querySelector('.cell-back');
          const targetFolder = categoryFolders[col % categoryFolders.length];
          const img = getImageFromFolder(targetFolder.index);
          back.style.backgroundImage = `url('${img.url}')`;
          cell.dataset.folderIndex = img.folderIndex;
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
        if (img.contain) back.classList.add('contain');
      }
      
      cell.addEventListener('click', () => {
        // Don't allow clicking when contact panel is open
        if (currentTab === 'contact') return;
        
        // If already flipped, open detail view
        if (cell.classList.contains('flipped')) {
          const imageUrl = back.style.backgroundImage.slice(5, -2); // Remove url('')
          const folderIndex = parseInt(cell.dataset.folderIndex);
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
          if (img.contain) {
            back.classList.add('contain');
          } else {
            back.classList.remove('contain');
          }
        }
        cell.classList.toggle('flipped');
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
