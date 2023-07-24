import { create } from "zustand";
import { userSlice } from "./UserSlice/UserSlice";
import { persist } from "zustand/middleware";
import { MahasiswaSlice } from "./MahasiswaSlice/MahasiswaSlice";

export const useStore = create(
	persist(
		(...a) => ({
			...userSlice(...a),
			...MahasiswaSlice(...a),
		}),

		{ name: "store zustand" }
	)
);
