import {
	Map as MapboxMap,
	FullscreenControl,
	Marker,
	NavigationControl,
	Popup,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useState } from "react";

function Map({ mahasiswa }) {
	const map = useRef();
	const mapboxApi = import.meta.env.VITE_MAPBOX_API_KEY;
	const [popupInfo, setPopupInfo] = useState(null);
	const onCLick = (longitude, latitude) => {
		map.current?.flyTo({
			center: [longitude, latitude],
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
						key={mhs.nama}
						onClick={(e) => {
							e.originalEvent.stopPropagation();
							setPopupInfo(mhs);
						}}></Marker>
				))}
				{popupInfo && (
					<Popup
						anchor="top"
						longitude={Number(popupInfo.longitude)}
						latitude={Number(popupInfo.latitude)}
						onClose={() => setPopupInfo(null)}>
						<div>
							{popupInfo.nama}, {popupInfo.umur}
						</div>
					</Popup>
				)}

				<NavigationControl />
			</MapboxMap>
			{mahasiswa.map((mhs) => (
				<div key={mhs.id}>
					<button
						className="px-4 py-2 bg-sky-300 text-white"
						onClick={() => onCLick(mhs.longitude, mhs.latitude)}>
						{mhs.nama}
					</button>
				</div>
			))}
		</div>
	);
}

export default Map;
