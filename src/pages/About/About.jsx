import { Navbar } from "../../component";
import donny from "../../assets/donny.jpg";
import fahmi from "../../assets/fahmi.jpg";
import indra from "../../assets/indra.jpg";
import dimas from "../../assets/dimas.jpg";
import elda from "../../assets/elda.jpg";

function About() {
	return (
		<div>
			<Navbar />

			<section>
				<div className="container mx-auto px-[100px] text-center ">
					<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
						<div className="col-span-4 md:col-span-8 lg:col-span-12 flex justify-center mb-10">
							<p>
								<h1 className="text-xl font-medium text-slate-700">
									Progam Aplikasi Sistem Informasi Geografi
								</h1>
								Universitas islam balitar khususnya jurusan teknik informatika
								membutuhkan data tempat tinggal mahasiswa secara efisien dan
								terstruktur. universitas ini memiliki jumlah mahasiswa yang besar dan
								tersebar diberbagai lokasi. Kami berharap dapat mengintegrasikan data
								geografis dengan data mahasiswa. Data-data seperti alamat, koordinat
								geografis, dan atribut lainnya akan disimpan secara terstruktur dalam
								basis data yang dapat diakses dan diperbarui dengan mudah.
								<br />
								Dengan memetakan informasi tempat tinggal mahasiswa ke dalam peta
								interaktif, universitas dapat memperoleh informasi yang lebih mendalam
								mengenai sebaran geografis mahasiswa. yang dapat digunakan untuk
								menentukan lokasi efektif dari sebuah kegiatan, juga dapat bermanfaat
								dalam hal menentukan strategi promosi berdasarkan peta sebaran
								mahasiswa.
								<br />
								Dalam menghadapi tantangan tersebut, kami memutuskan untuk
								mengimplementasikan Sistem informasi Geografis Pemetaan Tempat Tinggal
								Mahasiswa Universitas Islam Balitar Jurusan Teknik Informatika 2020
								tujuan utama dari sistem ini adalah untuk memberikan solusi teknologi
								yang efisien dan inovatif dalam pengelolaan data tempat tinggal
								mahasiswa berdasarkan informasi geografis.
								<h1 className="text-xl font-medium text-slate-700">
									Team Pengembang Aplikasi
								</h1>
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div>
					<section>
						<div className="container px-6 m-auto mb-3">
							<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
								<div className="col-span-4 lg:col-span-3 flex justify-center">
									<img
										src={fahmi}
										alt="Muhammad Fahmi Ahsan"
										title="Muhammad Fahmi Ahsan"
										width="180"
										height="48"
										className="max-w-full rounded-full"
									/>
								</div>

								<div className="col-span-4 lg:col-span-3">
									<div>
										<h3 className="text-xl font-medium text-slate-700">
											Muhammad Fahmi Ahsan
										</h3>
									</div>
									<div className="flex items-center self-center text-emerald-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
										<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
											<h4 className="w-full truncate text-base text-slate-700 px-1">
												20104410010
											</h4>
										</div>
									</div>

									<a
										href="https://www.instagram.com/fahmiahsan_/"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => console.log("Link clicked!")}>
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-instagram">
												<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
												<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
												<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													fahmiahsan_
												</h4>
											</div>
										</div>
									</a>

									<a href="mailto:fahmiahsan00@gmail.com">
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-mail">
												<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
												<polyline points="22,6 12,13 2,6"></polyline>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													fahmiahsan00@gmail.com
												</h4>
											</div>
										</div>
									</a>
								</div>
								<div className="col-span-4 lg:col-span-3 flex justify-center">
									<img
										src={dimas}
										alt="Dimas Andriano Herlambang"
										title="Dimas Andriano Herlambang"
										width="180"
										height="48"
										className="max-w-full rounded-full"
									/>
								</div>

								<div className="col-span-4 lg:col-span-3">
									<div>
										<h3 className="text-xl font-medium text-slate-700">
											Dimas Andriano Herlambang
										</h3>
									</div>
									<div className="flex items-center self-center text-emerald-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
										<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
											<h4 className="w-full truncate text-base text-slate-700 px-1">
												20104410071
											</h4>
										</div>
									</div>

									<a
										href="https://www.instagram.com/dimas.andriano.h/"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => console.log("Link clicked!")}>
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-instagram">
												<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
												<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
												<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													dimas.andriano.h
												</h4>
											</div>
										</div>
									</a>

									<a href="mailto:dimas.andriano.h@gmail.com">
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-mail">
												<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
												<polyline points="22,6 12,13 2,6"></polyline>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													dimas.andriano.h@gmail.com
												</h4>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>

				<div>
					<section>
						<div className="container px-6 m-auto mb-3">
							<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
								<div className="col-span-4 lg:col-span-3 flex justify-center">
									<img
										src={elda}
										alt="Elda Vina F. R."
										title="Elda Vina F. R."
										width="180"
										height="48"
										className="max-w-full rounded-full"
									/>
								</div>

								<div className="col-span-4 lg:col-span-3">
									<div>
										<h3 className="text-xl font-medium text-slate-700">
											Elda Vina F. R.
										</h3>
									</div>
									<div className="flex items-center self-center text-emerald-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
										<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
											<h4 className="w-full truncate text-base text-slate-700 px-1">
												20104410043
											</h4>
										</div>
									</div>

									<a
										href="https://www.instagram.com/eldaav_/"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => console.log("Link clicked!")}>
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-instagram">
												<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
												<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
												<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													eldaav_
												</h4>
											</div>
										</div>
									</a>

									<a href="mailto:eldaaavina@gmail.com">
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-mail">
												<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
												<polyline points="22,6 12,13 2,6"></polyline>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													eldaaavina@gmail.com
												</h4>
											</div>
										</div>
									</a>
								</div>
								<div className="col-span-4 lg:col-span-3 flex justify-center">
									<img
										src={indra}
										alt="Indra Kurniawan"
										title="Indra Kurniawan"
										width="180"
										height="48"
										className="max-w-full rounded-full"
									/>
								</div>

								<div className="col-span-4 lg:col-span-3">
									<div>
										<h3 className="text-xl font-medium text-slate-700">
											Indra Kurniawan
										</h3>
									</div>
									<div className="flex items-center self-center text-emerald-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
										<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
											<h4 className="w-full truncate text-base text-slate-700 px-1">
												20104410004
											</h4>
										</div>
									</div>

									<a
										href="https://www.instagram.com/indra.kurniawan656/"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => console.log("Link clicked!")}>
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-instagram">
												<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
												<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
												<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													indra.kurniawan656
												</h4>
											</div>
										</div>
									</a>

									<a href="mailto:indrakurniawan2133@gmail.com">
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-mail">
												<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
												<polyline points="22,6 12,13 2,6"></polyline>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													indrakurniawan2133@gmail.com
												</h4>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>

				<div>
					<section>
						<div className="container px-96 m-auto mb-3">
							<div className="grid grid-cols-4 gap-0 md:grid-cols-8 lg:grid-cols-12">
								<div className="col-span-4 lg:col-span-6 flex justify-center">
									<img
										src={donny}
										alt="Donny Damara Nanda Putra Arifin"
										title="Donny Damara Nanda Putra Arifin"
										width="180"
										height="180"
										className="max-w-full rounded-full"
									/>
								</div>

								<div className="col-span-4 lg:col-span-6">
									<div>
										<h3 className="text-xl font-medium text-slate-700">
											Donny Damara Nanda Putra Arifin
										</h3>
									</div>
									<div className="flex items-center self-center text-emerald-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
										<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
											<h4 className="w-full truncate text-base text-slate-700 px-1">
												20104410078
											</h4>
										</div>
									</div>

									<a
										href="https://www.instagram.com/donny_arifin01/"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => console.log("Link clicked!")}>
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-instagram">
												<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
												<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
												<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													donny_arifin01
												</h4>
											</div>
										</div>
									</a>

									<a href="mailto:donnydamara120501@gmail.com">
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-mail">
												<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
												<polyline points="22,6 12,13 2,6"></polyline>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													donnydamara120501@gmail.com
												</h4>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
export default About;
