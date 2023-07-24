import { useEffect } from "react";
import { useStore } from "../../config/zustand/store";
import { Table } from "../../component";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

function Dashboard() {
	const setMahasiswa = useStore((state) => state.setMahasiswa);
	const mahasiswa = useStore((state) => state.mahasiswa);
	const deleteMahasiswa = useStore((state) => state.deleteMahasiswa);
	const logout = useStore((state) => state.logout);
	useEffect(() => {
		setMahasiswa();
	}, []);
	const handleDelete = async (id) => {
		try {
			await deleteMahasiswa(id);
			toast.success("Berhasil menghapus data mahasiswa");
		} catch (error) {
			toast.error("Gagal menghapus data mahasiswa");
		}
	};
	return (
		<div>
			<div className="mx-auto w-full px-6 lg:max-w-5xl xl:max-w-7xl">
				<div className="flex justify-between">
					<Link to="/create-mahasiswa">
						<button className="py-2 px-4 text-white bg-emerald-500 rounded-lg mb-3">
							Tambah
						</button>
					</Link>
					<div className="flex gap-2">
						<Link to="/">
							<button className="py-2 px-4 text-white bg-emerald-500 rounded-lg mb-3">
								Home
							</button>
						</Link>
						<button
							onClick={logout}
							className="py-2 px-4 text-white bg-red-500 rounded-lg mb-3">
							Logout
						</button>
					</div>
				</div>
				<div className="w-full overflow-x-auto">
					<Table mahasiswa={mahasiswa} handleDelete={handleDelete} />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
