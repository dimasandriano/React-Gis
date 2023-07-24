import { useEffect, useState } from "react";
import { Map, Navbar } from "../../component";
import { useStore } from "../../config/zustand/store";

function Home() {
	const setMahasiswa = useStore((state) => state.setMahasiswa);
	const mahasiswa = useStore((state) => state.mahasiswa);
	const setTransitionMarker = useStore((state) => state.setTransitionMarker);
	const [nama, setNama] = useState("");
	useEffect(() => {
		setMahasiswa();
	}, []);
	const filteredMahasiswa = mahasiswa.filter((mhs) =>
		mhs.nama.toLowerCase().includes(nama.toLowerCase())
	);
	return (
		<div>
			<Navbar />
			<div className="container px-6 m-auto">
				<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
					<div className="col-span-4 rounded-lg">
						<div className="text-center">
							<h1 className="text-2xl font-semibold">Daftar Mahasiswa Jurusan RPL</h1>
						</div>
						<div className="md:flex justify-between">
							<input
								type="text"
								placeholder="Cari..."
								value={nama}
								onChange={(e) => setNama(e.target.value)}
								className="block w-full mb-3 px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-emerald-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
							/>
						</div>
						<table
							className="w-full text-left border border-separate rounded border-slate-200"
							cellSpacing="0">
							<tbody>
								{filteredMahasiswa.map((mhs) => (
									<tr
										key={mhs.id}
										className="transition-colors duration-300 hover:bg-slate-50 cursor-pointer">
										<td
											onClick={() => setTransitionMarker(mhs.latitude, mhs.longitude)}
											className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
											{mhs.nama}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="col-span-4 lg:col-span-8">
						<Map mahasiswa={mahasiswa} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
