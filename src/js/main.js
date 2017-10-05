//load our custom elements
require("component-leaflet-map");
require("component-responsive-frame");

//get access to Leaflet and the map
var element = document.querySelector("leaflet-map");
var L = element.leaflet;
var map = element.map;

var ich = require("icanhaz");
var templateFile = require("./_popup.html");
ich.addTemplate("popup", templateFile);

// var onEachFeature = function(feature, layer) {
//   layer.bindPopup(ich.popup(feature.properties))
// };
var onEachFeature = function(feature, layer) {
  layer.bindPopup(ich.popup(feature.properties))
};

var data = require("./map.geo.json");
// var category = {
//   "Apartments": "#87278f",
//   "Retail": "#2bb673",
//   "Other": "#003369",
//   "Hotel": "#ffcb05"
// }

function geojsonMarkerOptions(feature) {
  console.log(feature.properties)

  return {
    radius: 4,
    // fillColor: getColor(feature.properties.type),
    fillColor: "#00aeef",
    color: "#000000",
    weight: 1,
    opacity: 0.6,
    fillOpacity: 0.4,
  }
};

var geojson = L.geoJson(data, {
    pointToLayer: function (feature, lnglat) {
        return L.circleMarker(lnglat);
    },
    style: geojsonMarkerOptions,
    onEachFeature: onEachFeature
}).addTo(map);


var onEachFeature = function(feature, layer) {
  layer.bindPopup(ich.popup(feature.properties))
};

 map.scrollWheelZoom.disable();

 // map.fitBounds(geojson.getBounds());
