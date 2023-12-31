import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const MahasiswaSlice = (set, get) => ({
	mahasiswa: [],
	setMahasiswa: async () => {
		// eslint-disable-next-line no-undef
		const data = await getDocs(collection(db, "mahasiswa"));
		set(() => ({
			mahasiswa: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
		}));
	},
	createMahasiswa: async (data) => {
		await addDoc(collection(db, "mahasiswa"), data);
		get().setMahasiswa();
	},
	deleteMahasiswa: async (id) => {
		await deleteDoc(doc(db, "mahasiswa", id));
		get().setMahasiswa();
	},
	updateMahasiswa: async (id, data) => {
		await updateDoc(doc(db, "mahasiswa", id), data);
		get().setMahasiswa();
	},
});
