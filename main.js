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
  { path: 'Stills/ANGELIKA stills', count: 6, ext: 'jpg', contain: false, category: 'Hybrid', name: 'ANGELIKA', year: '2023', location: 'Denmark', cast: 'Directed by Emil Baadsgaard. Edited and effects by Emil Baadsgaards and Leonardo Dal Bo. Sound design by Oskar Uhrskov Mikkelsen.', featured: '', description: 'Retracing some car tire traces.', vimeoId: '1137756990' },
  { path: 'Stills/CLAYALLIANCE stills', count: 6, ext: 'jpg', contain: false, category: 'Client', name: 'CLAYALLIANCE', year: '2024', location: '', cast: 'Produced by Something Found for Realdania, Pension Denmark and Kirkbi.', featured: '', description: 'LerAlliancen (The Clay Alliance) is a collaboration between consultants, builders, researchers and contractors working to develop stamped clay soil for a proven, standardized and scalable building material. The publication presents the first results – from technical tests and robot-based production to international experience and specific pilot projects. Stamped clay soil has a number of advantages: low carbon footprint, high degree of circularity, natural moisture and indoor climate benefits, as well as the possibility of beautiful, exposed surfaces. With LerAlliancen, one of the world\'s oldest building materials is brought into a new era – as a climate-friendly component in the future of construction and an example of how we can reconcile the knowledge of the past with today\'s technology and collaboration.', vimeoId: '1139696098' },
  { path: 'Stills/COOLING SYSTEMS stills', count: 35, ext: 'jpg', contain: false, category: 'documentary', name: 'COOLING SYSTEMS', year: '', location: 'Italy', cast: 'A film by Something Found. Cinematography Leonardo Dal Bo. Additional Cinematography Oskar Uhrskov Mikkelsen. Editing Leonardo Dal Bo. Sound Design Oskar Uhrskov Mikkelsen.', featured: 'In development', description: 'At the Cervia salt pan, cycles of life echo one another on an intra-planetary journey between subjects large and small. Established to produce what was once the most widespread natural preservative, salt, the Cervia salt pan is now a sanctuary for a unique ecosystem, controlled by human visitors through their labour and leisure. Password: tides.', vimeoId: '' },
  { path: 'Stills/CYBEAU stills', count: 17, ext: 'jpg', contain: false, category: 'fiction', name: 'CYBEAU', year: '', location: 'France', cast: '', featured: 'In development', description: 'Cybeau is a short film about the pursuit for the ideal mechanical beauty in the near future. Androids compete in "The world\'s most marvelous android" a transhumanist beauty pageant, where the boundaries of the organic body are transgressed into insentient realms. The clash between Organic/Mechanic becomes apparent when a storm pours over the show and the sleek silver skin of the competitors gets washed off, revealing a lost human underneath. The spectacle is shown through brief stroboscopic views of the contestants, highlighting distinct facial features. Password: rainyevening.', vimeoId: '' },
  { path: 'Stills/GRANULAR SPACES stills', count: 20, ext: 'jpg', contain: false, category: 'Experimental', name: 'GLINT Video Granulizer', year: '', location: 'Denmark', cast: 'Oskar Uhrskov Mikkelsen', featured: 'In development', description: 'GLINT is a "Video Granulizer", taking inspiration from granular synthesis. It is a performance tool for real time reactive video.\n\nVideo Granulizer (in progress)', vimeoId: '' },
  { path: 'Stills/I.M.A.G.E stills', count: 5, ext: 'jpg', contain: false, category: 'archive', name: 'I.M.A.G.E', year: '2022', location: 'New York', cast: 'Writer, Director, Editor: Toby Paul Jones. Composed by: Andrew Jones. Starring Sinda Nichols. Special thanks to Mono No Aware, NYC - Intro to 16mm Course.', featured: '', description: 'An anti-advert selling those delectable and elusive I.M.A.G.E\'s for your consumption. Imitation becomes realisation.', vimeoId: '' },
  { path: 'Stills/LA CITTÁ stills', count: 8, ext: 'jpg', contain: false, category: 'documentary', name: 'LA CITTÁ SUL RETRO', year: '2020', location: 'Italy', cast: 'Directed and filmed by Leonardo Dal Bo Lo Porto. Produced by Toby Paul Jones. Edited by Simon Christiansen. Sound Design by Oskar Uhrskov.', featured: 'Premiere at Cineteca di Bologna. Online Premiere via No Budge. Featured on Vice ID', description: 'La Cittá Sul Retro (The City Tucked Away) follows the night-time inhabitants of Bologna and witnesses the unseen beauty of their lives in the dark. Beneath the sleeping city, a low frequency stirs as the energy of night begins to surface…', vimeoId: '1125339826' },
  { path: 'Stills/LZ129 stills', count: 20, ext: 'jpg', contain: false, category: 'archive', name: 'LZ129', year: '2017', location: 'Denmark', cast: 'Directed by Leonardo Dal Bo. Produced by Toby Paul Jones. Edited by Simon Christiansen, Lukass Purmals and Leonardo Dal Bo. Sound design by Mitra Bolouri Rasmussen.', featured: 'Screened on Vimeo Staff Pick', description: 'LZ 129 is a found footage documentary that explores the industrial power and magnificence of the German Zeppelin airship. The film is a portrait of the Zeppelin as a living thing - from its construction, to flight, to its eventual demise in the Hindenburg disaster. LZ 129 evokes an emotional response from the viewer whereby underneath an aesthetic celebration of the Zeppelin as spectacle, Hitler\'s shadow casts a dangerous puzzle - the power of spectacle to avert the eye.', vimeoId: '1134835635' },
  { path: 'Stills/RESPACE stills', count: 12, ext: 'jpg', contain: false, category: 'documentary', name: 'FEET ON THE GROUND, HEAD IN THE SKY', year: '', location: 'London', cast: 'Directed and Edited by Toby Paul Jones. Composed by Oskar Mikkelsen. Sound by Oskar Mikkelsen. Produced by SOMETHING FOUND.', featured: 'In development', description: 'A documentary recording the connected lives of the residents of Silvertown, London and the diffusive effects of their hidden lives inside the walls of the Tate Institute - a former community hub reclaimed once more to its former glory after years of dereliction and neglect.', vimeoId: '' },
  { path: 'Stills/SELFDESTRUCTIVE stills', count: 6, ext: 'jpg', contain: false, category: 'archive', name: 'SELFDESTRUCTIVE', year: '2018', location: 'Italy', cast: 'Directed by Leonardo Dal Bo. Sound Design Oskar Uhrskov Mikkelsen.', featured: 'Featured on Dogmilk Films', description: 'The looping sound tape degenerates as the atomic bomb danger is represented over and over in its self-destructive, dreadful yet sublime beauty. As the images echo pieces such as A Movie and The Atomic Café, the question arises: how can we protect ourselves from the naturalization process of the spectacularization of war? By exacerbating this visual phenomenon until we exorcise it?', vimeoId: '1134868223' },
  { path: 'Stills/SIGNALOGIA stills', count: 43, ext: 'jpg', contain: false, category: 'documentary', name: 'SIGNALOGIA', year: '2022', location: 'Italy, France, London, Mexico', cast: 'Artwork by Leonardo Dal Bo. Curated by Oskar Uhrskov Mikkelsen.', featured: 'Featured on Exibart', description: 'Through a painting-photography-video practice Signalogia infuses identity into anonymous spaces calling upon the inhabitants to re-identify themselves within the urban context. As the city margin expands, so does the prevalence of anonymous spaces. Signalogia proposes an inward expansion, highlighting new potentials within the already existing border of the metropolis. By bringing presence to otherwise invisible actors like air-inlets, silos, electrical junctions, they are made accomplices in the alternative city.', vimeoId: '1133983165' },
  { path: 'Stills/SUTURE stills', count: 70, ext: 'jpg', contain: false, category: 'documentary', name: 'SUTURE: staging the scars', year: '2024', location: 'Italy', cast: 'artwork by Leonardo Dal Bo. curated by Toby Paul Jones and Oskar Uhrskov. exhibited Venice Arsenale', featured: '', description: 'Our skin is a surface. A surface which changes with time - the cracks on it are the indelible mark of happenings, of time imprinting itself on our bodies. As I age, cracks - their very essence as tactile evidence of lost (or found) time - have fascinated me. I am a person who ages, whose skin cracks as time moves forward. But as my skin cracks, it leaves a trace of the past in the present, a physical manifestation of living memory.\nA wall, like our skin, has a living memory. A sudden, intense blow can create a crack, or slowly a fracture can form as pieces tumble - but the living memory of those pieces remains - despite their absence, the trace of their presence lingers. Sutures allow our wounds to heal, for cracks to connect, but we will always wear the scars of time, and must not forget where they came from. \nIf a crack is a wound, how can we use them to help us heal the wounds of history? The question is not to look away from the cracks, but to find them, to remember them, and by remembering them, imagine alternative futures. \n\'Nothing is created, nothing is destroyed, everything is transformed\'. - Lavoisier\'s Law', vimeoId: '1157528596' }
];

// Phone mode specific contact description tile
function showContactDescription() {
  console.log('Phone mode - Creating contact description tile');
  
  // Check if contact description tile already exists
  const existingContact = document.querySelector('[data-contact-description="true"]');
  if (existingContact) {
    console.log('Phone mode - Contact description tile already exists, removing old one');
    existingContact.remove();
    // Update grid CSS to adjust scrollable area after removal
    updateGridCSS();
    return;
  }
  
  // Find the SF logo tile (index 0) to insert contact tile after it
  const cells = document.querySelectorAll('.cell');
  const insertPosition = 1; // Insert after SF logo tile (index 0)
  
  // Create new contact description tile
  const contactTile = document.createElement('div');
  contactTile.className = 'cell';
  contactTile.setAttribute('data-contact-description', 'true');
  contactTile.style.cssText = `
    background: black;
    z-index: 50;
  `;
  
  const inner = document.createElement('div');
  inner.className = 'cell-inner';
  
  const front = document.createElement('div');
  front.className = 'cell-front';
  front.style.cssText = `
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
  `;
  
  // Create contact content
  const contactContainer = document.createElement('div');
  contactContainer.style.cssText = `
    color: white;
    font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
    font-size: 14px;
    line-height: 1.4;
    max-height: 100%;
    overflow-y: auto;
    width: 100%;
    text-align: center;
  `;
  
  contactContainer.innerHTML = `
    <div class="contact-header" style="text-align: center; margin-bottom: 20px;">
      <div class="logo-container" style="position: relative; margin-bottom: 15px;">
        <img src="NAMES CIRCLE.png" class="names-circle" alt="Names Circle" style="width: 120px; height: 120px; animation: rotate 20s linear infinite;">
        <img src="SF Logo.png" class="sf-logo" alt="Something Found Logo" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 45px; height: 45px;">
      </div>
      <h2 class="tagline" style="margin: 10px 0; font-size: 12px; font-weight: normal; color: #ccc; line-height: 1.3; font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;">A hybrid media company working across documentary film, site-specific artwork, archive, and architecture.</h2>
    </div>
    
    <div class="contact-content" style="display: flex; justify-content: space-between; text-align: left;">
      <div class="contact-left" style="flex: 1;">
        <div class="contact-section" style="margin-bottom: 15px;">
          <h3 style="margin: 0 0 5px 0; font-size: 16px; font-weight: bold; font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;">Contact</h3>
          <p style="margin: 0; font-size: 14px; font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;"><a href="mailto:contact@somethingfound.online" style="color: white;">contact@somethingfound.online</a></p>
        </div>
        
        <div class="contact-section">
          <h3 style="margin: 0 0 5px 0; font-size: 16px; font-weight: bold; font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;">Locations</h3>
          <p style="margin: 0; font-size: 14px; font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;">Bologna - Aarhus - London</p>
        </div>
      </div>
      
      <div class="contact-right" style="flex: 1;">
      </div>
    </div>
    
    <div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid #333;">
      <img src="SF Logo.png" alt="SOMETHING FOUND" style="width: 40px; height: 40px; cursor: pointer;" onclick="this.closest('.cell').remove(); setTimeout(() => updateGridCSS(), 50);">
      <div style="margin-top: 5px;">
        <small style="color: #999; font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;">Tap SF logo to close</small>
      </div>
    </div>
    
    <style>
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    </style>
  `;
  
  front.appendChild(contactContainer);
  inner.appendChild(front);
  contactTile.appendChild(inner);
  
  // Insert the new tile after the SF logo tile
  const grid = document.querySelector('.grid');
  if (cells[insertPosition]) {
    grid.insertBefore(contactTile, cells[insertPosition]);
  } else {
    grid.appendChild(contactTile);
  }
  
  // Update grid CSS to adjust scrollable area after adding contact tile
  updateGridCSS();
  
  console.log(`Phone mode - Contact description tile inserted at position ${insertPosition}`);
}

