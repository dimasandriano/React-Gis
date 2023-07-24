import { Navbar } from "../component";

function RootLayout({ children }) {
	return (
		<div>
			<Navbar />
			<div className="mx-auto w-full px-6 lg:max-w-5xl xl:max-w-7xl">
				{children}
			</div>
		</div>
	);
}

export default RootLayout;
