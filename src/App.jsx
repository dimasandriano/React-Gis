import { RouterProvider } from "react-router-dom";
import { router } from "./config/Routing/Routing";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<div>
			<Toaster position="top-right" reverseOrder={false} />
			<RouterProvider router={router} />;
		</div>
	);
}

export default App;
