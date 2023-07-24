export const userSlice = (set) => ({
	user: null,
	setUser: (param) => set(() => ({ user: param })),
	logout: () => set(() => ({ user: {} })),
});
