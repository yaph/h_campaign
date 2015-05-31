var map = d3.geomap()
    .geofile('d3-geomap/topojson/countries/USA.json');

d3.select('#map')
    .call(map.draw, map);