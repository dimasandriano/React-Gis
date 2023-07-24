import { useEffect } from "react";
import { Map } from "../../component";
import RootLayout from "../../layout/RootLayout";
import { useStore } from "../../config/zustand/store";

function Home() {
	const setMahasiswa = useStore((state) => state.setMahasiswa);
	const mahasiswa = useStore((state) => state.mahasiswa);
	useEffect(() => {
		setMahasiswa();
	}, []);

	return (
		<RootLayout>
			<Map mahasiswa={mahasiswa} />
		</RootLayout>
	);
}

export default Home;
