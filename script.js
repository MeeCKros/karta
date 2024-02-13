    var mapOptions = {center: [50.416298143075025, 30.451985993937598],zoom: 8 }
    var map = new L.map('map', mapOptions);
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    var layer_2 = new L.TileLayer('http://88.99.52.156/tmg/{z}/{x}/{y}');

    //
    map.addLayer(layer);

    function setFirstLayer() {
        map.removeLayer(layer_2);
        map.addLayer(layer);
    }

    function setSecondLayer() {
        map.removeLayer(layer);
        map.addLayer(layer_2);
    }



