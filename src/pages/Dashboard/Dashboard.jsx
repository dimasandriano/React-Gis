import { useEffect } from "react";
import { useStore } from "../../config/zustand/store";
import { Table } from "../../component";
import { Link } from "react-router-dom";

function Dashboard() {
	const setMahasiswa = useStore((state) => state.setMahasiswa);
	const mahasiswa = useStore((state) => state.mahasiswa);
	useEffect(() => {
		setMahasiswa();
	}, []);
	return (
		<div>
			<div className="mx-auto w-full px-6 lg:max-w-5xl xl:max-w-7xl">
				<Link to="/create-mahasiswa">
					<button className="py-2 px-4 text-white bg-emerald-500 rounded-lg">
						Tambah
					</button>
				</Link>
				<div className="w-full overflow-x-auto">
					<Table mahasiswa={mahasiswa} />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
