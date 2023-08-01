import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../config/zustand/store";
import logo from "../../assets/logo.png";

function Navbar() {
	const [isToggleOpen, setIsToggleOpen] = useState(false);
	const user = useStore((state) => state.user);
	const logout = useStore((state) => state.logout);
	const navigate = useNavigate();
	return (
		<>
			<header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden mb-5">
				<div className=" relative mx-auto w-full px-6 ">
					<nav
						aria-label="main navigation"
						className="flex h-[4.5rem] items-stretch justify-between font-medium text-slate-700"
						role="navigation">
						<a
							onClick={() => navigate("/")}
							id="Web GIS"
							aria-label="Web GIS logo"
							aria-current="page"
							className="flex items-center gap-2 whitespace-nowrap py-3 text-2xl focus:outline-none lg:flex-1 font-bold"
							href="#">
							<img src={logo} alt="" className="w-40" />
						</a>
						<button
							className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
															isToggleOpen
																? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
																: ""
														}
            `}
							onClick={() => setIsToggleOpen(!isToggleOpen)}
							aria-expanded={isToggleOpen ? "true" : "false"}
							aria-label="Toggle navigation">
							<div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
							</div>
						</button>
						{/*      <!-- Navigation links --> */}
						<ul
							role="menubar"
							aria-label="Select page"
							className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
								isToggleOpen
									? "visible opacity-100 backdrop-blur-sm"
									: "invisible opacity-0"
							}`}>
							<li role="none" className="flex items-stretch">
								<a
									onClick={() => navigate("/")}
									role="menuitem"
									aria-haspopup="false"
									tabIndex="0"
									className="flex items-center cursor-pointer gap-1 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-5">
									<span>Home</span>
								</a>
							</li>

							<li role="none" className="flex items-stretch">
								<a
									onClick={() => navigate("/about")}
									role="menuitem"
									aria-current="page"
									aria-haspopup="false"
									tabIndex="0"
									className="flex items-center cursor-pointer gap-1 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-5">
									<span>About</span>
								</a>
							</li>
							<li className="flex items-center">
								{user === null ? (
									<Link to="/login">
										<button className="h-10 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-md whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none ">
											Login
										</button>
									</Link>
								) : (
									<div className="flex items-center gap-2">
										<Link to="/dashboard">
											<button className="h-10 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-md whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none ">
												Dashboard
											</button>
										</Link>
										{/* <Link to="/" */}
										<button
											onClick={logout}
											className="h-10 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-md whitespace-nowrap  bg-red-500  shadow-red-200 hover:bg-red-600 hover:shadow-sm hover:shadow-red-200 focus:bg-red-700 focus:shadow-sm focus:shadow-red-200 focus-visible:outline-none ">
											Logout
										</button>
										{/* </Link */}
									</div>
								)}
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}

export default Navbar;
