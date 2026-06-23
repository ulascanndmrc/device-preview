const DEVICES = [
  // === iPHONE ===
  { name: 'iPhone SE', w: 375, h: 667, group: 'iphone' },
  { name: 'iPhone 13', w: 390, h: 844, group: 'iphone' },
  { name: 'iPhone 13 Pro', w: 390, h: 844, group: 'iphone' },
  { name: 'iPhone 13 Pro Max', w: 428, h: 926, group: 'iphone' },
  { name: 'iPhone 14', w: 390, h: 844, group: 'iphone' },
  { name: 'iPhone 14 Plus', w: 428, h: 926, group: 'iphone' },
  { name: 'iPhone 14 Pro', w: 393, h: 852, group: 'iphone' },
  { name: 'iPhone 14 Pro Max', w: 430, h: 932, group: 'iphone' },
  { name: 'iPhone 15', w: 393, h: 852, group: 'iphone' },
  { name: 'iPhone 15 Plus', w: 430, h: 932, group: 'iphone' },
  { name: 'iPhone 15 Pro', w: 393, h: 852, group: 'iphone' },
  { name: 'iPhone 15 Pro Max', w: 430, h: 932, group: 'iphone' },
  { name: 'iPhone 16', w: 393, h: 852, group: 'iphone' },
  { name: 'iPhone 16 Plus', w: 430, h: 932, group: 'iphone' },
  { name: 'iPhone 16 Pro', w: 402, h: 874, group: 'iphone' },
  { name: 'iPhone 16 Pro Max', w: 430, h: 932, group: 'iphone' },
  { name: 'iPhone 17', w: 393, h: 852, group: 'iphone' },
  { name: 'iPhone 17 Pro', w: 393, h: 852, group: 'iphone' },
  { name: 'iPhone 17 Pro Max', w: 430, h: 932, group: 'iphone' },

  // === SAMSUNG ===
  { name: 'Galaxy A12', w: 412, h: 915, group: 'samsung' },
  { name: 'Galaxy A15', w: 412, h: 915, group: 'samsung' },
  { name: 'Galaxy A25', w: 412, h: 915, group: 'samsung' },
  { name: 'Galaxy A35', w: 412, h: 915, group: 'samsung' },
  { name: 'Galaxy A55', w: 412, h: 915, group: 'samsung' },
  { name: 'Galaxy S22', w: 393, h: 851, group: 'samsung' },
  { name: 'Galaxy S22 Plus', w: 393, h: 873, group: 'samsung' },
  { name: 'Galaxy S22 Ultra', w: 412, h: 915, group: 'samsung' },
  { name: 'Galaxy S23', w: 393, h: 851, group: 'samsung' },
  { name: 'Galaxy S23 Plus', w: 393, h: 873, group: 'samsung' },
  { name: 'Galaxy S23 Ultra', w: 412, h: 915, group: 'samsung' },
  { name: 'Galaxy S24', w: 393, h: 851, group: 'samsung' },
  { name: 'Galaxy S24 Plus', w: 393, h: 873, group: 'samsung' },
  { name: 'Galaxy S24 Ultra', w: 412, h: 915, group: 'samsung' },
  { name: 'Galaxy S25', w: 393, h: 851, group: 'samsung' },
  { name: 'Galaxy S25 Plus', w: 393, h: 873, group: 'samsung' },
  { name: 'Galaxy S25 Ultra', w: 412, h: 915, group: 'samsung' },
  { name: 'Galaxy Z Fold5', w: 344, h: 882, group: 'samsung' },
  { name: 'Galaxy Z Fold6', w: 344, h: 882, group: 'samsung' },
  { name: 'Galaxy Z Flip5', w: 393, h: 851, group: 'samsung' },
  { name: 'Galaxy Z Flip6', w: 393, h: 851, group: 'samsung' },
  { name: 'Galaxy Note 20', w: 412, h: 915, group: 'samsung' },
  { name: 'Galaxy Note 20 Ultra', w: 412, h: 915, group: 'samsung' },

  // === ANDROID ===
  { name: 'Google Pixel 7', w: 412, h: 915, group: 'other' },
  { name: 'Google Pixel 7 Pro', w: 412, h: 915, group: 'other' },
  { name: 'Google Pixel 8', w: 412, h: 915, group: 'other' },
  { name: 'Google Pixel 8 Pro', w: 412, h: 915, group: 'other' },
  { name: 'Google Pixel 9', w: 393, h: 873, group: 'other' },
  { name: 'Google Pixel 9 Pro', w: 393, h: 873, group: 'other' },
  { name: 'Xiaomi 13', w: 393, h: 873, group: 'other' },
  { name: 'Xiaomi 13 Pro', w: 393, h: 873, group: 'other' },
  { name: 'Xiaomi 14', w: 393, h: 873, group: 'other' },
  { name: 'Xiaomi 14 Pro', w: 412, h: 915, group: 'other' },
  { name: 'Xiaomi 14T', w: 393, h: 873, group: 'other' },
  { name: 'OnePlus 11', w: 412, h: 914, group: 'other' },
  { name: 'OnePlus 12', w: 412, h: 914, group: 'other' },
  { name: 'OnePlus 12R', w: 412, h: 914, group: 'other' },
  { name: 'Oppo Find X7', w: 412, h: 915, group: 'other' },
  { name: 'Oppo Find X7 Ultra', w: 412, h: 915, group: 'other' },
  { name: 'Huawei P60', w: 393, h: 873, group: 'other' },
  { name: 'Huawei P60 Pro', w: 393, h: 873, group: 'other' },
  { name: 'Nothing Phone 2', w: 412, h: 915, group: 'other' },
  { name: 'Nothing Phone 2a', w: 412, h: 915, group: 'other' },
  { name: 'Honor Magic 6 Pro', w: 412, h: 915, group: 'other' },
  { name: 'Sony Xperia 1 V', w: 393, h: 873, group: 'other' },
  { name: 'Asus Zenfone 10', w: 393, h: 851, group: 'other' },

  // === TABLET ===
  { name: 'iPad Mini', w: 744, h: 1133, group: 'tablet' },
  { name: 'iPad Air', w: 820, h: 1180, group: 'tablet' },
  { name: 'iPad 10', w: 820, h: 1180, group: 'tablet' },
  { name: 'iPad Pro 11"', w: 834, h: 1194, group: 'tablet' },
  { name: 'iPad Pro 13"', w: 1032, h: 1376, group: 'tablet' },
  { name: 'Galaxy Tab S8', w: 800, h: 1280, group: 'tablet' },
  { name: 'Galaxy Tab S9', w: 800, h: 1280, group: 'tablet' },
  { name: 'Galaxy Tab S9 Ultra', w: 1000, h: 1900, group: 'tablet' },
  { name: 'Galaxy Tab S10', w: 800, h: 1280, group: 'tablet' },
  { name: 'Pixel Tablet', w: 820, h: 1180, group: 'tablet' },
];

