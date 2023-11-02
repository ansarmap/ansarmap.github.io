var map = L.map('map').setView([10.699473657441606, 76.08935567428753], 19);

map.options.autoClose = false;



//osm 
var osm =  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 25,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})



//google sat
var gsat =  L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 19,
    subdomains:['mt0','mt1','mt2','mt3']
});
osm.addTo(map)


//icons

var myIcon = L.icon({
    iconUrl: 'images/marker1.png',
    iconSize: [45, 45],   
})

var boys = L.icon({
    iconUrl: 'images/mens_washroom.jpeg',
    iconSize: [45, 45],   
})

var girls = L.icon({
    iconUrl: 'images/womens_ washroom.png',
    iconSize: [45, 45],   
})

var locator = L.icon({
    iconUrl: 'images/locator.png', 
    iconSize: [45, 45,1]
})

var BHILAHARII = L.icon({
    iconUrl: 'images/BHILAHARI.png',
    iconSize: [60,60]
})

var CHARUKESII = L.icon({
    iconUrl: 'images/CHARUKESI.png',
    iconSize: [60,60]
})

var ABHOGII = L.icon({
    iconUrl: 'images/ABHOGI.png',
    iconSize: [60,60]
})

var BAGESHRII = L.icon({
    iconUrl: 'images/BAGESHRI.png',
    iconSize: [60,60]
})

var HINDOLI = L.icon({
    iconUrl: 'images/HINDOL.png',
    iconSize: [60,60]
})

var PURVII = L.icon({
    iconUrl: 'images/PURVI.png',
    iconSize: [60,60]
})

var BHAVAPRIYAI = L.icon({
    iconUrl: 'images/BHAVAPRIYA.png',
    iconSize: [60,60]
})

var VANASPATHII = L.icon({
    iconUrl: 'images/VANASPATHI.png',
    iconSize: [60,60]
})

var VANASPATHIIB = L.icon({
    iconUrl: 'images/VANASPATHI2.png',
    iconSize: [60,60]
})

var SOORYAKANTHAMI = L.icon({
    iconUrl: 'images/SOORYAKANTHAM.png',
    iconSize: [60,60]
})

var SAHAANAI = L.icon({
    iconUrl: 'images/SAHAANA.png',
    iconSize: [60,60]
})

var MOHANAMI = L.icon({
    iconUrl: 'images/MOHANAM.png',
    iconSize: [60,60]
})

var HAMSADHWANII = L.icon({
    iconUrl: 'images/HAMSADHWANI.png',
    iconSize: [60,60]
})

var SAAVERII = L.icon({
    iconUrl: 'images/SAAVERI.png',
    iconSize: [60,60]
})

var DHANASREEI = L.icon({
    iconUrl: 'images/DHANASREE.png',
    iconSize: [60,60]
})

var DHANASREEI = L.icon({
    iconUrl: 'images/DHANASREE.png',
    iconSize: [60,60]
})

var DHANASREEI = L.icon({
    iconUrl: 'images/DHANASREE.png',
    iconSize: [60,60]
})

var NEELAMBHARII  = L.icon({
    iconUrl: 'images/NEELAMBHARI.png',
    iconSize: [60,60]
})

var SREERAGAMI  = L.icon({
    iconUrl: 'images/SREERAGAM.png',
    iconSize: [60,60]
})

var KALYANII = L.icon({
    iconUrl: 'images/KALYANI.png',
    iconSize: [60,60]
})

var CHAKRAVAKAMI = L.icon({
    iconUrl: 'images/CHAKRAVAKAM.png',
    iconSize: [60,60]
})

var BIHAGI = L.icon({
    iconUrl: 'images/BIHAG.png',
    iconSize: [60,60]
})

var AMRITHAVARSHINII = L.icon({
    iconUrl: 'images/AMRITHAVARSHINI.png',
    iconSize: [60,60]
})

var MEGHI = L.icon({
    iconUrl: 'images/MEGH.png',
    iconSize: [60,60]
})

var ASARAVII = L.icon({
    iconUrl: 'images/ASARAVI.png',
    iconSize: [60,60]
})

var MARWAI = L.icon({
    iconUrl: 'images/MARWA.png',
    iconSize: [60,60]
})


var AHRII = L.icon({
    iconUrl: 'images/AHIRI.png',
    iconSize: [60,60]
})

var KHAMAJII = L.icon({
    iconUrl: 'images/KHAMAJ.png',
    iconSize: [60,60]
})


