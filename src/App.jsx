import { RouterProvider } from "react-router-dom";
import { router } from "./config/Routing/Routing";

function App() {
	return <RouterProvider router={router} />;
}

export default App;
