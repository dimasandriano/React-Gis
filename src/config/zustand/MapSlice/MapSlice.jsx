export const MapSlice = (set) => ({
	transitionMarker: { latitude: -8.1000917, longitude: 112.1647397, zoom: 11 },
	setTransitionMarker: (latitude, longitude) =>
		set(() => ({ transitionMarker: { latitude, longitude, zoom: 13 } })),
	mapStyle: [
		"mapbox://styles/mapbox/streets-v12",
		"mapbox://styles/mapbox/outdoors-v12",
		"mapbox://styles/mapbox/light-v11",
		"mapbox://styles/mapbox/dark-v11",
		"mapbox://styles/mapbox/satellite-v9",
		"mapbox://styles/mapbox/satellite-streets-v12",
		"mapbox://styles/mapbox/navigation-day-v1",
		"mapbox://styles/mapbox/navigation-night-v1",
	],
});