var KAFII = L.icon({
    iconUrl: 'images/KAFI.png',
    iconSize: [60,60]
})

var ANANDABHAIRAVII = L.icon({
    iconUrl: 'images/ANANDABHAIRAVI.png',
    iconSize: [60,60]
})



//bark


var customIcon = L.divIcon({   //ground floor
    className: 'custom-icon',
    html: '<div class="icon"></div><div class="label">Green Room 1 to 11</div>',
    iconSize: [50, 50], // Adjust the size of the icon container
});




var customIcon2 = L.divIcon({   //first floor
    className: 'custom-icon2',
    html: '<div class="icon"></div><div class="label">Green Room 12 to 24</div>',
    iconSize: [50, 50], // Adjust the size of the icon container
});

var customIcon3 = L.divIcon({    //Second floor
    className: 'custom-icon3',
    html: '<div class="icon"></div><div class="label">Green Room 24 to 39</div>',
    iconSize: [50, 50], // Adjust the size of the icon container
});
var customIcon24 = L.divIcon({   //ground floor
    className: 'custom-icon',
    html: '<div class="icon"></div><div class="label">Green Room 40 to 47 </div>',
    iconSize: [50, 50], // Adjust the size of the icon container
});



var customIcon34 = L.divIcon({   //first floor
    className: 'custom-icon2',
    html: '<div class="icon"></div><div class="label">Green Room 48 to 55</div>',
    iconSize: [50, 50], // Adjust the size of the icon container
});


var customIcon44 = L.divIcon({   //first floor
    className: 'custom-icon',
    html: '<div class="icon"></div><div class="label">Green Room 55 to 57</div>',
    iconSize: [50, 50], // Adjust the size of the icon container
});

var customIcon54 = L.divIcon({   //first floor
    className: 'custom-icon2',
    html: '<div class="icon"></div><div class="label">Green Room 58 to 69</div>',
    iconSize: [50, 50], // Adjust the size of the icon container
});

var customIcon00 = L.divIcon({   //first floor
    className: 'custom-icon',
    html: '<div class="icon"></div><div class="label">Green Room 70</div>',
    iconSize: [50, 50], // Adjust the size of the icon container
});


var trophee = L.divIcon({   //first floor
    className: 'trophee',
    html: '<div class="icon"></div><div class="label">Prize Room</div>',
    iconSize: [30, 30], // Adjust the size of the icon container
});

var medical = L.divIcon({   //first floor
    className: 'medical',
    html: '<div class="icon"></div><div class="label">Medical Room</div>',
    iconSize: [30, 30], // Adjust the size of the icon container
});

var registrationI = L.divIcon({   //first floor
    className: 'registration',
    html: '<div class="icon"></div><div class="label">State Kalotsav Registration</div>',
    iconSize: [30, 30], // Adjust the size of the icon container
});

var mediaI = L.divIcon({   //first floor
    className: 'media',
    html: '<div class="icon"></div><div class="label">Ansar Media Production</div>',
    iconSize: [30, 30], // Adjust the size of the icon container
});

var officeI = L.divIcon({   //first floor
    className: 'office',
    html: '<div class="icon"></div><div class="label">Programme Committee Office </div>',
    iconSize: [30, 30], // Adjust the size of the icon container
});

var computer = L.divIcon({   //first floor
    className: 'computer',
    html: '<div class="icon"></div><div class="label">Tabulation/IT room</div>',
    iconSize: [30, 30], // Adjust the size of the icon container
});

var liveI = L.divIcon({   //first floor
    className: 'Live',
    html: '<div class="icon"></div><div class="label">Live media office</div>',
    iconSize: [30, 30], // Adjust the size of the icon container
});

var judge1 = L.divIcon({   //first floor
    className: 'judge',
    html: '<div class="icon"></div><div class="label">Judges and Principals</div>',
    iconSize: [30, 30], // Adjust the size of the icon container
});


var greenLP = L.marker([10.699125243762452, 76.08880483564707], {
    icon: customIcon,
}).addTo(map).bindPopup("Ground Floor");

var greenLP2 = L.marker([10.699057360977138, 76.08849245693403], {
    icon: customIcon,
}).addTo(map).bindPopup("Ground Floor");

var greenLP3 = L.marker([10.699065494529627, 76.08880050951397], {
    icon: customIcon2,
}).addTo(map).bindPopup("First Floor");

