import { createBrowserRouter } from "react-router-dom";
import {
	CreateMahasiswa,
	Dashboard,
	EditMahasiswa,
	Home,
	Login,
} from "../../pages";
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
	{
		path: "/update-mahasiswa/:id",
		element: (
			<PrivateRoute>
				<EditMahasiswa />
			</PrivateRoute>
		),
	},
]);
