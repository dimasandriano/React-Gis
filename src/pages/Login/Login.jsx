import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../config/firebase/firebase";
import { toast } from "react-hot-toast";
import { useStore } from "../../config/zustand/store";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
	const setUser = useStore((state) => state.setUser);
	const user = useStore((state) => state.user);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				data.email,
				data.password
			);
			if (userCredential) {
				setUser(userCredential.user);
			}
			toast.success("Login berhasil");
			return navigate("/dashboard");
		} catch (error) {
			toast.error("Login gagal");
		}
	};
	useEffect(() => {
		if (user !== null) {
			navigate("/dashboard");
		}
	}, [user]);
	return (
		<div>
			<section className="bg-white ">
				<div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
					<form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
						<Link
							to="/"
							className="py-2 px-4 bg-emerald-400 rounded-md mb-2 inline-block text-white">
							Kembali
						</Link>

						<h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl ">
							sign In
						</h1>
						<div className="relative flex items-center mt-6">
							<span className="absolute">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 mx-3 text-gray-300 "
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</span>

							<input
								type="email"
								className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Email address"
								defaultValue="kambing@gmail.com"
								{...register("email", { required: true })}
							/>
						</div>

						<div className="relative flex items-center mt-4">
							<span className="absolute">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 mx-3 text-gray-300 "
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									/>
								</svg>
							</span>

							<input
								type="password"
								className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Password"
								{...register("password", { required: true })}
							/>
						</div>
						{errors.password && (
							<span className="text-xs text-red-500 font-medium">
								Mohon isi passwordnya
							</span>
						)}
						<div className="mt-6">
							<button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
								Sign in
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}

export default Login;