// Phone mode specific contact description hide function
function hideContactDescription() {
  console.log('Phone mode - Hiding contact description tile');
  
  // Find and remove contact description tile
  const descCell = document.querySelector('[data-contact-description="true"]');
  if (descCell) {
    const descFront = descCell.querySelector('.cell-front');
    const descBack = descCell.querySelector('.cell-back');
    
    // Clear the cell
    descFront.innerHTML = '';
    descBack.innerHTML = '';
    descBack.style.background = '';
    descBack.style.color = '';
    descBack.style.padding = '';
    descBack.style.display = '';
    descBack.style.flexDirection = '';
    descBack.style.justifyContent = '';
    descBack.style.alignItems = '';
    descBack.style.textAlign = '';
    descBack.style.fontSize = '';
    descBack.style.lineHeight = '';
    descBack.style.zIndex = '';
    
    // Remove the marker
    delete descCell.dataset.contactDescription;
    
    // Update grid to remove the description tile
    updateGridCSS();
    
    console.log('Phone mode - Contact description tile removed');
  }
}

// Phone mode specific homepage return - no array functions
function phoneReturnToHomepage() {
  console.log('Phone mode - Returning to homepage (no array functions)');
  
  // Most aggressive scroll to top methods
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scroll(0, 0);
  window.scrollTo(0, 0);
  
  // Force scroll on any scrollable containers
  const grid = document.querySelector('.grid');
  if (grid) {
    grid.scrollTop = 0;
    grid.scrollLeft = 0;
  }
  
  // Try smooth scroll as fallback after forcing immediate scroll
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, 50);
  
  console.log('Phone mode - Scroll to top executed with multiple methods');
}

// Phone mode specific contact handler - overlay on contact button with black background
function openPhoneContact() {
  console.log('Phone mode - Opening contact panel');
  
  // Get grid config for tile sizing first
  const config = getGridConfig();
  const tileWidth = window.innerWidth / config.cols;
  const tileHeight = tileWidth * (9/16); // 16:9 aspect ratio
  
  // Create black overlay that covers everything
  let blackOverlay = document.querySelector('.phone-contact-overlay');
  if (!blackOverlay) {
    blackOverlay = document.createElement('div');
    blackOverlay.className = 'phone-contact-overlay';
    blackOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: black;
      z-index: 999;
      visibility: visible;
      opacity: 1;
    `;
    document.body.appendChild(blackOverlay);
  }
  
  // Make SF logo always on top in phone mode
  const sfLogoCells = document.querySelectorAll('.cell.logo');
  sfLogoCells.forEach(cell => {
    cell.style.zIndex = '1001'; // Above black overlay (999) and contact panel (1000)
  });
  
  // Get or create contact panel that appears on contact button
  let contactPanel = document.querySelector('.contact-panel');
  if (!contactPanel) {
    contactPanel = document.createElement('div');
    contactPanel.className = 'contact-panel';
    contactPanel.innerHTML = `
      <div class="contact-title">
        <h2>Contact</h2>
      </div>
      <div class="contact-info">
        <p><strong>Email:</strong> <a href="mailto:info@somethingfound.dk">info@somethingfound.dk</a></p>
        <p><strong>Phone:</strong> +45 41 94 84 07</p>
        <p><strong>Address:</strong> Copenhagen, Denmark</p>
      </div>
      <div class="sf-logo">
        <img src="SF Logo.png" alt="SOMETHING FOUND">
      </div>
      <button class="contact-close">&times;</button>
    `;
    document.body.appendChild(contactPanel);
    
    // Add close button functionality
    const closeBtn = contactPanel.querySelector('.contact-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closePhoneContact);
    }
    
    // Add SF logo click functionality - ONLY close contact, no array functions
    const sfLogo = contactPanel.querySelector('.sf-logo');
    if (sfLogo) {
      sfLogo.addEventListener('click', () => {
        console.log('Phone mode - SF logo in contact clicked, closing contact');
        closePhoneContact();
      });
    }
  }
  
  console.log(`Phone mode - Tile dimensions: ${tileWidth}px x ${tileHeight}px`);
  console.log(`Phone mode - Contact button position: left: ${tileWidth}px`);
  
  // Position contact panel below top SF logo (keep SF logo visible)
  contactPanel.style.cssText = `
    position: fixed;
    top: ${tileHeight + 10}px; // Below top SF logo with 10px gap
    left: ${tileWidth}px; // On contact tile (tile 2)
    width: ${tileWidth * 2}px; // 2 tiles wide to show full circle
    height: ${tileHeight * 2}px; // 2 tiles tall to show full circle
    background: black;
    color: white;
    padding: 20px;
    border: 1px solid white;
    z-index: 1000;
    font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    visibility: visible;
    opacity: 1;
    font-size: 14px;
    line-height: 1.3;
    text-align: center;
    overflow: hidden;
    box-sizing: border-box;
  `;
  
  // Style the contact info for better visibility - larger text for bigger panel
  const contactInfo = contactPanel.querySelector('.contact-info');
  if (contactInfo) {
    contactInfo.style.cssText = `
      margin: 10px 0;
      font-size: 14px;
      line-height: 1.4;
      color: white;
      text-align: center;
      padding: 0;
    `;
    
    // Make each line larger
    const paragraphs = contactInfo.querySelectorAll('p');
    paragraphs.forEach(p => {
      p.style.cssText = `
        margin: 5px 0;
        font-size: 14px;
        line-height: 1.4;
        color: white;
      `;
    });
  }
  
  // Style the contact title - larger
  const contactTitle = contactPanel.querySelector('.contact-title');
  if (contactTitle) {
    contactTitle.style.cssText = `
      margin: 0 0 15px 0;
      font-size: 18px;
      font-weight: bold;
      color: white;
      text-align: center;
      padding: 0;
    `;
    
    const h2 = contactTitle.querySelector('h2');
    if (h2) {
      h2.style.cssText = `
        margin: 0;
        font-size: 18px;
        font-weight: bold;
        color: white;
      `;
    }
  }
  
  // Style the SF logo - larger
  const sfLogo = contactPanel.querySelector('.sf-logo');
  if (sfLogo) {
    sfLogo.style.cssText = `
      margin: 15px 0 0 0;
      width: 40px;
      height: 40px;
      cursor: pointer;
    `;
    
    const img = sfLogo.querySelector('img');
    if (img) {
      img.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: contain;
      `;
    }
  }
  
  // Style the close button - larger
  const closeBtn = contactPanel.querySelector('.contact-close');
  if (closeBtn) {
    closeBtn.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      background: white;
      color: black;
      border: none;
      width: 30px;
      height: 30px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }
  
  // Force the panel to be shown
  contactPanel.classList.add('open');
  
  // Fallback: If the panel is still off-screen, use viewport-based positioning
  setTimeout(() => {
    const rect = contactPanel.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    
    console.log(`Phone mode - Contact panel rect:`, rect);
    console.log(`Phone mode - Viewport width: ${viewportWidth}px`);
    
    // If panel is outside viewport, reposition it
    if (rect.left >= viewportWidth || rect.right <= 0) {
      console.log('Phone mode - Contact panel outside viewport, repositioning');
      
      // Position in the center of the screen as fallback
      const fallbackLeft = (viewportWidth - rect.width) / 2;
      const fallbackTop = (window.innerHeight - rect.height) / 2;
      
      contactPanel.style.left = `${fallbackLeft}px`;
      contactPanel.style.top = `${fallbackTop}px`;
      
      console.log(`Phone mode - Fallback position: left: ${fallbackLeft}px, top: ${fallbackTop}px`);
    }
  }, 100);
  
  console.log('Phone mode - Contact panel opened on contact button with black overlay');
}

// Phone mode specific contact close handler
function closePhoneContact() {
  console.log('Phone mode - Closing contact panel');
  
  // Hide contact panel
  const contactPanel = document.querySelector('.contact-panel');
  if (contactPanel) {
    contactPanel.classList.remove('open');
  }
  
  // Remove black overlay
  const blackOverlay = document.querySelector('.phone-contact-overlay');
  if (blackOverlay) {
    blackOverlay.style.visibility = 'hidden';
    blackOverlay.style.opacity = '0';
  }
  
  // Reset SF logo z-index back to normal
  const sfLogoCells = document.querySelectorAll('.cell.logo');
  sfLogoCells.forEach(cell => {
    cell.style.zIndex = '10'; // Back to normal z-index
  });
  
  console.log('Phone mode - Contact panel closed and overlay removed');
}
function handleIOSVideoAutoplay() {
  const video = document.querySelector('.bg-video');
  
  // Check if it's iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  if (isIOS && video) {
    // Try to play video on first user interaction
    const playVideo = () => {
      video.play().catch(error => {
        console.log('iOS video autoplay prevented:', error);
        // Fallback: hide video and show background color
        video.style.display = 'none';
        document.body.style.backgroundColor = '#000';
      });
    };
    
    // Try to play immediately
    playVideo();
    
    // Also try on first touch/click
    document.addEventListener('touchstart', playVideo, { once: true });
    document.addEventListener('click', playVideo, { once: true });
    
    // Add a fallback in case video never plays
    setTimeout(() => {
      if (video.paused) {
        video.style.display = 'none';
        document.body.style.backgroundColor = '#000';
      }
    }, 3000);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  handleIOSVideoAutoplay();
});

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
  
  // If clicking projects while already on projects, go back to hybrid
  if (tab === 'projects' && currentTab === 'projects') {
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
  
  // PHONE MODE: Handle scroll locking for contact page
  const config = getGridConfig();
  if (config.cols === 1) {
    if (tab === 'contact') {
      // Lock scroll when opening contact in phone mode
      document.body.classList.add('detail-open');
      console.log('Phone mode - Contact opened, scroll locked');
    } else if (previousTab === 'contact') {
      // Unlock scroll when closing contact in phone mode
      document.body.classList.remove('detail-open');
      console.log('Phone mode - Contact closed, scroll unlocked');
    }
  }
  
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
    } else if (cellTab === 'projects' && tab === 'projects') {
      cell.classList.add('flipped');
    } else if (cellTab === 'projects') {
      cell.classList.remove('flipped');
    }
  });
  
  // Handle toggle functionality for Contact and Projects
  if (tab === 'projects') {
    // Direct switch - close contact immediately if open
    const contactPanel = document.getElementById('contactPanel');
    if (contactPanel && contactPanel.classList.contains('open')) {
      contactPanel.classList.remove('open');
    }
    // Set currentTab and refresh immediately
    currentTab = 'projects';
    refreshContentTiles();
  } else if (tab === 'contact') {
    // Direct switch - close projects immediately if open
    const projectsPanel = document.getElementById('projectsPanel');
    if (projectsPanel && projectsPanel.classList.contains('open')) {
      projectsPanel.classList.remove('open');
    }
    // Set currentTab and refresh immediately
    currentTab = 'contact';
    refreshContentTiles();
  } else {
    // Handle hybrid/landing page - clean up both contact and projects
    hideProjectsPage();
    const contactPanel = document.getElementById('contactPanel');
    if (contactPanel && contactPanel.classList.contains('open')) {
      contactPanel.classList.remove('open');
    }
    // Clear black overlay when returning to landing page
    const blackOverlay = document.getElementById('blackOverlay');
    if (blackOverlay) {
      blackOverlay.style.opacity = '0';
    }
  }
  
  // Refresh content tiles
  refreshContentTiles();
}

function showProjectsPage() {
  // Fade black overlay in for projects page
  const blackOverlay = document.getElementById('blackOverlay');
  console.log('Projects: Black overlay element:', blackOverlay);
  console.log('Projects: Black overlay current opacity:', blackOverlay.style.opacity);
  blackOverlay.style.opacity = '1';
  console.log('Projects: Black overlay after setting opacity:', blackOverlay.style.opacity);
  
  // Hide content rows (rows 1-3) but keep top row visible
  const cells = document.querySelectorAll('.cell');
  console.log('Projects: Total cells found:', cells.length);
  cells.forEach((cell, i) => {
    const row = Math.floor(i / 5);
    if (row >= 1 && row <= 3) {
      cell.classList.add('grid-hidden');
    }
  });
  console.log('Projects: Added grid-hidden to rows 1-3');
  
  // Skip animations when switching - show panel immediately
  const projectsPanel = document.getElementById('projectsPanel');
  if (!projectsPanel) {
    const newProjectsPanel = document.createElement('div');
    newProjectsPanel.id = 'projectsPanel';
    newProjectsPanel.className = 'contact-panel';
    document.body.appendChild(newProjectsPanel);
    console.log('Projects: Created new projects panel');
  }
  
  // Populate projects with project list
  const projectList = document.createElement('div');
  projectList.className = 'project-list';
  
  imageFolders.forEach((folder, index) => {
    const projectItem = document.createElement('div');
    projectItem.className = 'project-item';
    projectItem.innerHTML = `
      <div class="project-name">${folder.name}</div>
    `;
    
    projectItem.addEventListener('click', () => {
      hideProjectsPage();
      openDetailView('', index);
    });
    
    projectList.appendChild(projectItem);
  });
  
  const panel = document.getElementById('projectsPanel');
  panel.innerHTML = '';
  panel.appendChild(projectList);
  
  // Show panel immediately - no animations
  panel.classList.add('open');
  console.log('Projects: Added open class to projects panel');
  
  // Set tile states directly without animation
  cells.forEach((cell, i) => {
    const row = Math.floor(i / config.cols);
    if (row >= 1 && row <= 3) {
      cell.classList.add('flipped');
      cell.querySelector('.cell-back').classList.add('contact-back');
    } else if (row === 0) {
      const back = cell.querySelector('.cell-back');
      back.style.backgroundImage = 'none';
      back.style.backgroundColor = 'black';
      if (cell.classList.contains('projects')) {
        back.style.backgroundColor = 'black';
        back.style.backgroundImage = 'none';
        back.style.backgroundSize = 'cover';
        back.style.backgroundPosition = 'center';
        back.classList.remove('contact-back');
      }
    }
  });
}

