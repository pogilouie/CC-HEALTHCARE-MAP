
// LAHAT TO KUKUNIN MO ALI

const dalahican = {lat: 14.463016339446998, lng: 120.88491782571575};
const sanroque = {lat: 14.483487238249982, lng: 120.90180062606323};
const caridad = {lat: 14.479850341177155, lng: 120.89595973738562};
const sanantonio = {lat: 14.488134385936204, lng: 120.89638310240186};
const medcare = {lat: 14.479639983243302, lng: 120.895847755169};

//custom map
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 14.4796445, lng: 120.8932689 },
    zoom: 15,
    mapId: 'c0cae7e32440ccd4'
  });

// DALAHICAN CENTER MARKER
 const marker1 = new google.maps.Marker({
    position: dalahican,
    map,
    title: "Dalahican HealthCare Center",
    icon: {
        url: "centericon.png",
        scaledSize: new google.maps.Size(50, 50)
    }
 });
//dialogue box
 const dalahicandesc =
 '<div id="content">' +
 '<div id="siteNotice">' +
 "</div>" +
 '<h1 id="firstHeading" class="firstHeading">Dalahican HealthCare Center</h1>' +
 '<div id="bodyContent">' +
 "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
 "sandstone rock formation in the southern part of the " +
 "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
 "south west of the nearest large town, Alice Springs; 450&#160;km " +
 "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
 "features of the Uluru - Kata Tjuta National Park. Uluru is " +
 "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
 "Aboriginal people of the area. It has many springs, waterholes, " +
 "rock caves and ancient paintings. Uluru is listed as a World " +
 "Heritage Site.</p>" +
 '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
 "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
 "(last visited June 22, 2009).</p>" +
 "</div>" +
 "</div>";
const infowindow1 = new google.maps.InfoWindow({
 content: dalahicandesc,
 ariaLabel: "Dalahican Center",
});
marker1.addListener("click", () => {
 infowindow1.open({
   anchor: marker1,
   map,
 });
});

// SAN ANTONIO CENTER MARKER
const marker2 = new google.maps.Marker({
    position: sanantonio,
    map,
    title: "San Antonio HealthCare Center",
    icon: {
        url: "centericon.png",
        scaledSize: new google.maps.Size(50, 50)
    }
 });
 //dialogue box
 const sanantoniodesc =
 '<div id="content">' +
 '<div id="siteNotice">' +
 "</div>" +
 '<h1 id="firstHeading" class="firstHeading">San Antonio HealthCare Center</h1>' +
 '<div id="bodyContent">' +
 "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
 "sandstone rock formation in the southern part of the " +
 "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
 "south west of the nearest large town, Alice Springs; 450&#160;km " +
 "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
 "features of the Uluru - Kata Tjuta National Park. Uluru is " +
 "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
 "Aboriginal people of the area. It has many springs, waterholes, " +
 "rock caves and ancient paintings. Uluru is listed as a World " +
 "Heritage Site.</p>" +
 '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
 "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
 "(last visited June 22, 2009).</p>" +
 "</div>" +
 "</div>";
const infowindow2 = new google.maps.InfoWindow({
 content: sanantoniodesc,
 ariaLabel: "San Antonio Center",
});
marker2.addListener("click", () => {
 infowindow2.open({
   anchor: marker2,
   map,
 });
});

// SAN ROQUE CENTER MARKER
const marker3 = new google.maps.Marker({
    position: sanroque,
    map,
    title: "San Roque HealthCare Center",
    icon: {
        url: "centericon.png",
        scaledSize: new google.maps.Size(50, 50)
    }
 });
 //dialogue box
 const sanroquedesc =
 '<div id="content">' +
 '<div id="siteNotice">' +
 "</div>" +
 '<h1 id="firstHeading" class="firstHeading">San Roque HealthCare Center</h1>' +
 '<div id="bodyContent">' +
 "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
 "sandstone rock formation in the southern part of the " +
 "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
 "south west of the nearest large town, Alice Springs; 450&#160;km " +
 "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
 "features of the Uluru - Kata Tjuta National Park. Uluru is " +
 "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
 "Aboriginal people of the area. It has many springs, waterholes, " +
 "rock caves and ancient paintings. Uluru is listed as a World " +
 "Heritage Site.</p>" +
 '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
 "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
 "(last visited June 22, 2009).</p>" +
 "</div>" +
 "</div>";
const infowindow3 = new google.maps.InfoWindow({
 content: sanroquedesc,
 ariaLabel: "San Roque",
});
marker3.addListener("click", () => {
 infowindow3.open({
   anchor: marker3,
   map,
 });
});

// CARIDAD CENTER MARKER
const marker4 = new google.maps.Marker({
    position: caridad,
    map,
    title: "Caridad HealthCare Center",
    icon: {
        url: "centericon.png",
        scaledSize: new google.maps.Size(50, 50)
    }
 });
 //dialogue box
 const caridaddesc =
 '<div id="content">' +
 '<div id="siteNotice">' +
 "</div>" +
 '<h1 id="firstHeading" class="firstHeading">Caridad HealthCare Center</h1>' +
 '<div id="bodyContent">' +
 "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
 "sandstone rock formation in the southern part of the " +
 "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
 "south west of the nearest large town, Alice Springs; 450&#160;km " +
 "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
 "features of the Uluru - Kata Tjuta National Park. Uluru is " +
 "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
 "Aboriginal people of the area. It has many springs, waterholes, " +
 "rock caves and ancient paintings. Uluru is listed as a World " +
 "Heritage Site.</p>" +
 '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
 "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
 "(last visited June 22, 2009).</p>" +
 "</div>" +
 "</div>";
const infowindow4 = new google.maps.InfoWindow({
 content: caridaddesc,
 ariaLabel: "Caridad",
});
marker4.addListener("click", () => {
 infowindow4.open({
   anchor: marker4,
   map,
 });
});

// MEDCARE HOSPITAL MARKER
const marker6 = new google.maps.Marker({
    position: medcare,
    map,
    title: "MeDCare Cavite City",
    icon: {
        url: "medcareicon.png",
        scaledSize: new google.maps.Size(50, 50)
    }
 });
 //dialogue box
 const medcaredesc =
 '<div id="content">' +
 '<div id="siteNotice">' +
 "</div>" +
 '<h1 id="firstHeading" class="firstHeading">Cavite City MeDCare</h1>' +
 '<div id="bodyContent">' +
 "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
 "sandstone rock formation in the southern part of the " +
 "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
 "south west of the nearest large town, Alice Springs; 450&#160;km " +
 "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
 "features of the Uluru - Kata Tjuta National Park. Uluru is " +
 "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
 "Aboriginal people of the area. It has many springs, waterholes, " +
 "rock caves and ancient paintings. Uluru is listed as a World " +
 "Heritage Site.</p>" +
 '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
 "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
 "(last visited June 22, 2009).</p>" +
 "</div>" +
 "</div>";
const infowindow6 = new google.maps.InfoWindow({
 content: medcaredesc,
 ariaLabel: "MeDCare",
});
marker6.addListener("click", () => {
 infowindow6.open({
   anchor: marker6,
   map,
 });
});








}
window.initMap = initMap;
initMap();

