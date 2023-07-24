import { persist } from "zustand/middleware";

export const userSlice = persist(
	(set) => ({
		user: null,
		setUser: (param) => set(() => ({ user: param })),
		logout: () =>
			// auth.signOut();
			set(() => ({ user: null })),
	}),
	{ name: "user-webgis" }
);
