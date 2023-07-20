import { createBrowserRouter } from "react-router-dom";
import { Login } from "../../pages";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Dashboard</div>,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);
