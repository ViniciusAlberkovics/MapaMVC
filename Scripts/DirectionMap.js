var _start, _end;

_start = _Origin;
_end = _Destiny;



function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	directionsService.route({
		origin: _start,
		destination: _end,
		travelMode: 'DRIVING'
	}, function (response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response);
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}


	//Structure to receive the values
	/*var current = function (lat, lng) {
		return (lat || this.lat) + '     ' + (lng || this.lng);
	}

	_currentNow = current.call(_pos);
	//window.alert(_currentNow);

	
}


//calculate route
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	var waypts = [];

	waypts.push({
		location: _end,
		stopover: true
	});
	//Take the values of the position(_pos) as text
	directionsService.route({
		origin: _currentNow,
		destination: _start,
		waypoints: waypts,
		optimizeWaypoints: true,
		travelMode: 'DRIVING'
	}, function (response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response);
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}*/