var greenLP4 = L.marker([10.699024885502318, 76.0883665711027], {
    icon: customIcon2,
}).addTo(map).bindPopup("First Floor");

var greenLP5 = L.marker([10.699251772932291, 76.08881035038581], {
    icon: customIcon3,
}).addTo(map).bindPopup("Second Floor");


var greenLP6 = L.marker([10.699035655343925, 76.08866081723203], {
    icon: customIcon3,
}).addTo(map).bindPopup("Second Floor");

var greenAWC = L.marker([10.70051895118589, 76.08877312059447], {
    icon: customIcon24,
}).addTo(map).bindPopup("Ground Floor");


var greenAWC2 = L.marker([10.700481774425985, 76.08871258513933], {
    icon: customIcon34,
}).addTo(map).bindPopup("Second Floor");

var commerce1 = L.marker([10.701215130202472, 76.08916689402074], {
    icon: customIcon44,
}).addTo(map).bindPopup("Ground Floor");

var commerce2 = L.marker([10.701120559158138, 76.08912270820812], {
    icon: customIcon54,
}).addTo(map).bindPopup("Second Floor");

var ablock = L.marker([10.699464194917304, 76.0910868003223], {
    icon: customIcon00,
}).addTo(map).bindPopup("Ground Floor");

var tropheeroom = L.marker([10.699105247888317, 76.09039313830625], {
    icon: trophee,
}).addTo(map).bindPopup("Prize Room")

var medicalroom = L.marker([10.69930163241001, 76.09042239579226], {
    icon: medical,
}).addTo(map).bindPopup("Medical Room")

var registration = L.marker([10.699133148091716, 76.09043371896453], {
    icon: registrationI,
}).addTo(map).bindPopup("Registration Room")


var media = L.marker([10.699341369263886, 76.09044665973285], {
    icon: mediaI,
}).addTo(map).bindPopup("Media Room")

var office = L.marker([10.69942193316572, 76.0899658833612], {
    icon: officeI,
}).addTo(map).bindPopup("Programme Committee office")

var IT = L.marker([10.699425534877735, 76.08987804845006], {
    icon: computer
}).addTo(map).bindPopup('Tabulation/IT Room')

var live = L.marker([10.699449255077399, 76.089842509182], {
    icon: liveI
}).addTo(map).bindPopup('Live Media Room (first floor)')

var judges = L.marker([10.699621030686933, 76.0887446801236], {
    icon: judge1
}).addTo(map).bindPopup('Judges and Principals')


var grenrooms = L.featureGroup([greenLP,greenLP2,greenLP3,greenLP4,greenLP5,greenLP6,greenAWC,greenAWC2,commerce1,commerce2])

var misc = L.featureGroup([tropheeroom,medicalroom,registration,media,office,IT,live,judges])

//Ground floor

var VANASPATHI = L.marker([10.69920717425842, 76.0887210700041] , {icon: VANASPATHII }).addTo(map)
var popup14 = VANASPATHI.bindPopup('VANASPATHI (lab 5)')

var VANASPATHI2 = L.marker([10.699113611163199, 76.08873716325755] , {icon: VANASPATHII }).addTo(map)
var popup15 = VANASPATHI2.bindPopup('VANASPATHI (lab 6)')

var VANASPATHI3 = L.marker([10.69900687012808, 76.08865803809793] , {icon: VANASPATHII }).addTo(map) //basement
var popup16 = VANASPATHI3.bindPopup('VANASPATHI (lab 4)')

var VANASPATHI4 = L.marker([10.698993692220384, 76.08847967120542] , {icon: VANASPATHII }).addTo(map)  //basement icon
var popup17 = VANASPATHI4.bindPopup('VANASPATHI (lab 7/3)')

var SOORYAKANTHAM = L.marker([10.699681578248015, 76.09008363215514] , {icon: SOORYAKANTHAMI }).addTo(map)
var popup18 = SOORYAKANTHAM.bindPopup('SOORYAKANTHAM')

var SAHAANA = L.marker([10.699228150673088, 76.08961959249201] , {icon: SAHAANAI }).addTo(map)
var popup19 = SAHAANA.bindPopup('SAHAANA')

var MOHANAM = L.marker([10.69921730496142, 76.08941355735553] , {icon: MOHANAMI }).addTo(map)
var popup20 = MOHANAM.bindPopup('MOHANAM')

