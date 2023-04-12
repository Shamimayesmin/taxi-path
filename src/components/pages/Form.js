import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Form = () => {
	const img =
		"https://flysbn.com/wp-content/uploads/2019/09/South-Bend-Family-Friendly-1024x683-1024x683.jpg";
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const handleBookTaxi = (data) => {
		console.log(data);
		const studentInfo = {
			name: data.name,
			email: data.email,
			travelfrom: data.travelfrom,
			travelto: data.travelto,
			date: data.date,
			time: data.time,
			number: data.number,
			message: data.message,
		};
		toast.success("Booking Information submited");
		console.log(studentInfo);
	};

	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${img})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover', height: "100vh",
				}}
				className="h-[800px] flex justify-center items-center rounded-md"
			>
				<div className="w-2/3 overflow-hidden mx-auto rounded-lg p-7 shadow-2xl backdrop-blur-lg bg-white/30">
					<h2 className="text-2xl text-center font-bold">Book a Taxi:</h2>
					<form onSubmit={handleSubmit(handleBookTaxi)}>
						<div className="flex gap-4 mx-auto flex-col lg:flex-row">
							<div className="form-control w-full max-w-md">
								<label className="label">
									<span className="label-text">Name</span>
								</label>

								<input
									{...register("name", { required: "Name is required" })}
									type="text"
									placeholder="Type here"
									className="input input-bordered w-full max-w-lg"
								/>
								{errors.name && (
									<p className="text-red-500">{errors.name?.message}</p>
								)}
							</div>
							<div className="form-control w-full max-w-md">
								<label className="label">
									<span className="label-text">Email</span>
								</label>

								<input
									{...register("email", { required: "Email is required" })}
									type="email"
									placeholder="Type here"
									className="input input-bordered w-full max-w-lg"
								/>
								{errors.email && (
									<p className="text-red-500">{errors.email?.message}</p>
								)}
							</div>
						</div>

						<div className="flex gap-4 mx-auto flex-col lg:flex-row">
							<div className="form-control w-full max-w-lg">
								<label className="label">
									<span className="label-text">Travel From</span>
								</label>

								<input
									{...register("travelfrom", { required: "Place is required" })}
									type="text"
									placeholder="Type here"
									className="input input-bordered w-full max-w-lg"
								/>

								{errors.travelfrom && (
									<p className="text-red-500">{errors.travelfrom?.message}</p>
								)}
							</div>
							<div className="form-control w-full max-w-lg">
								<label className="label">
									<span className="label-text">Travel To</span>
								</label>

								<input
									{...register("travelto", {
										required: "Travel location is required",
									})}
									type="text"
									placeholder="Type here"
									className="input input-bordered w-full max-w-lg"
								/>
								{errors.travelto && (
									<p className="text-red-500">{errors.travelto?.message}</p>
								)}
							</div>
						</div>
						<div className="flex gap-4 mx-auto flex-col lg:flex-row">
							<div className="form-control w-full max-w-lg">
								<label className="label">
									<span className="label-text"> Date of Travel</span>
								</label>

								<input
									{...register("date", {
										required: " Travel date is required",
									})}
									type="date"
									placeholder="Type here"
									className="input input-bordered w-full max-w-lg"
								/>

								{errors.date && (
									<p className="text-red-500">{errors.date?.message}</p>
								)}
							</div>
							<div className="form-control w-full max-w-lg">
								<label className="label">
									<span className="label-text"> Time of Travel</span>
								</label>

								<input
									{...register("time", { required: "Travel time is required" })}
									type="time"
									placeholder="Type here"
									className="input input-bordered w-full max-w-lg"
								/>
								{errors.time && (
									<p className="text-red-500">{errors.time?.message}</p>
								)}
							</div>
						</div>
						<div className="flex gap-4 mx-auto flex-col lg:flex-row">
							<div className="form-control w-full max-w-lg">
								<label className="label">
									<span className="label-text"> Phone Number</span>
								</label>

								<input
									{...register("number", {
										required: " Phone number is required",
									})}
									type="number"
									placeholder="Type here"
									className="input input-bordered w-full max-w-lg"
								/>

								{errors.number && (
									<p className="text-red-500">{errors.number?.message}</p>
								)}
							</div>
							<div className="form-control w-full max-w-lg">
								<label className="label">
									<span className="label-text"> Message</span>
								</label>

								<textarea
									{...register("message", {
										required: "Travel Message is required",
									})}
									type="text"
									placeholder="Type here"
									className="input input-bordered w-full max-w-lg p-5"
								/>
								

								<input
									className="btn bg-yellow-600 w-36 mb-4 mt-4"
									value="Submit"
									type="submit"
								/>
							</div>
						</div>
					</form>
				</div>
			</div>

			
		</div>
	);
};

export default Form;