function hideProjectsPage() {
  const projectsPanel = document.getElementById('projectsPanel');
  if (projectsPanel) {
    projectsPanel.classList.remove('open');
  }
  
  // Fade black overlay out
  const blackOverlay = document.getElementById('blackOverlay');
  blackOverlay.style.opacity = '0';
  
  // Restore content rows like contact page
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.classList.remove('grid-hidden'));
  
  // Pre-generate all new images like contact page
  const newImages = [];
  cells.forEach((cell, i) => {
    const row = Math.floor(i / 5);
    if (row === 0) return;
    newImages[i] = getRandomImage();
  });
  
  // Disable tile transitions before panel fades like contact page
  cells.forEach((cell, i) => {
    const row = Math.floor(i / 5);
    if (row === 0) return;
    cell.style.transition = 'none';
    cell.querySelector('.cell-inner').style.transition = 'none';
  });
  
  // Force reflow
  void document.body.offsetHeight;
  
  // Reset all tiles instantly (while panel still covers them) like contact page
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
  
  // Auto-flip one random tile after panel fades like contact page
  setTimeout(() => {
    // Get current grid configuration
    const config = getGridConfig();
    
    // Skip auto-flip in phone mode (1 column)
    if (config.cols === 1) return;
    
    const contentCells = Array.from(cells).filter((c, i) => {
      const row = Math.floor(i / config.cols); // Use dynamic config instead of hardcoded 5
      return row > 0 && !c.classList.contains('flipped');
    });
    if (contentCells.length > 0) {
      const randomCell = contentCells[Math.floor(Math.random() * contentCells.length)];
      randomCell.classList.add('flipped');
    }
  }, 200);
}

// Global reference to strip elements - REMOVED
// let currentStrip = null;
// let currentTopBorder = null;

function createContinuousStrip(allProjectsOrdered, capturedBottomRowImages = []) {
  // Remove existing strip if any
  removeContinuousStrip();
  
  // Check if we're in portrait mode
  const config = getGridConfig();
  const isPortrait = config.needsScrolling;
  
  // Calculate tile height to match grid
  const tileWidth = window.innerWidth / config.cols;
  const tileHeight = tileWidth * (9/16); // 16:9 aspect ratio
  
  // Create strip container
  currentStrip = document.createElement('div');
  
  if (isPortrait) {
    // Portrait mode: use tile height for strip height
    currentStrip.style.cssText = `
      position: fixed;
      bottom: 0;
      left: -2px;
      width: calc(100% + 2px);
      height: ${tileHeight}px;
      display: flex;
      transition: transform 0.1s ease-out;
      cursor: grab;
      z-index: 100;
      box-sizing: border-box;
    `;
  } else {
    // Landscape mode: original positioning
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
  }
  
  // Create top border
  currentTopBorder = document.createElement('div');
  
  if (isPortrait) {
    // Portrait mode: position at top of strip (tile height from bottom)
    currentTopBorder.style.cssText = `
      position: fixed;
      bottom: ${tileHeight}px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: white;
      z-index: 1000;
      pointer-events: none;
    `;
  } else {
    // Landscape mode: original positioning
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
  }
  
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
  
  // Don't touch bottom row - leave it as is
}

function closeDetailView() {
  // COMPLETE MODE SEPARATION - Use appropriate function based on mode
  if (isPhoneMode()) {
    console.log('Using phone close detail view');
    closePhoneDetailView();
    return;
  }
  
  if (isDesktopMode()) {
    console.log('Using desktop close detail view');
    closeDesktopDetailView();
    return;
  }
  
  // Fallback - should never reach here
  console.error('ERROR: Unknown mode in closeDetailView');
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

// Function to format description with italic quotes
function formatDescription(description) {
  return description
    .replace(/"([^"]+)"/g, '<span class="detail-quote">"$1"</span>')
    // Only format single quotes that are clearly actual quotes (philosophical statements, laws, etc.)
    // Skip formatting for regular text that happens to be long
    .replace(/'(Nothing is created, nothing is destroyed, everything is transformed)'/g, '<span class="detail-quote">\'Nothing is created, nothing is destroyed, everything is transformed\'</span>')
    .replace(/'(Lavoisier's Law)'/g, '<span class="detail-quote">\'Lavoisier\'s Law\'</span>');
}

function openDetailView(imageUrl, folderIndex) {
  // COMPLETE MODE SEPARATION - Use appropriate function based on mode
  if (isPhoneMode()) {
    console.log('Using phone detail view');
    openPhoneDetailView(imageUrl, folderIndex);
    return;
  }
  
  if (isDesktopMode()) {
    console.log('Using desktop detail view');
    openDesktopDetailView(imageUrl, folderIndex);
    return;
  }
  
  // Fallback - should never reach here
  console.error('ERROR: Unknown mode in openDetailView');
}

// Mode detection helper functions
function isPhoneMode() {
  const config = getGridConfig();
  return config.cols === 1;
}

function isDesktopMode() {
  const config = getGridConfig();
  return config.cols > 1;
}

// Phone mode only functions - NEVER called from desktop mode
function openPhoneDetailView(imageUrl, folderIndex) {
  // DEFENSIVE: Ensure we're actually in phone mode
  if (!isPhoneMode()) {
    console.error('ERROR: openPhoneDetailView called in desktop mode!');
    return;
  }
  
  const project = imageFolders[folderIndex];
  if (!project) return;
  
  console.log(`Phone mode - Opening detail view for: ${project.name}`);
  
  // Get the tiles for phone video layout
  const cells = document.querySelectorAll('.cell');
  
  // 2. Find which tile was clicked and use it for video
  // We need to find the tile that contains this project
  let clickedTileIndex = -1;
  for (let i = 0; i < cells.length; i++) {
    if (parseInt(cells[i].dataset.folderIndex) === folderIndex) {
      clickedTileIndex = i;
      break;
    }
  }
  
  if (clickedTileIndex === -1) {
    console.error('ERROR: Could not find clicked tile for project');
    return;
  }
  
  console.log(`Phone mode - Found clicked tile at index: ${clickedTileIndex}`);
  
  // 3. Show video in the clicked tile only
  const videoTile = cells[clickedTileIndex]; // Clicked tile only
  
  if (videoTile) {
    // Clear the tile
    const videoFront = videoTile.querySelector('.cell-front');
    const videoBack = videoTile.querySelector('.cell-back');
    
    videoFront.innerHTML = '';
    videoBack.innerHTML = '';
    
    // Clear background image from the tile
    videoBack.style.backgroundImage = 'none';
    videoBack.style.backgroundColor = 'transparent';
    videoFront.style.backgroundColor = 'transparent';
    
    // Ensure the tile itself allows clicking
    videoTile.style.pointerEvents = 'auto';
    videoFront.style.pointerEvents = 'none'; // Let iframe handle clicks
    videoBack.style.pointerEvents = 'none';  // Let iframe handle clicks
    
    console.log(`Phone mode - Cleared tile ${clickedTileIndex}, project has vimeoId: ${!!project.vimeoId}`);
    
    if (project.vimeoId) {
      // Try a simpler Vimeo embed approach
      const iframe = document.createElement('iframe');
      // Use the most basic Vimeo URL
      iframe.src = `https://player.vimeo.com/video/${project.vimeoId}`;
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'fullscreen');
      iframe.setAttribute('allowfullscreen', '');
      iframe.style.cssText = `
        width: 100%;
        height: 100%;
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: auto;
        background: black;
      `;
      
      // Add the iframe directly to the tile (not to front/back)
      videoTile.innerHTML = '';
      videoTile.appendChild(iframe);
      
      console.log(`Phone mode - Added basic Vimeo iframe for ${project.name} with ID: ${project.vimeoId}`);
      
      // Remove all other elements that might interfere
      videoFront.style.display = 'none';
      videoBack.style.display = 'none';
      
    } else {
      // Create a simple picture viewer for projects without videos
      console.log(`Phone mode - Creating simple picture viewer for ${project.name}`);
      
      // Create picture container
      const pictureContainer = document.createElement('div');
      pictureContainer.style.cssText = `
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: black;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      `;
      
      // Create title overlay
      const titleOverlay = document.createElement('div');
      titleOverlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 10px;
        background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
        color: white;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        z-index: 10;
        pointer-events: none;
        font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
      `;
      titleOverlay.textContent = project.name;
      
      // Create navigation hint overlay
      const navHint = document.createElement('div');
      navHint.style.cssText = `
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        text-align: center;
        color: white;
        font-size: 12px;
        opacity: 0.7;
        z-index: 10;
        pointer-events: none;
        font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
      `;
      navHint.textContent = 'Tap left side for previous, right side for next';
      
      // Create image element
      const img = document.createElement('img');
      img.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        cursor: pointer;
      `;
      
      // Track current image index
      let currentImageIndex = 0;
      const totalImages = project.count;
      
      // Function to load image
      function loadImage(index) {
        const imagePath = `${project.path}/${index + 1}.${project.ext}`;
        img.src = imagePath;
        // Update navigation hint
        navHint.textContent = `Image ${index + 1}/${totalImages} - Tap left for previous, right for next`;
        console.log(`Phone mode - Loading image ${index + 1}/${totalImages}: ${imagePath}`);
      }
      
      // Add click handler for navigation
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Determine click position for navigation direction
        const rect = img.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const imageWidth = rect.width;
        
        // Normal navigation for left/right clicks
        if (clickX < imageWidth / 2) {
          // Click on left side - go to previous image
          currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
          console.log(`Phone mode - Went to previous image ${currentImageIndex + 1}/${totalImages}`);
        } else {
          // Click on right side - go to next image
          currentImageIndex = (currentImageIndex + 1) % totalImages;
          console.log(`Phone mode - Advanced to next image ${currentImageIndex + 1}/${totalImages}`);
        }
        
        loadImage(currentImageIndex);
      });
      
      // Add touch/swipe support for mobile
      let touchStartX = 0;
      let touchEndX = 0;
      
      img.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      });
      
      img.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      });
      
      function handleSwipe() {
        const swipeThreshold = 50; // Minimum swipe distance
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
          if (diff > 0) {
            // Swipe left - go to next image
            currentImageIndex = (currentImageIndex + 1) % totalImages;
            console.log(`Phone mode - Swiped left to next image ${currentImageIndex + 1}/${totalImages}`);
          } else {
            // Swipe right - go to previous image
            currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
            console.log(`Phone mode - Swiped right to previous image ${currentImageIndex + 1}/${totalImages}`);
          }
          loadImage(currentImageIndex);
        }
      }
      
      // Load first image
      loadImage(0);
      
      // Assemble the picture viewer
      pictureContainer.appendChild(img);
      pictureContainer.appendChild(titleOverlay);
      pictureContainer.appendChild(navHint);
      
      // Add the picture container directly to the tile
      videoTile.innerHTML = '';
      videoTile.appendChild(pictureContainer);
      
      // Hide front/back elements
      videoFront.style.display = 'none';
      videoBack.style.display = 'none';
      
      console.log(`Phone mode - Picture viewer created for ${project.name} with ${totalImages} images`);
    }
    
    // Show description tile immediately after loading video/gallery
    setTimeout(() => {
      showDescriptionTile();
      console.log(`Phone mode - Showing description immediately for ${project.name}`);
      
      // Try to force grid update directly
      setTimeout(() => {
        if (typeof updateGridCSS === 'function') {
          console.log('Phone mode - Calling updateGridCSS to refresh grid');
          updateGridCSS();
        }
      }, 200);
    }, 100);
    
    videoTile.style.zIndex = '50';
    console.log(`Phone mode - Set tile z-index to 50`);
  }
  
  // Function to show description tile
  function showDescriptionTile() {
    console.log(`Phone mode - Creating description tile for ${project.name}`);
    
    // Check if description tile already exists for this project
    const existingDescription = document.querySelector(`[data-description-project="${project.name}"]`);
    if (existingDescription) {
      console.log(`Phone mode - Description tile already exists for ${project.name}, removing old one`);
      existingDescription.remove();
      // Update grid CSS to adjust scrollable area after removal
      updateGridCSS();
      return;
    }
    
    // Find the position to insert the new tile (below current tile)
    const cells = document.querySelectorAll('.cell');
    const insertPosition = clickedTileIndex + 1;
    
    // Create new description tile
    const descriptionTile = document.createElement('div');
    descriptionTile.className = 'cell';
    descriptionTile.setAttribute('data-description-project', project.name);
    descriptionTile.style.cssText = `
      background: black;
      z-index: 50;
    `;
    
    const inner = document.createElement('div');
    inner.className = 'cell-inner';
    
    const front = document.createElement('div');
    front.className = 'cell-front';
    front.style.cssText = `
      background: black;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
    `;
    
    // Create description content
    const descContainer = document.createElement('div');
    descContainer.style.cssText = `
      color: white;
      font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
      font-size: 14px;
      line-height: 1.4;
      max-height: 100%;
      overflow-y: auto;
      width: 100%;
    `;
    
    descContainer.innerHTML = `
      <h3 style="margin: 0 0 10px 0; font-size: 16px; font-weight: bold;">${project.name} ${project.year || project.location ? '<span style="font-weight: normal; color: #ccc;"> (' + (project.year || '') + (project.year && project.location ? ', ' : '') + (project.location || '') + ')</span>' : ''}</h3>
      <p style="margin: 0 0 10px 0;">${project.description}</p>
      ${project.cast ? `<p style="margin: 0 0 10px 0; font-style: italic; color: #ccc;">${project.cast}</p>` : ''}
      <div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid #333;">
        <small style="color: #999; cursor: pointer;" onclick="this.closest('.cell').remove(); setTimeout(() => updateGridCSS(), 50);">Tap to close</small>
      </div>
    `;
    
    front.appendChild(descContainer);
    inner.appendChild(front);
    descriptionTile.appendChild(inner);
    
    // Insert the new tile after the current tile
    const grid = document.querySelector('.grid');
    if (cells[insertPosition]) {
      grid.insertBefore(descriptionTile, cells[insertPosition]);
    } else {
      grid.appendChild(descriptionTile);
    }
    
    // Update grid CSS to adjust scrollable area after adding description
    updateGridCSS();
    
    console.log(`Phone mode - Description tile inserted at position ${insertPosition}`);
  }
  
  // Function to update grid rows based on description tiles
  function updateGridRows() {
    // Don't change heights here - it causes jump to top and scroll lock
    // The height should be set once during initial grid setup
    const grid = document.querySelector('.grid');
    const config = getGridConfig();
    
    if (config.cols === 1) { // Only in phone mode
      const baseRows = 15;
      const descriptionTiles = document.querySelectorAll('[data-description-project]').length;
      const totalRows = baseRows + descriptionTiles;
      
      // Calculate tile height
      const tileWidth = window.innerWidth / config.cols;
      const portraitTileHeight = tileWidth * (9/16);
      
      console.log(`Phone mode - DEBUG: baseRows=${baseRows}, descriptionTiles=${descriptionTiles}, totalRows=${totalRows}`);
      console.log(`Phone mode - DEBUG: tileHeight=${portraitTileHeight}px, totalHeight=${totalRows * portraitTileHeight}px`);
      console.log(`Phone mode - DEBUG: grid.offsetHeight=${grid.offsetHeight}px, grid.scrollHeight=${grid.scrollHeight}px`);
      console.log(`Phone mode - DEBUG: document.body.scrollHeight=${document.body.scrollHeight}px`);
      
      // ONLY update grid template rows - NO height changes
      grid.style.gridTemplateRows = `repeat(${totalRows}, ${portraitTileHeight}px)`;
      
      console.log(`Phone mode - Grid template rows updated to ${totalRows} rows (NO height changes to prevent jump/lock)`);
    }
  }
  
  // Function to set initial grid height for phone mode (call this once during setup)
  function setInitialPhoneGridHeight() {
    const grid = document.querySelector('.grid');
    const config = getGridConfig();
    
    if (config.cols === 1) { // Only in phone mode
      const baseRows = 15;
      const maxDescriptionTiles = 12; // Maximum description tiles we want to support
      const totalRows = baseRows + maxDescriptionTiles; // Always 27 rows total
      
      // Calculate tile height
      const tileWidth = window.innerWidth / config.cols;
      const portraitTileHeight = tileWidth * (9/16);
      const totalHeight = totalRows * portraitTileHeight;
      
      console.log(`Phone mode - Setting initial grid height to ${totalRows} rows (${totalHeight}px) to support up to ${maxDescriptionTiles} description tiles`);
      
      // Set grid template rows to maximum (27 rows)
      grid.style.gridTemplateRows = `repeat(${totalRows}, ${portraitTileHeight}px)`;
      
      // Set grid height to accommodate all possible description tiles
      grid.style.height = `${totalHeight}px`;
      grid.style.minHeight = `${totalHeight}px`;
      
      console.log(`Phone mode - Initial grid height set successfully`);
    }
  }
  
  // Function to adjust grid height when description tiles are added/removed
  function adjustGridHeight(addTile) {
    const grid = document.querySelector('.grid');
    const config = getGridConfig();
    
    if (config.cols === 1) { // Only in phone mode
      // Calculate tile height for 16:9 aspect ratio
      const tileWidth = window.innerWidth / config.cols;
      const portraitTileHeight = tileWidth * (9/16);
      
      // Count description tiles
      const descriptionTiles = document.querySelectorAll('[data-description-project]').length;
      
      // Simple: base height + description tiles * tile height
      const baseHeight = 15 * portraitTileHeight; // 15 base tiles
      const extraHeight = descriptionTiles * portraitTileHeight; // description tiles
      const totalHeight = baseHeight + extraHeight;
      
      // Just set the grid height directly
      grid.style.height = `${totalHeight}px`;
      
      console.log(`Phone mode - Grid height set to ${totalHeight}px (${descriptionTiles} description tiles)`);
    }
  }
  
  // Store detail view state
  detailView = { imageUrl, folderIndex };
  
  // Don't lock body scroll in phone mode - not needed
  // document.body.classList.add('detail-open');
  
  console.log('Phone mode - Detail view opened successfully');
}

