import { create } from "zustand";
import { userSlice } from "./UserSlice/UserSlice";
import { MahasiswaSlice } from "./MahasiswaSlice/MahasiswaSlice";
import { MapSlice } from "./MapSlice/MapSlice";

export const useStore = create((...a) => ({
	...userSlice(...a),
	...MahasiswaSlice(...a),
	...MapSlice(...a),
}));
