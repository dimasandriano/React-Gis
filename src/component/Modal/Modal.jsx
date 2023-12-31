import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Modal({ text, textdisable, judul, disable, children }) {
	const [isShowing, setIsShowing] = useState(false);
	const wrapperRef = useRef(null);
	useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setIsShowing(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [wrapperRef]);
	return (
		<>
			{disable ? (
				<button
					disabled
					className="mb-3 py-2.5 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
					<span>{textdisable}</span>
				</button>
			) : (
				<button
					onClick={() => setIsShowing(true)}
					className="mb-3 py-2.5 whitespace-nowrap rounded bg-emerald-500 px-4 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
					<span>{text}</span>
				</button>
			)}

			{isShowing && typeof document !== "undefined"
				? ReactDOM.createPortal(
						<div
							className="fixed top-0 left-0 z-20 flex min-h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
							aria-labelledby="header-1a content-1a"
							aria-modal="true"
							tabIndex="-1"
							role="dialog">
							{/*    <!-- Modal --> */}
							<div
								className="flex  w-11/12 max-w-2xl flex-col gap-6 rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
								ref={wrapperRef}
								id="modal"
								role="document">
								{/*        <!-- Modal header --> */}
								<header id="header-1a" className="flex items-center gap-4">
									<h3 className="flex-1 text-xl font-medium text-slate-700">{judul}</h3>
									<button
										onClick={() => setIsShowing(false)}
										className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
										aria-label="close dialog">
										<span className="relative only:-mx-5">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="1.5"
												role="graphics-symbol"
												aria-labelledby="title-79 desc-79">
												<title id="title-79">Icon title</title>
												<desc id="desc-79">A more detailed description of the icon</desc>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</span>
									</button>
								</header>
								{/*        <!-- Modal body --> */}
								<div id="content-1a" className="flex-1 overflow-hidden">
									{children}
								</div>
							</div>
						</div>,
						document.body
				  )
				: null}
		</>
	);
}
