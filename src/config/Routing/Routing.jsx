import { createBrowserRouter } from "react-router-dom";
import {
	CreateMahasiswa,
	Dashboard,
	Home,
	Login,
	UpdateMahasiswa,
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
				<UpdateMahasiswa />
			</PrivateRoute>
		),
	},
]);