function closePhoneDetailView() {
  // DEFENSIVE: Ensure we're actually in phone mode
  if (!isPhoneMode()) {
    console.error('ERROR: closePhoneDetailView called in desktop mode!');
    return;
  }
  
  if (!detailView) return;
  
  console.log('Phone mode - Closing detail view');
  
  // Restore all tiles to their original state
  const cells = document.querySelectorAll('.cell');
  
  // 1. Restore SF logo to tile 1 (index 0)
  const logoTile = cells[0];
  if (logoTile) {
    const logoFront = logoTile.querySelector('.cell-front');
    const logoBack = logoTile.querySelector('.cell-back');
    
    logoFront.innerHTML = '';
    logoBack.innerHTML = '';
    
    const logoImg = document.createElement('img');
    logoImg.src = 'SF Logo.png';
    logoImg.alt = 'SOMETHING FOUND';
    logoFront.appendChild(logoImg);
    
    const logoImgBack = document.createElement('img');
    logoImgBack.src = 'SF Logo.png';
    logoImgBack.alt = 'SOMETHING FOUND';
    logoBack.appendChild(logoImgBack);
    
    logoTile.onclick = returnToHomepage;
  }
  
  // 2. Restore Contact button to tile 2 (index 1)
  const contactTile = cells[1];
  if (contactTile) {
    const contactFront = contactTile.querySelector('.cell-front');
    const contactBack = contactTile.querySelector('.cell-back');
    
    contactFront.innerHTML = '';
    contactBack.innerHTML = '';
    
    const contactLabel = document.createElement('span');
    contactLabel.className = 'contact-label';
    contactLabel.textContent = 'Contact';
    contactFront.appendChild(contactLabel);
    
    const contactLabelBack = document.createElement('span');
    contactLabelBack.className = 'contact-label';
    contactLabelBack.textContent = 'Contact';
    contactBack.appendChild(contactLabelBack);
    
    contactTile.onclick = () => {
      // Use phone-specific contact handler to avoid interfering with picture tiles
      const config = getGridConfig();
      if (config.cols === 1) {
        openPhoneContact();
      } else {
        switchTab('contact');
      }
    };
  }
  
  // 3. Restore Angelika tile to tile 3 (index 2)
  const angelikaTile = cells[2];
  if (angelikaTile) {
    const angelikaProject = imageFolders.find(p => p.name === 'ANGELIKA');
    if (angelikaProject) {
      // Get random image from Angelika folder
      const randomImageNum = Math.floor(Math.random() * angelikaProject.count) + 1;
      const randomImage = `${angelikaProject.path}/${randomImageNum}.${angelikaProject.ext}`;
      
      const angelikaFront = angelikaTile.querySelector('.cell-front');
      const angelikaBack = angelikaTile.querySelector('.cell-back');
      
      angelikaFront.innerHTML = '';
      angelikaBack.innerHTML = '';
      
      // Set the background image
      angelikaBack.style.backgroundImage = `url('${randomImage}')`;
      angelikaBack.style.backgroundSize = 'cover';
      angelikaBack.style.backgroundPosition = 'center';
      angelikaBack.style.backgroundRepeat = 'no-repeat';
      angelikaBack.style.backgroundColor = 'transparent';
      angelikaBack.style.transform = 'none';
      angelikaBack.style.visibility = 'visible';
      angelikaBack.style.opacity = '1';
      angelikaBack.style.zIndex = '10';
      
      // Add project name
      const projectLabel = document.createElement('div');
      projectLabel.textContent = angelikaProject.name;
      projectLabel.style.color = 'white';
      projectLabel.style.fontSize = '14px';
      projectLabel.style.fontWeight = 'bold';
      projectLabel.style.position = 'absolute';
      projectLabel.style.top = '10px';
      projectLabel.style.left = '10px';
      projectLabel.style.zIndex = '20';
      projectLabel.style.textShadow = '0 0 3px rgba(0,0,0,0.8)';
      angelikaBack.appendChild(projectLabel);
      
      angelikaTile.onclick = () => {
        const imageUrl = angelikaBack.style.backgroundImage.slice(5, -2);
        const folderIndex = imageFolders.indexOf(angelikaProject);
        openPhoneDetailView(imageUrl, folderIndex);
      };
    }
  }
  
  // 4. Clear description tile (tile 4, index 3)
  const descTile = cells[3];
  if (descTile) {
    const descFront = descTile.querySelector('.cell-front');
    const descBack = descTile.querySelector('.cell-back');
    
    descFront.innerHTML = '';
    descBack.innerHTML = '';
    
    // Restore the original project that should be at tile 4
    const otherProjects = imageFolders
      .filter(p => p.name !== 'ANGELIKA') // Exclude Angelika (already at tile 3)
      .slice(0, 11); // Take first 11 projects after filtering (CLAYALLIANCE through SUTURE)
    
    if (otherProjects.length > 0) {
      const project = otherProjects[0]; // First project after ANGELIKA (CLAYALLIANCE)
      const firstImage = `${project.path}/1.${project.ext}`;
      
      descBack.style.backgroundImage = `url('${firstImage}')`;
      descBack.style.backgroundSize = 'cover';
      descBack.style.backgroundPosition = 'center';
      descBack.style.backgroundRepeat = 'no-repeat';
      descBack.style.backgroundColor = 'transparent';
      descBack.style.transform = 'none';
      descBack.style.visibility = 'visible';
      descBack.style.opacity = '1';
      descBack.style.zIndex = '10';
      
      const projectLabel = document.createElement('div');
      projectLabel.textContent = project.name;
      projectLabel.style.color = 'white';
      projectLabel.style.fontSize = '14px';
      projectLabel.style.fontWeight = 'bold';
      projectLabel.style.position = 'absolute';
      projectLabel.style.top = '10px';
      projectLabel.style.left = '10px';
      projectLabel.style.zIndex = '20';
      projectLabel.style.textShadow = '0 0 3px rgba(0,0,0,0.8)';
      descBack.appendChild(projectLabel);
      
      descTile.onclick = () => {
        const imageUrl = descBack.style.backgroundImage.slice(5, -2);
        const folderIndex = imageFolders.indexOf(project);
        openPhoneDetailView(imageUrl, folderIndex);
      };
    }
  }
  
  // Re-enable scroll in phone mode when video closes
  document.body.classList.remove('detail-open');
  
  // Clear detail view state
  detailView = null;
  
  console.log('Phone mode - Detail view closed successfully');
}