var HAMSADHWANI = L.marker([10.699275148752525, 76.08925903100317] , {icon: HAMSADHWANII }).addTo(map)
var popup21 = HAMSADHWANI.bindPopup('HAMSADHWANI')

var SAAVERI = L.marker([10.69928599446213, 76.08911922144627] , {icon: SAAVERII }).addTo(map)
var popup22 = SAAVERI.bindPopup('SAAVERI')

var DHANASREE = L.marker([10.69984727509778, 76.08926198259117] , {icon: DHANASREEI }).addTo(map)
var popup23 = DHANASREE.bindPopup('DHANASREE')

var NEELAMBHARI  = L.marker([10.700977467289936, 76.08880748844285] , {icon: NEELAMBHARII }).addTo(map)
var popup24 = NEELAMBHARI .bindPopup('NEELAMBHARI ')

var SREERAGAM  = L.marker([10.701164826547634, 76.0891779969983] , {icon: SREERAGAMI }).addTo(map)
var popup25 = SREERAGAM .bindPopup('SREERAGAM ')

var MARWA  = L.marker([10.700059777622847, 76.08968569567418] , {icon: MARWAI }).addTo(map)
var popup28 = MARWA .bindPopup('MARWA ')

var ANANDABHAIRAVI  = L.marker([10.700088243025572, 76.08966118726822] , {icon: ANANDABHAIRAVII }).addTo(map)
var popup31 = ANANDABHAIRAVI.bindPopup('ANANDABHAIRAVI ')


var groundFloor = L.featureGroup([VANASPATHI,VANASPATHI2,VANASPATHI3,VANASPATHI4,SOORYAKANTHAM,SAHAANA,MOHANAM,
    HAMSADHWANI,SAAVERI,DHANASREE,NEELAMBHARI,SREERAGAM,MARWA,ANANDABHAIRAVI,ablock])


//FIRST FLOOR

var BHILAHARI = L.marker([10.699464058173962, 76.09059998782192] , {icon: BHILAHARII }).addTo(map)
var popup7 = BHILAHARI.bindPopup('BHILAHARI')

var CHARUKESI = L.marker([10.700112766989852, 76.08937266618754 ] , {icon: CHARUKESII }).addTo(map)
var popup8 = CHARUKESI.bindPopup('CHARUKESI')

var ABHOGI = L.marker([10.699161051603355, 76.090408179474] , {icon: ABHOGII }).addTo(map)
var popup9 = ABHOGI.bindPopup('ABHOGI (B block)')


var ABHOGI2 = L.marker([10.698987103264134, 76.09036392302698] , {icon: ABHOGII }).addTo(map)
var popup10 = ABHOGI2.bindPopup('ABHOGI (C Block)')

var BHAVAPRIYA = L.marker([10.69891198917551, 76.09035989972062] , {icon: BHAVAPRIYAI }).addTo(map)
var popup14 = BHAVAPRIYA.bindPopup('BHAVAPRIYA')

var KALYANI  = L.marker([10.699421732080468, 76.08992795794437] , {icon: KALYANII }).addTo(map)
var popup26 = KALYANI.bindPopup('KALYANI ')

var CHAKRAVAKAM  = L.marker([10.700121597915517, 76.08968359958921] , {icon: CHAKRAVAKAMI }).addTo(map)
var popup27 = CHAKRAVAKAM .bindPopup('CHAKRAVAKAM ')

var BIHAG  = L.marker([10.700079818476514, 76.08963181684805] , {icon: BIHAGI }).addTo(map)
var popup26 = BIHAG .bindPopup('BIHAG ')

var AHIRI  = L.marker([10.7001440897146, 76.08936073123772] , {icon: AHRII }).addTo(map)
var popup29 =  AHIRI.bindPopup(' AHIRI ')

var AMRITHAVARSHINI  = L.marker([10.70011935205628, 76.08941791068749] , {icon: AMRITHAVARSHINII }).addTo(map)
var popup26 = AMRITHAVARSHINI .bindPopup('AMRITHAVARSHINI ')



var firstfloor = L.featureGroup([BHILAHARI, ABHOGI2,CHARUKESI,ABHOGI,BHAVAPRIYA, KALYANI, CHAKRAVAKAM, BIHAG,AHIRI,AMRITHAVARSHINI])


//SECOND FLOOR

var BAGESHRI = L.marker([10.699458872018775, 76.09069115252248] , {icon: BAGESHRII }).addTo(map)
var popup11 = BAGESHRI.bindPopup('BAGESHRI')

