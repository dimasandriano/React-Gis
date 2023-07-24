export const MapSlice = (set) => ({
	transitionMarker: { latitude: -8.1000917, longitude: 112.1647397, zoom: 11 },
	setTransitionMarker: (latitude, longitude) =>
		set(() => ({ transitionMarker: { latitude, longitude, zoom: 13 } })),
});
