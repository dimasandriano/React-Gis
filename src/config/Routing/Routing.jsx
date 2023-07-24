import { createBrowserRouter } from "react-router-dom";
import { CreateMahasiswa, Dashboard, Home, Login } from "../../pages";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
	},
	{
		path: "/create-mahasiswa",
		element: (
			<PrivateRoute>
				<CreateMahasiswa />
			</PrivateRoute>
		),
	},
]);
