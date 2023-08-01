import {
	Map as MapboxMap,
	FullscreenControl,
	Marker,
	NavigationControl,
	Popup,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import { useStore } from "../../config/zustand/store";

function Map({ mahasiswa, mapStyleIndex }) {
	const map = useRef();
	const mapboxApi = import.meta.env.VITE_MAPBOX_API_KEY;
	const [popupInfo, setPopupInfo] = useState(null);
	const transitionMarker = useStore((state) => state.transitionMarker);
	const mapStyle = useStore((state) => state.mapStyle);
	useEffect(() => {
		map.current?.flyTo({
			center: [transitionMarker.longitude, transitionMarker.latitude],
			zoom: transitionMarker.zoom,
		});
	}, [transitionMarker]);

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
				style={{ width: "100%", height: 550, borderRadius: 10 }}
				mapStyle={mapStyle[mapStyleIndex]}>
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
							<img src={popupInfo.foto} alt={popupInfo.nama} />
							Nama : {popupInfo.nama} <br />
							Nim : {popupInfo.nim} <br />
							Jenis kelamin : {popupInfo.gender} <br />
							TTL : {popupInfo.ttl} <br />
							Prodi: {popupInfo.prodi} <br />
							Fakultas: {popupInfo.fakultas} <br />
						</div>
					</Popup>
				)}

				<NavigationControl />
			</MapboxMap>
		</div>
	);
}

export default Map;
