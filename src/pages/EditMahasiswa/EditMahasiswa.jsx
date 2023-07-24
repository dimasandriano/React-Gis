import { useForm } from "react-hook-form";
import { useStore } from "../../config/zustand/store";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";

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
					<div className="relative my-6">
						<input
							id="umur"
							type="number"
							placeholder="umur"
							defaultValue={mahasiswaById[0].umur}
							{...register("umur", { required: true })}
							className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
						/>
						<label
							htmlFor="id-b03"
							className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
							Umur
						</label>
						{errors.umur && (
							<small className="absolute flex w-full justify-between px-4 py-1 text-xs text-red-400 transition peer-invalid:text-pink-500">
								<span>Text field with helper text</span>
							</small>
						)}
					</div>
					<div className="relative my-6">
						<input
							id="latitude"
							type="text"
							placeholder="latitude"
							defaultValue={mahasiswaById[0].latitude}
							{...register("latitude", { required: true })}
							className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
						/>
						<label
							htmlFor="id-b03"
							className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
							Latitude
						</label>
						{errors.latitude && (
							<small className="absolute flex w-full justify-between px-4 py-1 text-xs text-red-400 transition peer-invalid:text-pink-500">
								<span>Text field with helper text</span>
							</small>
						)}
					</div>
					<div className="relative my-6">
						<input
							id="longitude"
							type="text"
							placeholder="longitude"
							defaultValue={mahasiswaById[0].longitude}
							{...register("longitude", { required: true })}
							className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
						/>
						<label
							htmlFor="id-b03"
							className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
							Longitude
						</label>
						{errors.longitude && (
							<small className="absolute flex w-full justify-between px-4 py-1 text-xs text-red-400 transition peer-invalid:text-pink-500">
								<span>Text field with helper text</span>
							</small>
						)}
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