var HINDOL = L.marker([10.699236165633762, 76.0904846224364] , {icon: HINDOLI }).addTo(map)
var popup12 = HINDOL.bindPopup('HINDOL')

var PURVI = L.marker([10.698815022987706, 76.09038647552862] , {icon: PURVII }).addTo(map)
var popup13 = PURVI.bindPopup('PURVI')

var MEGH  = L.marker([10.700117375377422, 76.08963114629584] , {icon: MEGHI }).addTo(map)
var popup27 = MEGH.bindPopup('MEGH ')

var ASARAVI  = L.marker([10.700137142165493, 76.08947758983574] , {icon: ASARAVII }).addTo(map)
var popup27 = ASARAVI.bindPopup('ASARAVI ')

var KHAMAJ  = L.marker([10.70015097578137, 76.08937354288275] , {icon: KHAMAJII }).addTo(map)
var popup30 = KHAMAJ.bindPopup('KHAMAJ')

var KAFI  = L.marker([10.700086850223897, 76.08949454056238] , {icon: KAFII }).addTo(map)
var popup31 = KAFI.bindPopup('KAFI')


var secondfloor = L.featureGroup([BAGESHRI, HINDOL,MARWA, PURVI,MEGH,ASARAVI,KHAMAJ,KAFI])


//birder



//geojson

// Create an array to store your markers
var markers2 = [];

// Add your markers to the array
markers2.push(secondfloor);

// Create a marker cluster group and add all the markers to it
var markerCluster2 = L.markerClusterGroup();
markerCluster2.addLayers(markers2);

// Add the marker cluster group to the map
map.addLayer(markerCluster2);



var markers1 = [];

markers1.push(firstfloor);

// Create a marker cluster group and add all the markers to it
var markerCluster1 = L.markerClusterGroup();
markerCluster1.addLayers(markers1);

// Add the marker cluster group to the map
map.addLayer(markerCluster1);

var markersG = [];

markersG.push(groundFloor);

// Create a marker cluster group and add all the markers to it
var markerClusterG = L.markerClusterGroup();
markerClusterG.addLayers(markersG);

// Add the marker cluster group to the map
map.addLayer(markerClusterG);

var markersR = [];

markersR.push(grenrooms);

// Create a marker cluster group and add all the markers to it
var markerClusterR = L.markerClusterGroup();
markerClusterR.addLayers(markersR);

// Add the marker cluster group to the map
map.addLayer(markerClusterR);

var markersR = [];

markersR.push(grenrooms);

// Create a marker cluster group and add all the markers to it
var markerClusterR = L.markerClusterGroup();
markerClusterR.addLayers(markersR);

// Add the marker cluster group to the map
map.addLayer(markerClusterR);

var markersM= [];

markersM.push(misc);

// Create a marker cluster group and add all the markers to it
var markerClusterM = L.markerClusterGroup();
markerClusterM.addLayers(markersM);

// Add the marker cluster group to the map
map.addLayer(markerClusterM);


if (!navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature.");
} else {
    // Request high accuracy and reduce the timeout to get updates more frequently.
    setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition, error => {
            console.error("Error getting user location: " + error.message);
        }, { enableHighAccuracy: true, timeout: 5000 });
    }, 2000);
}


var baseMaps = {
    "Sattelite": gsat,
    "OSM": osm,
};



var overlayMaps = {
    "Ground floor" :markerClusterG,
    "1st Floor" : markerCluster1,
    "2nd Floor" : markerCluster2,
    "Green Rooms" : markerClusterR,
    "Special Rooms": markerClusterM,
    };


var layerControl = L.control.layers(baseMaps, overlayMaps, { collapsed: false}).addTo(map);


var gpsloc, circ;

function getPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var accuracy = position.coords.accuracy;

    // Remove previous location marker and accuracy circle if they exist
    if (gpsloc) {
        map.removeLayer(gpsloc);
    }

    if (circ) {
        map.removeLayer(circ);
    }

    gpsloc = L.marker([lat, long], { icon: locator });
    circ = L.circle([lat, long], { radius: accuracy });

    // Add the new marker and accuracy circle to the map
    var pointer = L.featureGroup([gpsloc, circ]).addTo(map);

    

    console.log("Latitude:", lat);
    console.log("Longitude:", long);
    console.log("Accuracy:", accuracy);
}

// Include the Leaflet map initialization code here, which you already have in your original code.
