// Shared by the map app (index.html) and the guide (guide.html).

// ---------- Icons (inline stroke SVG) ----------
const ICON = {
  base:   'M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z',
  food:   'M7 3v18M4 3v6a3 3 0 0 0 6 0V3M17 21V3c-2 1.5-3 4-3 7h3',
  coffee: 'M4 9h13v4a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6zM17 11h1.5a2.5 2.5 0 0 1 0 5H16M8 3v2.5M12 3v2.5',
  pubs:   'M6 8h10v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM16 11h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2M6 8a3 3 0 0 1 5-2.2A3 3 0 0 1 16 8',
  music:  'M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
  sights: 'M3 21h18M5 21V10M19 21V10M9.5 21V10M14.5 21V10M2 10l10-6 10 6z',
  needs:  'M6 7h12l-1 14H7zM9 7a3 3 0 0 1 6 0',
  me:     'M21 3 3 10.5l7.5 3 3 7.5z',
  scan:   'M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0',
  up: 'M12 19V5M5 12l7-7 7 7', down: 'M12 5v14M5 12l7 7 7-7', x: 'M6 6l12 12M18 6 6 18', plus: 'M12 5v14M5 12h14', check: 'M5 12.5l4.5 4.5L19 7',
  walk: 'M13 4a1.5 1.5 0 1 0 0-.01M9 21l2-6 3 2v4M10 9l3-1 2 3 3 1M8 13l2-4',
  nav: 'M3 11l18-8-8 18-2-8z',
  ext: 'M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
};
const svg = k => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICON[k]}"/></svg>`;

// ---------- Categories ----------
const CATS = {
  base:   { label:'Base',       color:'#5b626c', osm:[] },
  music:  { label:'Live music', color:'#ff6a3d', osm:['["amenity"~"^(music_venue|nightclub)$"]'] },
  pubs:   { label:'Pubs & bars',color:'#c98a00', osm:['["amenity"~"^(pub|bar|biergarten)$"]'] },
  food:   { label:'Food',       color:'#e0457b', osm:['["amenity"~"^(restaurant|fast_food)$"]'] },
  coffee: { label:'Coffee',     color:'#9a6b3f', osm:['["amenity"="cafe"]'] },
  sights: { label:'Sights',     color:'#2f9e8f', osm:['["tourism"~"^(attraction|museum|gallery|viewpoint)$"]'] },
  needs:  { label:'Essentials', color:'#6b7bd6', osm:['["amenity"~"^(pharmacy|atm)$"]','["shop"="supermarket"]'] },
};
const ico = c => `<span class="ico" aria-hidden="true" style="background:color-mix(in srgb, ${CATS[c].color} 16%, transparent);color:${CATS[c].color}">${svg(c)}</span>`;

// ---------- Geo helpers ----------
const dist = (a, b) => {
  const R = 6371e3, r = x => x * Math.PI / 180;
  const dLa = r(b.lat - a.lat), dLo = r(b.lng - a.lng);
  const h = Math.sin(dLa/2)**2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(dLo/2)**2;
  return 2 * R * Math.asin(Math.sqrt(h));
};
const walk = m => m > 3500 ? `${(m/1000).toFixed(1)} km · take transit` : `${Math.max(1, Math.round(m * 1.25 / 80))} min walk`;
const mapsLink = p => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + ' ' + p.lat + ',' + p.lng)}`;
const routeLink = stops => {
  const f = p => `${p.lat},${p.lng}`, [o, ...rest] = stops, d = rest.pop();
  return `https://www.google.com/maps/dir/?api=1&travelmode=walking&origin=${f(o)}&destination=${f(d)}` + (rest.length ? `&waypoints=${rest.map(f).join('|')}` : '');
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]));
const el = html => { const d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; };
const ll = p => [p.lng, p.lat];
const dirTo = (p, mode) => `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}&travelmode=${mode}`;
const MAP_STYLE = 'https://tiles.openfreemap.org/styles/positron';
