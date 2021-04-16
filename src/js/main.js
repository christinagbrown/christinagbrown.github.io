d3.csv('/src/data/locations.csv')
  .then(data => {
    const map = L.map("map").setView([30.334067955370024, 10.003142039601048], 2);

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    // Specify directory with leaflet images (e.g., markers)
    L.Icon.Default.imagePath = "/src/images/";
    
    // Add markers (with popup) at a specific geo coordinate
    data.forEach(e => {
      L.marker([e.lat, e.lon])
      .bindPopup('<div class="time-into-popup"><div class="time"><div class="date">'+e.year+'</div></div></div>'
      + '<div class="pict-into-popup"><img class="pict" src="/src/images/'+e.pic+'"></div>'
      + '<div class="comment-into-popup">'+e.name+', '+e.location+'</div>'
      + '<div class="likes-into-popup"><span class="likes-count"><i class="fa fa-heart likes-icon"></i>'+e.likes+'</span></div>')
      .addTo(map)
      .openPopup();
    });
  });