let currentFilter = 'all';
let currentIndex = 0;
let filteredDevices = [];
let currentUrl = '';
let isLandscape = false;

function loadUrl() {
  const input = document.getElementById('urlInput');
  let url = input.value.trim();
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'http://' + url;
  }
  currentUrl = url;
  render(currentFilter);
}

function render(filter) {
  currentFilter = filter || 'all';
  const grid = document.getElementById('deviceGrid');
  const targetUrl = currentUrl || document.getElementById('urlInput').value.trim() || 'http://localhost:5173';

  filteredDevices = DEVICES.filter(d => currentFilter === 'all' || d.group === currentFilter);

  grid.innerHTML = filteredDevices.map((d, i) => {
    const dispW = Math.min(d.w * 0.45, 220);
    const dispH = d.h * (dispW / d.w);
    return `
      <div class="device-card" onclick="openModal(${i})">
        <div class="device-name">${d.name} <span class="dim">(${d.w}x${d.h})</span></div>
        <div class="device-frame" style="width:${dispW}px">
          <div class="notch"></div>
          <iframe src="${targetUrl}" width="${d.w}" height="${d.h}" style="width:100%;height:${dispH}px" loading="lazy"></iframe>
        </div>
      </div>
    `;
  }).join('');
}

function openModal(index) {
  currentIndex = index;
  isLandscape = false;
  const d = filteredDevices[index];
  const targetUrl = currentUrl || document.getElementById('urlInput').value.trim() || 'http://localhost:5173';

  document.getElementById('modalName').textContent = d.name;
  document.getElementById('modalDim').textContent = `(${d.w}x${d.h})`;

  const iframe = document.getElementById('modalIframe');
  iframe.src = targetUrl;

  updateModalSize(d);
  document.getElementById('modal').classList.add('show');
}

function updateModalSize(d, landscape) {
  const l = landscape || isLandscape;
  const w = l ? d.h : d.w;
  const h = l ? d.w : d.h;

  const maxW = window.innerWidth * 0.88;
  const maxH = window.innerHeight * 0.65;
  const scale = Math.min(1, maxW / w, maxH / h);

  const iframe = document.getElementById('modalIframe');
  iframe.width = w;
  iframe.height = h;

  if (scale < 1) {
    iframe.style.width = (w * scale) + 'px';
    iframe.style.height = (h * scale) + 'px';
  } else {
    iframe.style.width = w + 'px';
    iframe.style.height = h + 'px';
  }

  document.getElementById('modalDim').textContent = `(${w}x${h})`;
}

function closeModal() {
  document.getElementById('modal').classList.remove('show');
  document.getElementById('modalIframe').src = '';
}

function prevDevice() {
  if (currentIndex > 0) {
    closeModal();
    openModal(currentIndex - 1);
  }
}

function nextDevice() {
  if (currentIndex < filteredDevices.length - 1) {
    closeModal();
    openModal(currentIndex + 1);
  }
}

function rotateDevice() {
  isLandscape = !isLandscape;
  const d = filteredDevices[currentIndex];
  updateModalSize(d, isLandscape);
}

// Events
document.getElementById('urlInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') loadUrl();
});

document.getElementById('filters').addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    document.querySelectorAll('#filters button').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    render(e.target.dataset.filter);
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') prevDevice();
  if (e.key === 'ArrowRight') nextDevice();
});

document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModal();
});

// Başlangıç
loadUrl();
