import { createBrowserRouter } from "react-router-dom";
import { About, Dashboard, EditMahasiswa, Home, Login } from "../../pages";
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
		path: "/about",
		element: <About />,
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
		path: "/update-mahasiswa/:id",
		element: (
			<PrivateRoute>
				<EditMahasiswa />
			</PrivateRoute>
		),
	},
]);
