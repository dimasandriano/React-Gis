import { useForm } from "react-hook-form";
import { useStore } from "../../config/zustand/store";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../../component";

function EditMahasiswa() {
	const { id } = useParams();
	const updateMahasiswa = useStore((state) => state.updateMahasiswa);
	const mahasiswa = useStore((state) => state.mahasiswa);
	const mahasiswaById = mahasiswa.filter((item) => item.id === id);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data) => {
		try {
			await updateMahasiswa(mahasiswaById[0].id, data);
			toast.success("Berhasil mengedit data mahasiswa");
		} catch (error) {
			toast.error("Gagal mengedit data mahasiswa");
		}
	};

	return (
		<div>
			<Navbar />
			<div className="mx-auto w-full px-6 lg:max-w-5xl xl:max-w-7xl">
				<Link to="/dashboard">
					<button className="py-2 px-4 text-white bg-emerald-500 rounded-lg mb-3">
						Kembali
					</button>
				</Link>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="relative my-6">
						<input
							id="nama"
							type="text"
							placeholder="your name"
							defaultValue={mahasiswaById[0].nama}
							{...register("nama", { required: true })}
							className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
						/>
						<label
							htmlFor="id-b03"
							className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
							Nama
						</label>
						{errors.nama && (
							<small className="absolute flex w-full justify-between px-4 py-1 text-xs text-red-400 transition peer-invalid:text-pink-500">
								<span>Text field with helper text</span>
							</small>
						)}
					</div>
					<div className="relative my-3">
						<input
							id="nim"
							type="number"
							placeholder="nim"
							defaultValue={mahasiswaById[0].nim}
							{...register("nim", { required: true })}
							className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
						/>
						<label
							htmlFor="nim"
							className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
							NIM
						</label>
					</div>
					<div className="relative my-3">
						<select
							id="gender"
							name="gender"
							{...register("gender", { required: true })}
							placeholder="gender"
							defaultValue={mahasiswaById[0].gender}
							className="relative w-full h-10 px-4 text-sm transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-emerald-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400">
							<option value="" disabled selected></option>
							<option value="laki">Laki-laki</option>
							<option value="perempuan">Perempuan</option>
						</select>
						<label
							htmlFor="gender"
							className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
							Jenis Kelamin
						</label>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-labelledby="title-04 description-04"
							role="graphics-symbol">
							<title id="title-04">Arrow Icon</title>
							<desc id="description-04">Arrow icon of the select list.</desc>
							<path
								fillRule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="relative my-3">
						<input
							id="ttl"
							type="text"
							placeholder="Tempat Tanggal Lahir"
							defaultValue={mahasiswaById[0].ttl}
							{...register("ttl", { required: true })}
							className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
						/>
						<label
							htmlFor="ttl"
							className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
							Tempat Tanggal Lahir
						</label>
					</div>
					<div className="relative my-3">
						<select
							id="prodi"
							name="prodi"
							placeholder="Prodi"
							defaultValue={mahasiswaById[0].prodi}
							{...register("prodi", { required: true })}
							className="relative w-full h-10 px-4 text-sm transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-emerald-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400">
							<option value="" disabled selected></option>
							<option value="ti">Teknik Informatika</option>
						</select>
						<label
							htmlFor="prodi"
							className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
							Prodi
						</label>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-labelledby="title-04 description-04"
							role="graphics-symbol">
							<title id="title-04">Arrow Icon</title>
							<desc id="description-04">Arrow icon of the select list.</desc>
							<path
								fillRule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="relative my-3">
						<select
							id="fakultas"
							name="fakultas"
							placeholder="Fakultas"
							defaultValue={mahasiswaById[0].fakultas}
							{...register("fakultas", { required: true })}
							className="relative w-full h-10 px-4 text-sm transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-emerald-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400">
							<option value="" disabled selected></option>
							<option value="fakultasti">Teknologi Informasi</option>
						</select>
						<label
							htmlFor="fakultas"
							className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
							Fakultas
						</label>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-labelledby="title-04 description-04"
							role="graphics-symbol">
							<title id="title-04">Arrow Icon</title>
							<desc id="description-04">Arrow icon of the select list.</desc>
							<path
								fillRule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="relative my-3">
						<input
							id="foto"
							type="text"
							placeholder="Link Pass Foto"
							defaultValue={mahasiswaById[0].foto}
							{...register("foto", { required: true })}
							className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
						/>
						<label
							htmlFor="foto"
							className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
							Link Pass Foto
						</label>
					</div>
					<div className="relative my-3">
						<input
							id="longitude"
							type="text"
							placeholder="longitude"
							defaultValue={mahasiswaById[0].longitude}
							{...register("longitude", { required: true })}
							className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
						/>
						<label
							htmlFor="longitude"
							className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
							Longitude
						</label>
					</div>
					<div className="relative my-3">
						<input
							id="latitude"
							type="text"
							placeholder="latitude"
							defaultValue={mahasiswaById[0].latitude}
							{...register("latitude", { required: true })}
							className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
						/>
						<label
							htmlFor="latitude"
							className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
							Latitude
						</label>
					</div>
					<button className="py-2 px-4 text-white bg-emerald-500 rounded-lg">
						Update
					</button>
				</form>
			</div>
		</div>
	);
}

export default EditMahasiswa;