// Desktop mode only functions - NEVER called from phone mode
function openDesktopDetailView(imageUrl, folderIndex) {
  // DEFENSIVE: Ensure we're actually in desktop mode
  if (!isDesktopMode()) {
    console.error('ERROR: openDesktopDetailView called in phone mode!');
    return;
  }
  
  // Original desktop detail view logic (unchanged)
  detailView = { imageUrl, folderIndex };
  const detailPanel = document.getElementById('detailPanel');
  const folder = imageFolders[folderIndex];
  
  // Fade black overlay in for fade-to-black effect
  const blackOverlay = document.getElementById('blackOverlay');
  blackOverlay.style.opacity = '1';
  
  // Hide content rows (rows 1-3) but keep top row visible like contact page
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, i) => {
    const row = Math.floor(i / getGridConfig().cols);
    if (row >= 1 && row <= 3) {
      cell.classList.add('grid-hidden');
    }
  });
  
  // Update detail panel content
  const videoContainer = document.getElementById('detailPanel').querySelector('.detail-video');
  videoContainer.innerHTML = ''; // Clear previous
  
  document.getElementById('detailPanel').querySelector('.detail-title').innerHTML = folder.name + (folder.year || folder.location ? ' <span class="detail-year">' + (folder.year || '') + (folder.year && folder.location ? ', ' : '') + (folder.location || '') + '</span>' : '');
  document.getElementById('detailPanel').querySelector('.detail-description').innerHTML = formatDescription(folder.description);
  
  // Add cast information if available
  const castElement = document.getElementById('detailPanel').querySelector('.detail-cast');
  if (castElement) {
    castElement.textContent = folder.cast || '';
    castElement.style.display = folder.cast ? 'block' : 'none';
  }
  
  // Add featured information if available
  const featuredElement = document.getElementById('detailPanel').querySelector('.detail-featured');
  if (featuredElement) {
    featuredElement.textContent = folder.featured || '';
    featuredElement.style.display = folder.featured ? 'block' : 'none';
  }
  
  // Get all projects in non-adjacent order, excluding current project
  const allProjectsOrdered = createNonAdjacentProjectOrder(folderIndex);
  
  // Clear used images tracking for new detail view
  usedBottomRowImages.clear();
  
  // Capture bottom row images BEFORE they get changed
  const bottomRowCells = Array.from(cells).filter((cell, i) => Math.floor(i / getGridConfig().cols) === getGridConfig().rows - 1);
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
      const row = Math.floor(i / getGridConfig().cols);
      if (row >= 1 && row <= 3) {
        cell.classList.add('animating');
        const back = cell.querySelector('.cell-back');
        back.style.backgroundImage = 'none';
      }
    });
    
    requestAnimationFrame(() => {
      cells.forEach((cell, i) => {
        const row = Math.floor(i / getGridConfig().cols);
        if (row >= 1 && row <= 3) {
          cell.classList.add('contact-flip');
          cell.querySelector('.cell-back').classList.add('contact-back');
          cell.classList.add('flipped');
        }
      });
      
      setTimeout(() => {
        cells.forEach((cell, i) => {
          const row = Math.floor(i / getGridConfig().cols);
          if (row >= 1 && row <= 3) {
            cell.classList.remove('animating');
          }
        });
        
        // Create bottom row tiles mirroring top row
        createBottomRowTiles();
        
        detailPanel.classList.add('open');
        
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

function closeDesktopDetailView() {
  // DEFENSIVE: Ensure we're actually in desktop mode
  if (!isDesktopMode()) {
    console.error('ERROR: closeDesktopDetailView called in phone mode!');
    return;
  }
  
  if (!detailView) return;
  
  const detailPanel = document.getElementById('detailPanel');
  
  // Clean up bottom row tiles
  const bottomTiles = detailPanel.querySelector('.bottom-tiles');
  if (bottomTiles) {
    bottomTiles.remove();
  }
  
  // Clean up picture viewer if it exists
  if (detailPanel.cleanupGallery) {
    detailPanel.cleanupGallery();
    detailPanel.cleanupGallery = null;
  }
  
  // Clear video immediately to stop playback
  detailPanel.querySelector('.detail-video').innerHTML = '';
  
  // Get current grid configuration for proper row calculation
  const config = getGridConfig();
  
  // DESKTOP MODE ONLY - Continue with desktop logic
  // Pre-generate all new images to restore tile backgrounds - NEVER for top row
  const newImages = [];
  const cells = document.querySelector('.grid').querySelectorAll('.cell');
  
  cells.forEach((cell, i) => {
    const row = Math.floor(i / config.cols);
    // NEVER generate images for top row (row 0) - this prevents pictures in top row
    if (row === 0) {
      newImages[i] = null;
      return;
    }
    // Generate images only for non-top-row cells
    if (cell.classList.contains('logo')) {
      newImages[i] = null; // Logo cell has no background image
    } else {
      newImages[i] = getRandomImage();
    }
  });
  
  // Restore all grid rows except top row - NEVER touch top row
  cells.forEach((cell, i) => {
    const row = Math.floor(i / config.cols);
    if (row >= 1) {  // Restore all rows except top row
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
    // NEVER touch top row (row === 0) - leave it completely alone
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
  
  detailView = null;
}

function refreshContentTiles() {
  const grid = document.querySelector('.grid');
  const cells = grid.querySelectorAll('.cell');
  const contactPanel = document.getElementById('contactPanel');
  const detailPanel = document.getElementById('detailPanel');
  const directoryPanel = document.getElementById('directoryPanel');
  const config = getGridConfig(); // Use dynamic config
  
  // Close detail view if open
  if (detailView) {
    detailView = null;
    detailPanel.classList.remove('open');
  }
  
  // Close directory if open
  if (directoryPanel && directoryPanel.classList.contains('open')) {
    directoryPanel.classList.remove('open');
  }
  
  if (currentTab === 'contact') {
    // Fade black overlay in for contact page
    const blackOverlay = document.getElementById('blackOverlay');
    blackOverlay.style.opacity = '1';
    
    // Hide content rows (rows 1-3) but keep top row visible
    cells.forEach((cell, i) => {
      const row = Math.floor(i / config.cols); // Use dynamic config
      if (row >= 1 && row <= 3) {
        cell.classList.add('grid-hidden');
      }
    });
    
    // Use requestAnimationFrame for smooth animation
    requestAnimationFrame(() => {
      // Clear images and mark animating for middle rows (1-3)
      cells.forEach((cell, i) => {
        const row = Math.floor(i / config.cols); // Use dynamic config
        if (row >= 1 && row <= 3) {
          cell.classList.add('animating');
          const back = cell.querySelector('.cell-back');
          back.style.backgroundImage = 'none';
        }
      });
      
      // Flip middle rows to white, unflip bottom row to show video
      requestAnimationFrame(() => {
        cells.forEach((cell, i) => {
          const row = Math.floor(i / config.cols); // Use dynamic config
          if (row >= 1 && row <= 3) {
            cell.classList.add('contact-flip');
            cell.querySelector('.cell-back').classList.add('contact-back');
            cell.classList.add('flipped');
          } else if (row === config.rows - 1) { // Use dynamic config
            // Bottom row - unflip to show transparent front (video background)
            cell.classList.remove('flipped');
          }
        });
        
        // Clear top row backgrounds to prevent background video showing - AGGRESSIVE
        cells.forEach((cell, i) => {
          const row = Math.floor(i / config.cols);
          if (row === 0) {
            const back = cell.querySelector('.cell-back');
            const front = cell.querySelector('.cell-front');
            
            // Force black background on both sides
            back.style.backgroundImage = 'none';
            back.style.backgroundColor = 'black';
            back.style.backgroundSize = 'cover';
            back.style.backgroundPosition = 'center';
            back.style.backgroundRepeat = 'no-repeat';
            
            // Also force front side to be black
            front.style.backgroundImage = 'none';
            front.style.backgroundColor = 'black';
            front.style.backgroundSize = 'cover';
            front.style.backgroundPosition = 'center';
            front.style.backgroundRepeat = 'no-repeat';
            
            // Remove any conflicting classes
            back.classList.remove('contact-back');
            cell.classList.remove('flipped');
            
            // SPECIFICALLY FORCE CONTACT TILE BLACK BACKGROUND
            if (cell.classList.contains('contact')) {
              back.style.backgroundColor = 'black';
              back.style.backgroundImage = 'none';
              front.style.backgroundColor = 'black';
              front.style.backgroundImage = 'none';
            }
            
            // SPECIFICALLY FORCE PROJECTS TILE BLACK BACKGROUND  
            if (cell.classList.contains('projects')) {
              back.style.backgroundColor = 'black';
              back.style.backgroundImage = 'none';
              front.style.backgroundColor = 'black';
              front.style.backgroundImage = 'none';
            }
          }
        });
        
        // Show panel after flip completes
        setTimeout(() => {
          cells.forEach((cell, i) => {
            const row = Math.floor(i / config.cols); // Use dynamic config
            if (row >= 1 && row <= 3) {
              cell.classList.remove('animating');
            }
          });
          contactPanel.classList.add('open');
        }, 50);  // Reduced to 50ms for instant response
      });
    });
  } else if (currentTab === 'projects') {
    // Fade black overlay in for projects page (same as contact)
    const blackOverlay = document.getElementById('blackOverlay');
    blackOverlay.style.opacity = '1';
    
    // Hide content rows (rows 1-3) but keep top row visible
    cells.forEach((cell, i) => {
      const row = Math.floor(i / config.cols); // Use dynamic config
      if (row >= 1 && row <= 3) {
        cell.classList.add('grid-hidden');
      }
    });
    
    // Use requestAnimationFrame for smooth animation
    requestAnimationFrame(() => {
      // Clear images and mark animating for middle rows (1-3)
      cells.forEach((cell, i) => {
        const row = Math.floor(i / config.cols); // Use dynamic config
        if (row >= 1 && row <= 3) {
          cell.classList.add('animating');
          const back = cell.querySelector('.cell-back');
          back.style.backgroundImage = 'none';
        }
      });
      
      // Flip middle rows to white, unflip bottom row to show video
      requestAnimationFrame(() => {
        cells.forEach((cell, i) => {
          const row = Math.floor(i / config.cols); // Use dynamic config
          if (row >= 1 && row <= 3) {
            cell.classList.add('contact-flip');
            cell.querySelector('.cell-back').classList.add('contact-back');
            cell.classList.add('flipped');
          } else if (row === config.rows - 1) { // Use dynamic config
            // Bottom row - unflip to show transparent front (video background)
            cell.classList.remove('flipped');
            // Clear bottom row background to prevent black tiles
            const back = cell.querySelector('.cell-back');
            back.style.backgroundImage = 'none';
            back.style.backgroundColor = 'transparent';
          }
        });
        
        // Clear top row backgrounds to prevent background video showing - AGGRESSIVE
        cells.forEach((cell, i) => {
          const row = Math.floor(i / config.cols);
          if (row === 0) {
            const back = cell.querySelector('.cell-back');
            const front = cell.querySelector('.cell-front');
            
            // Force black background on both sides
            back.style.backgroundImage = 'none';
            back.style.backgroundColor = 'black';
            back.style.backgroundSize = 'cover';
            back.style.backgroundPosition = 'center';
            back.style.backgroundRepeat = 'no-repeat';
            
            // Also force front side to be black
            front.style.backgroundImage = 'none';
            front.style.backgroundColor = 'black';
            front.style.backgroundSize = 'cover';
            front.style.backgroundPosition = 'center';
            front.style.backgroundRepeat = 'no-repeat';
            
            // Remove any conflicting classes
            back.classList.remove('contact-back');
            cell.classList.remove('flipped');
            
            // SPECIFICALLY FORCE CONTACT TILE BLACK BACKGROUND
            if (cell.classList.contains('contact')) {
              back.style.backgroundColor = 'black';
              back.style.backgroundImage = 'none';
              front.style.backgroundColor = 'black';
              front.style.backgroundImage = 'none';
            }
            
            // SPECIFICALLY FORCE PROJECTS TILE BLACK BACKGROUND  
            if (cell.classList.contains('projects')) {
              back.style.backgroundColor = 'black';
              back.style.backgroundImage = 'none';
              front.style.backgroundColor = 'black';
              front.style.backgroundImage = 'none';
            }
          }
        });
        
        // Show projects panel after flip completes
        setTimeout(() => {
          cells.forEach((cell, i) => {
            const row = Math.floor(i / config.cols); // Use dynamic config
            if (row >= 1 && row <= 3) {
              cell.classList.remove('animating');
            }
          });
          
          // Create or show projects panel
          let projectsPanel = document.getElementById('projectsPanel');
          if (!projectsPanel) {
            projectsPanel = document.createElement('div');
            projectsPanel.id = 'projectsPanel';
            projectsPanel.className = 'contact-panel'; // Use contact-panel styling
            document.body.appendChild(projectsPanel);
          }
          
          // Populate projects with project list
          const projectList = document.createElement('div');
          projectList.className = 'project-list';
          
          imageFolders.forEach((folder, index) => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.innerHTML = `
              <div class="project-name">${folder.name}</div>
              <div class="project-description">${folder.description}</div>
            `;
            
            projectItem.addEventListener('click', () => {
              switchTab('hybrid');
              openDetailView('', index);
            });
            
            projectList.appendChild(projectItem);
          });
          
          projectsPanel.innerHTML = '';
          projectsPanel.appendChild(projectList);
          
          // Show panel
          projectsPanel.classList.add('open');
        }, 500);
      });
    });
  } else if (currentTab === 'projects') {
    // This should never happen, but handle it
    hideProjectsPage();
  } else {
    // Fade black overlay out and restore grid when leaving contact/projects pages
    const blackOverlay = document.getElementById('blackOverlay');
    blackOverlay.style.opacity = '0';
    cells.forEach(cell => cell.classList.remove('grid-hidden'));
    
    // Restore top row tiles to normal state (remove black background)
    cells.forEach((cell, i) => {
      const row = Math.floor(i / config.cols);
      if (row === 0) {
        // Remove forced black backgrounds from top row
        const back = cell.querySelector('.cell-back');
        const front = cell.querySelector('.cell-front');
        
        // Clear forced black backgrounds
        back.style.backgroundImage = '';
        back.style.backgroundColor = '';
        front.style.backgroundImage = '';
        front.style.backgroundColor = '';
        
        // Remove contact-specific classes
        back.classList.remove('contact-back');
        cell.classList.remove('flipped');
        
        // Don't restore static tiles (logo, projects, contact)
        if (!cell.classList.contains('static')) {
          // For non-static top row tiles, restore normal background
          const img = getRandomImage();
          if (img) {
            back.style.backgroundImage = `url('${img.url}')`;
            cell.dataset.folderIndex = img.folderIndex;
            cell.dataset.projectName = imageFolders[img.folderIndex].name;
          }
        }
      }
    });
    
    // Pre-generate all new images - NEVER for top row
    const newImages = [];
    cells.forEach((cell, i) => {
      const row = Math.floor(i / config.cols); // Use dynamic config
      // NEVER generate images for top row (row 0) to prevent pictures in top row
      if (row === 0) return;
      newImages[i] = getRandomImage();
    });
    
    // Disable tile transitions before panel fades - NEVER for top row
    cells.forEach((cell, i) => {
      const row = Math.floor(i / config.cols); // Use dynamic config
      // Don't touch top row transitions
      if (row === 0) return;
      cell.style.transition = 'none';
      cell.querySelector('.cell-inner').style.transition = 'none';
    });
    
    // Force reflow
    void document.body.offsetHeight;
    
    // Reset all tiles instantly (while panel still covers them) - NEVER for top row
    cells.forEach((cell, i) => {
      const row = Math.floor(i / config.cols); // Use dynamic config
      // Don't touch top row tiles
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
    
    // Force reflow then re-enable transitions - NEVER for top row
    void document.body.offsetHeight;
    
    cells.forEach((cell, i) => {
      const row = Math.floor(i / config.cols); // Use dynamic config
      // Don't touch top row transitions
      if (row === 0) return;
      cell.style.transition = '';
      cell.querySelector('.cell-inner').style.transition = '';
    });
    
    // Now fade out the panel (tiles already reset underneath)
    if (currentTab === 'contact') {
      contactPanel.classList.remove('open');
    } else if (currentTab === 'projects') {
      const projectsPanel = document.getElementById('projectsPanel');
      if (projectsPanel) {
        projectsPanel.classList.remove('open');
      }
    }
    
    // Auto-flip one random tile after panel fades - NEVER for top row or phone mode
    setTimeout(() => {
      // Skip auto-flip in phone mode (1 column)
      if (config.cols === 1) return;
      
      const contentCells = Array.from(cells).filter((c, i) => {
        const row = Math.floor(i / config.cols); // Use dynamic config
        return row > 0 && !c.classList.contains('flipped');
      });
      if (contentCells.length > 0) {
        const randomCell = contentCells[Math.floor(Math.random() * contentCells.length)];
        randomCell.classList.add('flipped');
      }
    }, 200);
  }
}

// Responsive grid configuration
function getGridConfig() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspectRatio = width / height;
  
  let cols, rows;
  let needsScrolling = false;
  
  if (aspectRatio < 1) {
    // Portrait mode (phones) - 1 column with original sizing
    cols = 1;
    rows = 25; // Original phone mode rows value
    needsScrolling = true; // Enable scrolling for phone mode
  } else if (aspectRatio < 1.5) {
    // Tablets and small desktops
    cols = 2;
    rows = 3;
  } else {
    // Large desktops - RESTORE ORIGINAL 5x5 GRID
    cols = 5;
    rows = 5;
  }
  
  // Calculate positions for navigation tiles
  let logoPosition = 0;
  let projectsPosition = null;
  let contactPosition = 1;
  
  // For phone mode, always use fixed positions
  if (cols === 1) {
    logoPosition = 0;        // Tile 1: SF logo
    contactPosition = 1;     // Tile 2: Contact
    projectsPosition = null; // No projects button in phone mode
  } else {
    // Desktop mode positions - ORIGINAL DESKTOP LOGIC
    logoPosition = 0;
    projectsPosition = 1;
    contactPosition = 2;
  }
  
  return {
    cols,
    rows,
    logoPosition,
    projectsPosition,
    contactPosition,
    aspectRatio,
    needsScrolling
  };
}

// Update grid CSS dynamically
function updateGridCSS() {
  const config = getGridConfig();
  const grid = document.querySelector('.grid');
  
  // Set CSS variable for dynamic alignment
  document.documentElement.style.setProperty('--grid-cols', config.cols);
  
  // Calculate actual tile height for precise alignment
  const availableHeight = window.innerHeight;
  let rowsNeeded = config.rows;
  
  // PHONE MODE: Use exactly 15 rows for phone mode
  if (config.cols === 1) {
    rowsNeeded = 15; // Exactly 15 tiles for phone mode
  }
  
  const tileHeight = availableHeight / rowsNeeded;
  
  // Set CSS variable for tile height
  document.documentElement.style.setProperty('--tile-height', `${tileHeight}px`);
  
  grid.style.gridTemplateColumns = `repeat(${config.cols}, 1fr)`;
  
  if (config.needsScrolling) {
    // Portrait mode: use exact 16:9 tile height and enable scrolling
    const tileWidth = window.innerWidth / config.cols;
    const portraitTileHeight = tileWidth * (9/16); // Exact 16:9 aspect ratio
    
    // For phone mode, calculate rows based on current description tiles + SF logo position
    if (config.cols === 1) {
      const descriptionTiles = document.querySelectorAll('[data-description-project]').length;
      const baseRows = 15; // 15 base tiles
      const sfLogoPosition = 14; // SF logo is at index 14 (15th tile)
      const maxRows = sfLogoPosition + 1 + descriptionTiles; // Up to SF logo + description tiles
      const phoneRows = Math.max(baseRows, maxRows); // At least 15 rows, but expand for descriptions
      
      console.log(`Phone mode - Setting grid to ${phoneRows} rows (base: ${baseRows}, descriptions: ${descriptionTiles})`);
      grid.style.gridTemplateRows = `repeat(${phoneRows}, ${portraitTileHeight}px)`;
    } else {
      grid.style.gridTemplateRows = `repeat(${rowsNeeded}, ${portraitTileHeight}px)`;
    }
    
    grid.classList.add('scrollable');
    
    // Update tile height for portrait mode
    document.documentElement.style.setProperty('--tile-height', `${portraitTileHeight}px`);
  } else {
    // All other modes: scale tiles to fill screen height
    grid.style.gridTemplateRows = `repeat(${rowsNeeded}, ${tileHeight}px)`;
    grid.classList.remove('scrollable');
  }
}

function setupGrid() {
  const grid = document.querySelector('.grid');
  grid.innerHTML = '';
  
  // Get responsive configuration
  const config = getGridConfig();
  updateGridCSS(); // This now handles the 27 rows for phone mode
  
  // Create the correct number of tiles for each configuration
  let totalTiles;
  
  if (config.cols === 1) {
    // Phone mode: Exactly 15 tiles (no gap)
    totalTiles = 15; // Fixed 15 tiles for phone mode
  } else {
    // Desktop mode: full grid (5x5 = 25 tiles)
    totalTiles = config.cols * config.rows;
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
    
    // Only make top row static in desktop mode, not in phone mode
    if (config.cols !== 1 && isTopRow) {
      cell.classList.add('static');
    }
    
    const inner = document.createElement('div');
    inner.className = 'cell-inner';
    
    const front = document.createElement('div');
    front.className = 'cell-front';
    
    const back = document.createElement('div');
    back.className = 'cell-back';
    
    // Handle top row navigation (only for desktop mode, phone mode uses completely different logic)
    const isNavigationTile = config.cols !== 1 && isTopRow;
    
    // In phone mode, handle ALL cells here, never let them fall through to desktop logic
    const isPhoneMode = config.cols === 1;
    
    console.log(`Cell ${i}: isPhoneMode=${isPhoneMode}, config.cols=${config.cols}, isNavigationTile=${isNavigationTile}`);
    
    if (isPhoneMode) {
      // Phone mode - COMPLETELY OVERRIDE DESKTOP LOGIC
      const cellIndex = i;
      
      console.log(`Phone mode - Creating cell ${cellIndex}`);
      
      // CRITICAL: Force phone mode cell to be visible immediately
      cell.style.width = '100%';
      cell.style.height = '100%';
      cell.style.visibility = 'visible';
      cell.style.opacity = '1';
      
      // IMPORTANT: Only process cells up to our phone mode limit (15 cells)
      if (cellIndex >= 15) {
        console.log(`Phone mode - Skipping cell ${cellIndex} (beyond phone mode limit)`);
        cell.style.backgroundColor = 'transparent';
        cell.style.pointerEvents = 'none';
        cell.style.visibility = 'hidden';
        back.style.backgroundImage = '';
        front.style.backgroundImage = '';
        
        // STILL add the cell to grid to maintain grid structure
        inner.appendChild(front);
        inner.appendChild(back);
        cell.appendChild(inner);
        grid.appendChild(cell);
        continue;
      }
      cell.style.display = 'block';
      cell.style.position = 'relative';
      cell.style.backgroundColor = 'transparent';
      
      // Override any desktop classes that might interfere
      cell.classList.remove('static', 'blank', 'edge-top', 'edge-left');
      
      // Force inner to be visible
      inner.style.visibility = 'visible';
      inner.style.opacity = '1';
      inner.style.display = 'flex';
      inner.style.width = '100%';
      inner.style.height = '100%';
      inner.style.position = 'relative';
      
      // Force front to be visible
      front.style.visibility = 'visible';
      front.style.opacity = '1';
      front.style.display = 'flex';
      front.style.width = '100%';
      front.style.height = '100%';
      front.style.position = 'absolute';
      front.style.top = '0';
      front.style.left = '0';
      front.style.backgroundColor = 'transparent';
      
      // Force back to be visible and on top
      back.style.visibility = 'visible';
      back.style.opacity = '1';
      back.style.display = 'flex';
      back.style.width = '100%';
      back.style.height = '100%';
      back.style.position = 'absolute';
      back.style.top = '0';
      back.style.left = '0';
      back.style.transform = 'rotateX(180deg)';
      back.style.backgroundColor = 'transparent';
      
      if (cellIndex === 0) {
        // Logo cell
        cell.classList.add('logo');
        cell.dataset.tab = 'logo';
        
        const logoImg = document.createElement('img');
        logoImg.src = 'SF Logo.png';
        logoImg.alt = 'SOMETHING FOUND';
        front.appendChild(logoImg);
        
        const logoImgBack = document.createElement('img');
        logoImgBack.src = 'SF Logo.png';
        logoImgBack.alt = 'SOMETHING FOUND';
        back.appendChild(logoImgBack);
        
        cell.style.pointerEvents = 'auto';
        
        // Add contact button to SF logo tile
        const contactButton = document.createElement('button');
        contactButton.textContent = 'Contact';
        contactButton.style.cssText = `
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          background: transparent;
          color: white;
          border: none;
          padding: 5px 10px;
          font-size: 14px;
          font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
          font-weight: normal;
          cursor: pointer;
          text-decoration: underline;
          z-index: 1000;
          pointer-events: auto;
        `;
        contactButton.addEventListener('click', (e) => {
          e.stopPropagation();
          console.log('Phone mode - Contact button clicked on SF logo tile');
          
          // Debug: Check if function exists
          if (typeof showContactDescription === 'function') {
            console.log('Phone mode - showContactDescription function exists, calling it');
            showContactDescription();
          } else {
            console.error('Phone mode - showContactDescription function does not exist!');
          }
        });
        
        // Make sure the SF logo tile itself allows interaction
        cell.style.zIndex = '100';
        front.style.zIndex = '100';
        front.style.pointerEvents = 'auto';
        
        front.appendChild(contactButton);
        
        // Phone mode: Use phone-specific homepage return
        cell.addEventListener('click', (e) => {
          e.stopPropagation();
          phoneReturnToHomepage();
        });
        
      } else if (cellIndex === 1) {
        // Tile 2: Angelika - Now comes after SF logo
        const angelikaProject = imageFolders.find(p => p.name === 'ANGELIKA');
        if (angelikaProject) {
          // Get random image from Angelika folder
          const randomImageNum = Math.floor(Math.random() * angelikaProject.count) + 1;
          const randomImage = `${angelikaProject.path}/${randomImageNum}.${angelikaProject.ext}`;
          
          console.log(`Phone mode - Tile 2 (Angelika): ${angelikaProject.name}, image: ${randomImage}`);
          
          // Set the background image
          back.style.backgroundImage = `url('${randomImage}')`;
          back.style.backgroundSize = 'cover';
          back.style.backgroundPosition = 'center';
          back.style.backgroundRepeat = 'no-repeat';
          back.style.backgroundColor = 'transparent';
          
          // Don't rotate the back element in phone mode
          back.style.transform = 'none';
          
          // Force the back element to be on top and visible
          back.style.visibility = 'visible';
          back.style.opacity = '1';
          back.style.zIndex = '10';
          
          // Add project name as text
          const projectLabel = document.createElement('div');
          projectLabel.textContent = angelikaProject.name;
          projectLabel.style.color = 'white';
          projectLabel.style.fontSize = '14px';
          projectLabel.style.fontWeight = 'bold';
          projectLabel.style.position = 'absolute';
          projectLabel.style.top = '10px';
          projectLabel.style.left = '10px';
          projectLabel.style.zIndex = '20';
          projectLabel.style.textShadow = '0 0 3px rgba(0,0,0,0.8)';
          back.appendChild(projectLabel);
          
          cell.dataset.folderIndex = imageFolders.indexOf(angelikaProject);
          cell.dataset.projectName = angelikaProject.name;
          
          cell.style.pointerEvents = 'auto';
          
          // Add click handler for Angelika
          cell.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log(`Phone mode - Clicked Angelika project`);
            
            if (currentTab === 'contact') return;
            
            const imageUrl = back.style.backgroundImage.slice(5, -2);
            const folderIndex = parseInt(cell.dataset.folderIndex);
            openPhoneDetailView(imageUrl, folderIndex);
          });
        }
        
      } else if (cellIndex >= 2 && cellIndex <= 12) {
        // Tiles 3-13: Other projects (use original array order, skip ANGELIKA)
        const otherProjects = imageFolders
          .filter(p => p.name !== 'ANGELIKA') // Exclude Angelika (already at tile 2)
          .slice(0, 11); // Take first 11 projects (CLAYALLIANCE through SIGNALOGIA)
        
        console.log(`Phone mode - Other projects available:`, otherProjects.map(p => p.name));
        console.log(`Phone mode - Total other projects: ${otherProjects.length}`);
        
        const projectIndex = cellIndex - 2; // Subtract 2 for logo (0) and Angelika (1)
        
        console.log(`Phone mode - Project cell ${cellIndex}, projectIndex: ${projectIndex}, otherProjects.length: ${otherProjects.length}`);
        
        if (projectIndex < otherProjects.length && projectIndex >= 0) {
          const project = otherProjects[projectIndex];
          const firstImage = `${project.path}/1.${project.ext}`;
          
          console.log(`Phone mode - Cell ${cellIndex} -> Project ${projectIndex}: ${project.name}, image: ${firstImage}`);
          
          // Set the background image
          back.style.backgroundImage = `url('${firstImage}')`;
          back.style.backgroundSize = 'cover';
          back.style.backgroundPosition = 'center';
          back.style.backgroundRepeat = 'no-repeat';
          back.style.backgroundColor = 'transparent';
          
          // Don't rotate the back element in phone mode
          back.style.transform = 'none';
          
          // Force the back element to be on top and visible
          back.style.visibility = 'visible';
          back.style.opacity = '1';
          back.style.zIndex = '10';
          
          // Add project name as text
          const projectLabel = document.createElement('div');
          projectLabel.textContent = project.name;
          projectLabel.style.color = 'white';
          projectLabel.style.fontSize = '14px';
          projectLabel.style.fontWeight = 'bold';
          projectLabel.style.position = 'absolute';
          projectLabel.style.top = '10px';
          projectLabel.style.left = '10px';
          projectLabel.style.zIndex = '20';
          projectLabel.style.textShadow = '0 0 3px rgba(0,0,0,0.8)';
          back.appendChild(projectLabel);
          
          cell.dataset.folderIndex = imageFolders.indexOf(project);
          cell.dataset.projectName = project.name;
          
          cell.style.pointerEvents = 'auto';
          
          // Add click handler for other projects
          cell.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log(`Phone mode - Clicked project: ${project.name}`);
            
            if (currentTab === 'contact') return;
            
            const imageUrl = back.style.backgroundImage.slice(5, -2);
            const folderIndex = parseInt(cell.dataset.folderIndex);
            openPhoneDetailView(imageUrl, folderIndex);
          });
        } else {
          // No more projects - make cell truly non-functional
          console.log(`Phone mode - No project for index ${projectIndex} (cell ${cellIndex})`);
          cell.style.backgroundColor = 'transparent';
          cell.style.pointerEvents = 'none';
          cell.style.visibility = 'hidden';
          back.style.backgroundImage = '';
          front.style.backgroundImage = '';
        }
        
      } else if (cellIndex === 13) {
        // Tile 14: SUTURE - handle specifically
        const sutureProject = imageFolders.find(p => p.name === 'SUTURE');
        if (sutureProject) {
          const firstImage = `${sutureProject.path}/1.${sutureProject.ext}`;
          
          console.log(`Phone mode - Tile 13 (SUTURE): ${sutureProject.name}, image: ${firstImage}`);
          
          // Set the background image
          back.style.backgroundImage = `url('${firstImage}')`;
          back.style.backgroundSize = 'cover';
          back.style.backgroundPosition = 'center';
          back.style.backgroundRepeat = 'no-repeat';
          back.style.backgroundColor = 'transparent';
          
          // Don't rotate the back element in phone mode
          back.style.transform = 'none';
          
          // Force the back element to be on top and visible
          back.style.visibility = 'visible';
          back.style.opacity = '1';
          back.style.zIndex = '10';
          
          // Add project name as text
          const projectLabel = document.createElement('div');
          projectLabel.textContent = sutureProject.name;
          projectLabel.style.color = 'white';
          projectLabel.style.fontSize = '14px';
          projectLabel.style.fontWeight = 'bold';
          projectLabel.style.position = 'absolute';
          projectLabel.style.top = '10px';
          projectLabel.style.left = '10px';
          projectLabel.style.zIndex = '20';
          projectLabel.style.textShadow = '0 0 3px rgba(0,0,0,0.8)';
          back.appendChild(projectLabel);
          
          cell.dataset.folderIndex = imageFolders.indexOf(sutureProject);
          cell.dataset.projectName = sutureProject.name;
          
          cell.style.pointerEvents = 'auto';
          
          // Add click handler for SUTURE
          cell.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log(`Phone mode - Clicked SUTURE project`);
            
            if (currentTab === 'contact') return;
            
            const imageUrl = back.style.backgroundImage.slice(5, -2);
            const folderIndex = parseInt(cell.dataset.folderIndex);
            openPhoneDetailView(imageUrl, folderIndex);
          });
        }
        
      } else if (cellIndex === 14) {
        // Tile 15: Bottom SF logo - directly after SUTURE, NO GAP
        cell.classList.add('logo');
        cell.dataset.tab = 'logo';
        
        const logoImg = document.createElement('img');
        logoImg.src = 'SF Logo.png';
        logoImg.alt = 'SOMETHING FOUND';
        front.appendChild(logoImg);
        
        const logoImgBack = document.createElement('img');
        logoImgBack.src = 'SF Logo.png';
        logoImgBack.alt = 'SOMETHING FOUND';
        back.appendChild(logoImgBack);
        
        cell.style.pointerEvents = 'auto';
        
        // Phone mode: Use phone-specific homepage return
        cell.addEventListener('click', (e) => {
          e.stopPropagation();
          phoneReturnToHomepage();
        });
        
      }
      
      // ALWAYS add the cell to grid in phone mode
      inner.appendChild(front);
      inner.appendChild(back);
      cell.appendChild(inner);
      grid.appendChild(cell);
      
      // Skip ALL desktop logic for phone mode
      continue;
    }
    
    // DESKTOP MODE ONLY - phone mode never reaches here
    if (isNavigationTile) {
      // Desktop mode navigation tiles
      const cellIndex = i;
      
      if (cellIndex === config.logoPosition) {
        cell.classList.add('logo');
        cell.dataset.tab = 'logo';
        
        const logoImg = document.createElement('img');
        logoImg.src = 'SF Logo.png';
        logoImg.alt = 'SOMETHING FOUND';
        front.appendChild(logoImg);
        
        const logoImgBack = document.createElement('img');
        logoImgBack.src = 'SF Logo.png';
        logoImgBack.alt = 'SOMETHING FOUND';
        back.appendChild(logoImgBack);
        
        cell.style.pointerEvents = 'auto';
        cell.addEventListener('click', returnToHomepage);
      } else if (cellIndex === config.projectsPosition && config.projectsPosition !== null) {
        cell.classList.add('projects');
        cell.dataset.tab = 'projects';
        
        const projectsLabel = document.createElement('span');
        projectsLabel.className = 'projects-label';
        projectsLabel.textContent = 'Projects';
        front.appendChild(projectsLabel);
        
        const projectsLabelBack = document.createElement('span');
        projectsLabelBack.className = 'projects-label';
        projectsLabelBack.textContent = 'Projects';
        back.appendChild(projectsLabelBack);
        
        cell.addEventListener('click', () => switchTab('projects'));
      } else if (cellIndex === config.contactPosition) {
        cell.classList.add('contact');
        cell.dataset.tab = 'contact';
        
        const contactLabel = document.createElement('span');
        contactLabel.className = 'contact-label';
        contactLabel.textContent = 'Contact';
        front.appendChild(contactLabel);
        
        const contactLabelBack = document.createElement('span');
        contactLabelBack.className = 'contact-label';
        contactLabelBack.textContent = 'Contact';
        back.appendChild(contactLabelBack);
        
        cell.addEventListener('click', () => switchTab('contact'));
      } else {
        // Blank cells for other positions
        cell.classList.add('blank');
        cell.dataset.tab = 'blank';
        
        const labelFront = document.createElement('span');
        labelFront.textContent = '';
        front.appendChild(labelFront);
        
        const labelBack = document.createElement('span');
        labelBack.textContent = '';
        back.appendChild(labelBack);
        
        cell.style.pointerEvents = 'none';
      }
    } else {
      // Desktop mode content cells - RESTORED!
      const config = getGridConfig();
      
      const img = getRandomImage();
      if (img) {
        back.style.backgroundImage = `url('${img.url}')`;
        cell.dataset.folderIndex = img.folderIndex;
        cell.dataset.projectName = imageFolders[img.folderIndex].name;
        applyBackgroundSizing(back, img.folderIndex);
      }
      
      cell.addEventListener('click', () => {
        if (currentTab === 'contact') return;
        
        const config = getGridConfig();
        
        if (config.cols === 1) {
          const imageUrl = back.style.backgroundImage.slice(5, -2);
          const folderIndex = parseInt(cell.dataset.folderIndex);
          openDetailView(imageUrl, folderIndex);
          return;
        }
        
        if (cell.classList.contains('flipped')) {
          const imageUrl = back.style.backgroundImage.slice(5, -2);
          const folderIndex = parseInt(cell.dataset.folderIndex);
          openDetailView(imageUrl, folderIndex);
          return;
        }
        
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
    const config = getGridConfig();
    
    // Skip auto-flip in phone mode (1 column) - NEVER flip random tiles in phone mode
    if (config.cols === 1) return;
    
    const contentCells = Array.from(cells).filter((c, i) => {
      const row = Math.floor(i / config.cols);
      return row > 0 && !c.classList.contains('flipped');
    });
    if (contentCells.length > 0) {
      const randomCell = contentCells[Math.floor(Math.random() * contentCells.length)];
      randomCell.classList.add('flipped');
    }
  }, 200);
}

// Handle window resize
window.addEventListener('resize', () => {
  setupGrid();
});

// Close buttons
document.getElementById('detailCloseBtn').addEventListener('click', closeDetailView);

function returnToHomepage() {
  // Get all panels
  const contactPanel = document.getElementById('contactPanel');
  const detailPanel = document.getElementById('detailPanel');
  const directoryPanel = document.getElementById('directoryPanel');
  const projectsPanel = document.getElementById('projectsPanel');
  const grid = document.querySelector('.grid');
  const blackOverlay = document.getElementById('blackOverlay');
  const config = getGridConfig(); // Get config here
  
  // Reset currentTab FIRST to prevent detection issues
  currentTab = 'hybrid';
  
  // PHONE MODE: Unlock scroll when returning to homepage
  if (config.cols === 1) {
    document.body.classList.remove('detail-open');
    console.log('Phone mode - Homepage returned, scroll unlocked');
  }
  
  // Close contact panel if open
  if (contactPanel && contactPanel.classList.contains('open')) {
    contactPanel.classList.remove('open');
  }
  
  // Close directory if open
  if (directoryPanel && directoryPanel.classList.contains('open')) {
    directoryPanel.classList.remove('open');
  }
  
  // Handle detail view close based on mode
  if (detailPanel && detailPanel.classList.contains('open')) {
    if (config.cols === 1) {
      // Phone mode - use phone close function
      closePhoneDetailView();
    } else {
      // Desktop mode - use desktop close function
      closeDetailView();
    }
  }
  
  // Close projects panel if open
  if (projectsPanel && projectsPanel.classList.contains('open')) {
    projectsPanel.classList.remove('open');
  }
  
  // Add explicit grid visible class to override CSS
  grid.classList.add('grid-visible');
  
  // Fade black overlay out properly (don't remove it completely)
  blackOverlay.style.opacity = '0';
  blackOverlay.style.visibility = 'visible';
  blackOverlay.style.display = 'block';
  
  // Re-enable scroll
  document.body.classList.remove('detail-open');
  
  // Refresh content tiles
  refreshContentTiles();
}

// Update top row logo to be clickable
document.addEventListener('DOMContentLoaded', () => {
  const logoCell = document.querySelector('.cell.logo');
  if (logoCell) {
    logoCell.addEventListener('click', returnToHomepage);
  }
});

// Add click event to SF logo in contact panel to return to homepage
document.addEventListener('DOMContentLoaded', () => {
  const contactLogo = document.querySelector('.sf-logo.clickable-logo');
  if (contactLogo) {
    contactLogo.addEventListener('click', returnToHomepage);
  }
});

// Poisson-distributed random clicks
function poissonInterval(lambda) {
  return -Math.log(1 - Math.random()) / lambda * 1000;
}

// Track consecutive project index for phone mode
let phoneProjectIndex = 0;

function randomClick() {
  // Don't auto-click when contact panel or detail view is open
  if (currentTab !== 'contact' && !detailView) {
    const config = getGridConfig();
    
    // NEVER auto-click in phone mode - stop all random behavior
    if (config.cols === 1) return;
    
    // In phone mode, show consecutive projects instead of random
    if (config.cols === 1) {
      const cells = document.querySelectorAll('.cell:not(.static):not(.grid-hidden)');
      if (cells.length > 0 && phoneProjectIndex < imageFolders.length) {
        const cell = cells[phoneProjectIndex % cells.length];
        // Just flip the tile, don't open detail view
        if (!cell.classList.contains('flipped')) {
          const back = cell.querySelector('.cell-back');
          const folder = imageFolders[phoneProjectIndex];
          if (folder && folder.thumbnail) {
            back.style.backgroundImage = `url('${folder.thumbnail}')`;
            cell.dataset.folderIndex = phoneProjectIndex;
            cell.dataset.projectName = folder.name;
            applyBackgroundSizing(back, phoneProjectIndex);
            
            // Add project title to the tile
            const front = cell.querySelector('.cell-front');
            if (front) {
              front.textContent = folder.name;
              front.style.fontSize = '0.8rem';
              front.style.padding = '5px';
              front.style.textAlign = 'center';
              front.style.display = 'flex';
              front.style.alignItems = 'center';
              front.style.justifyContent = 'center';
            }
          }
          cell.classList.toggle('flipped');
        }
        phoneProjectIndex++; // Move to next project
      }
    } else {
      // Desktop mode: keep random behavior
      const cells = document.querySelectorAll('.cell:not(.static):not(.grid-hidden)');
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
          cell.classList.toggle('flipped');
        }
      }
    }
  }
  const nextDelay = poissonInterval(0.5);
  setTimeout(randomClick, nextDelay);
}

// Create bottom row tiles mirroring top row
function createBottomRowTiles() {
  const detailPanel = document.getElementById('detailPanel');
  
  // Remove existing bottom tiles if any
  const existingBottomTiles = detailPanel.querySelector('.bottom-tiles');
  if (existingBottomTiles) {
    existingBottomTiles.remove();
  }
  
  // Create bottom tiles container
  const bottomTiles = document.createElement('div');
  bottomTiles.className = 'bottom-tiles';
  
  // Get current video index
  const currentFolderIndex = detailView ? detailView.folderIndex : 0;
  
  console.log('Creating bottom tiles, current index:', currentFolderIndex);
  
  // Create 5 tiles with navigation arrows on leftmost and rightmost
  for (let i = 0; i < 5; i++) {
    const tile = document.createElement('div');
    tile.className = 'bottom-tile';
    
    if (i === 0) {
      // Leftmost tile - previous video arrow
      const prevFolderIndex = (currentFolderIndex - 1 + imageFolders.length) % imageFolders.length;
      const prevFolder = imageFolders[prevFolderIndex];
      
      console.log('Previous tile:', prevFolderIndex, prevFolder?.name);
      
      tile.innerHTML = `
        <div class="arrow-symbol">←</div>
        <div class="arrow-title">${prevFolder.name}</div>
      `;
      tile.classList.add('nav-arrow');
      tile.classList.add('prev-arrow');
      
      tile.addEventListener('click', () => {
        console.log('Previous arrow clicked!');
        navigateToPreviousVideo();
      });
      
      console.log('Added click listener to previous arrow');
      
    } else if (i === 4) {
      // Rightmost tile - next video arrow
      const nextFolderIndex = (currentFolderIndex + 1) % imageFolders.length;
      const nextFolder = imageFolders[nextFolderIndex];
      
      console.log('Next tile:', nextFolderIndex, nextFolder?.name);
      
      tile.innerHTML = `
        <div class="arrow-symbol">→</div>
        <div class="arrow-title">${nextFolder.name}</div>
      `;
      tile.classList.add('nav-arrow');
      tile.classList.add('next-arrow');
      
      tile.addEventListener('click', () => {
        console.log('Next arrow clicked!');
        navigateToNextVideo();
      });
      
      console.log('Added click listener to next arrow');
      
    } else {
      // Middle tiles - empty
      tile.textContent = '';
    }
    
    bottomTiles.appendChild(tile);
  }
  
  detailPanel.appendChild(bottomTiles);
  console.log('Bottom tiles created and appended');
}

// Navigate to previous video
function navigateToPreviousVideo() {
  console.log('navigateToPreviousVideo called');
  
  if (!detailView) {
    console.log('No detailView, returning');
    return;
  }
  
  // Store navigation info before closing
  const currentFolderIndex = detailView.folderIndex;
  const prevFolderIndex = (currentFolderIndex - 1 + imageFolders.length) % imageFolders.length;
  const prevFolder = imageFolders[prevFolderIndex];
  
  console.log('Current:', currentFolderIndex, 'Previous:', prevFolderIndex, 'Folder:', prevFolder?.name);
  
  if (prevFolder) {
    console.log('Folder exists, constructing image URL...');
    
    // Construct the image URL the same way getRandomImage does
    const imageUrl = `${prevFolder.path}/1.${prevFolder.ext}`; // Use image 1 (first image)
    
    console.log('Using imageUrl:', imageUrl);
    console.log('Vimeo ID:', prevFolder.vimeoId);
    console.log('Has video:', !!prevFolder.vimeoId);
    
    if (imageUrl) {
      console.log('Image exists, proceeding with navigation');
      
      // Update detailView directly without closing
      detailView = { imageUrl, folderIndex: prevFolderIndex };
      
      // Update video and description directly
      const detailVideo = document.querySelector('.detail-video');
      const detailTitle = document.querySelector('.detail-title');
      const detailDescription = document.querySelector('.detail-description');
      
      if (detailVideo) {
        // Clear current video and cleanup any existing gallery
        detailVideo.innerHTML = '';
        if (detailPanel.cleanupGallery) {
          detailPanel.cleanupGallery();
          detailPanel.cleanupGallery = null;
        }
        
        // Load content the same way openDetailView does
        if (prevFolder.vimeoId && prevFolder.vimeoId.trim() !== '') {
          console.log('Loading Vimeo video');
          // Load Vimeo iframe for projects with videos
          const iframe = document.createElement('iframe');
          iframe.src = `https://player.vimeo.com/video/${prevFolder.vimeoId}?autoplay=0&title=0&byline=0&portrait=0`;
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
          iframe.setAttribute('allowfullscreen', '');
          detailVideo.appendChild(iframe);
        } else {
          console.log('Creating picture viewer');
          // Create picture viewer for projects without videos
          currentGallery = createPictureViewer(detailVideo, prevFolder);
          
          // Store cleanup function
          detailPanel.cleanupGallery = () => {
            if (currentGallery && currentGallery.cleanup) {
              currentGallery.cleanup();
            }
          };
        }
      }
      
      if (detailTitle) {
        detailTitle.innerHTML = prevFolder.name + (prevFolder.year || prevFolder.location ? ' <span class="detail-year">' + (prevFolder.year || '') + (prevFolder.year && prevFolder.location ? ', ' : '') + (prevFolder.location || '') + '</span>' : '');
      }
      
      if (detailDescription) {
        detailDescription.innerHTML = formatDescription(prevFolder.description);
      }
      
      // Add cast information if available
      const castElement = document.querySelector('.detail-cast');
      if (castElement) {
        castElement.textContent = prevFolder.cast || '';
        castElement.style.display = prevFolder.cast ? 'block' : 'none';
      }
      
      // Add featured information if available
      const featuredElement = document.querySelector('.detail-featured');
      if (featuredElement) {
        featuredElement.textContent = prevFolder.featured || '';
        featuredElement.style.display = prevFolder.featured ? 'block' : 'none';
      }
      
      // Recreate bottom tiles with new navigation
      createBottomRowTiles();
      
      console.log('Navigation complete');
    } else {
      console.log('No image found in folder');
    }
  } else {
    console.log('No previous folder found');
  }
}

// Navigate to next video
function navigateToNextVideo() {
  console.log('navigateToNextVideo called');
  
  if (!detailView) {
    console.log('No detailView, returning');
    return;
  }
  
  // Store navigation info before closing
  const currentFolderIndex = detailView.folderIndex;
  const nextFolderIndex = (currentFolderIndex + 1) % imageFolders.length;
  const nextFolder = imageFolders[nextFolderIndex];
  
  console.log('Current:', currentFolderIndex, 'Next:', nextFolderIndex, 'Folder:', nextFolder?.name);
  
  if (nextFolder) {
    console.log('Folder exists, constructing image URL...');
    
    // Construct the image URL the same way getRandomImage does
    const imageUrl = `${nextFolder.path}/1.${nextFolder.ext}`; // Use image 1 (first image)
    
    console.log('Using imageUrl:', imageUrl);
    console.log('Vimeo ID:', nextFolder.vimeoId);
    console.log('Has video:', !!nextFolder.vimeoId);
    
    if (imageUrl) {
      console.log('Image exists, proceeding with navigation');
      
      // Update detailView directly without closing
      detailView = { imageUrl, folderIndex: nextFolderIndex };
      
      // Update video and description directly
      const detailVideo = document.querySelector('.detail-video');
      const detailTitle = document.querySelector('.detail-title');
      const detailDescription = document.querySelector('.detail-description');
      
      if (detailVideo) {
        // Clear current video and cleanup any existing gallery
        detailVideo.innerHTML = '';
        if (detailPanel.cleanupGallery) {
          detailPanel.cleanupGallery();
          detailPanel.cleanupGallery = null;
        }
        
        // Load content the same way openDetailView does
        if (nextFolder.vimeoId && nextFolder.vimeoId.trim() !== '') {
          console.log('Loading Vimeo video');
          // Load Vimeo iframe for projects with videos
          const iframe = document.createElement('iframe');
          iframe.src = `https://player.vimeo.com/video/${nextFolder.vimeoId}?autoplay=0&title=0&byline=0&portrait=0`;
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
          iframe.setAttribute('allowfullscreen', '');
          detailVideo.appendChild(iframe);
        } else {
          console.log('Creating picture viewer');
          // Create picture viewer for projects without videos
          currentGallery = createPictureViewer(detailVideo, nextFolder);
          
          // Store cleanup function
          detailPanel.cleanupGallery = () => {
            if (currentGallery && currentGallery.cleanup) {
              currentGallery.cleanup();
            }
          };
        }
      }
      
      if (detailTitle) {
        detailTitle.innerHTML = nextFolder.name + (nextFolder.year || nextFolder.location ? ' <span class="detail-year">' + (nextFolder.year || '') + (nextFolder.year && nextFolder.location ? ', ' : '') + (nextFolder.location || '') + '</span>' : '');
      }
      
      if (detailDescription) {
        detailDescription.innerHTML = formatDescription(nextFolder.description);
      }
      
      // Add cast information if available
      const castElement = document.querySelector('.detail-cast');
      if (castElement) {
        castElement.textContent = nextFolder.cast || '';
        castElement.style.display = nextFolder.cast ? 'block' : 'none';
      }
      
      // Add featured information if available
      const featuredElement = document.querySelector('.detail-featured');
      if (featuredElement) {
        featuredElement.textContent = nextFolder.featured || '';
        featuredElement.style.display = nextFolder.featured ? 'block' : 'none';
      }
      
      // Recreate bottom tiles with new navigation
      createBottomRowTiles();
      
      console.log('Navigation complete');
    } else {
      console.log('No image found in folder');
    }
  } else {
    console.log('No next folder found');
  }
}

// Initialize grid immediately when page loads
document.addEventListener('DOMContentLoaded', () => {
  setupGrid();
});

setTimeout(randomClick, 2000);
