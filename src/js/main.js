const map = L.map("map").setView([30.334067955370024, 10.003142039601048], 2);

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Specify directory with leaflet images (e.g., markers)
L.Icon.Default.imagePath = "/src/images/";

// Add markers (with popup) at a specific geo coordinate
const marker1 = L.marker([53.7267, -127.6476])
  .bindPopup('<div class="time-into-popup"><div class="time"><div class="date">2019</div></div></div>'
  + '<div class="pict-into-popup"><img class="pict" src="/src/images/home.jpg"></div>'
  + '<div class="comment-into-popup">BC, Canada</div>'
  + '<div class="likes-into-popup"><span class="likes-count"><i class="fa fa-heart likes-icon"></i>12</span></div>')
  .addTo(map);

const marker2 = L.marker([-33.811422, 151.213461])
  // .bindPopup("<strong>Sydney</strong><br>Australia<br><img src=\"/src/images/australia.jpg\"></img>")
  .bindPopup('<div class="time-into-popup"><div class="time"><div class="date">2019</div></div></div>'
  + '<div class="pict-into-popup"><img class="pict" src="/src/images/australia.jpg"></div>'
  + '<div class="comment-into-popup">Sydney, Australia</div>'
  + '<div class="likes-into-popup"><span class="likes-count"><i class="fa fa-heart likes-icon"></i>12</span></div>')
  .addTo(map);
const marker3 = L.marker([13.755, 100.539])
  // .bindPopup("<strong>Bangkok</strong><br>Thailand<br><img src=\"/src/images/thailand.jpg\"></img>")
  .bindPopup('<div class="time-into-popup"><div class="time"><div class="date">2019</div></div></div>'
  + '<div class="pict-into-popup"><img class="pict" src="/src/images/thailand.jpg"></div>'
  + '<div class="comment-into-popup">Bangkok, Thailand</div>'
  + '<div class="likes-into-popup"><span class="likes-count"><i class="fa fa-heart likes-icon"></i>12</span></div>')
  .addTo(map);
const marker4 = L.marker([10.787, 106.693])
  // .bindPopup("<strong>Ho Chin Minh City</strong><br>Vietnam<br><img src=\"/src/images/vietnam.jpg\"></img>")
  .bindPopup('<div class="time-into-popup"><div class="time"><div class="date">2019</div></div></div>'
  + '<div class="pict-into-popup"><img class="pict" src="/src/images/vietnam.jpg"></div>'
  + '<div class="comment-into-popup">Ho Chin Minh City, Vietnam</div>'
  + '<div class="likes-into-popup"><span class="likes-count"><i class="fa fa-heart likes-icon"></i>12</span></div>')
  .addTo(map);
