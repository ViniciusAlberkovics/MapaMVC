function initMap() {
	var directionsDisplay = new google.maps.DirectionsRenderer;
	var directionsService = new google.maps.DirectionsService;


	//Map page Structure and controls
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			streetViewControl: false,
			mapTypeControl: false,
			fullscreenControl: false,
			zoomControl: false,
			styles: _styles,
			center: { lat: -23.533773, lng: -46.625290}
	});

	directionsDisplay.setMap(map);//call direction in map
	calculateAndDisplayRoute(directionsService, directionsDisplay);	
	//localeNow();
}