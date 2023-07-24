import {
	Map as MapboxMap,
	FullscreenControl,
	Marker,
	NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef } from "react";
function Map({ mahasiswa }) {
	const map = useRef();
	const mapboxApi = import.meta.env.VITE_MAPBOX_API_KEY;

	const onCLick = () => {
		map.current?.flyTo({
			center: [-122.4193, 35.7751],
		});
	};
	return (
		<div>
			<MapboxMap
				ref={map}
				mapboxAccessToken={mapboxApi}
				initialViewState={{
					latitude: -8.1000917,
					longitude: 112.1647397,
					zoom: 11,
				}}
				style={{ width: "100%", height: 500 }}
				mapStyle="mapbox://styles/mapbox/light-v9">
				<FullscreenControl />
				{mahasiswa.map((mhs) => (
					<Marker
						latitude={mhs.latitude}
						longitude={mhs.longitude}
						anchor="bottom"
						key={mhs.nama}></Marker>
				))}

				<NavigationControl />
			</MapboxMap>
			<button className="px-4 py-2 bg-sky-300 text-white" onClick={onCLick}>
				Klikme
			</button>
		</div>
	);
}

export default Map;
