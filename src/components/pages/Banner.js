import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// https://i.ibb.co/Ybv8VxJ/bmwx1.jpg
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
// import "./banner.css"
//Autoplay,
import {  Pagination, Navigation } from "swiper";

const Banner = () => {
	// const img1 = "https://i.ibb.co/Ybv8VxJ/bmwx1.jpg"
	const img1 = "https://cdn.getyourguide.com/img/tour/6193914f7e6dd.jpeg/97.jpg";
		
	const img2 = "https://www.kids-around-perth.com/images/maxitaxiperthcapsule.jpg";
		
	const img3 = "https://www.maxitaxiperth.com.au/assets/uploads/service/090114900_1598807226.jpg";
	const img4 = "https://i0.wp.com/www.perthmaxicabs.com.au/wp-content/uploads/2018/10/Perth-Group-Transfers-Maxi-Service.jpg?fit=1349%2C625&ssl=1";
		
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				// centeredSlides={true}
				loop={true}
				pagination={{
					clickable: true,
				}}
				// autoplay={{
				// 	delay: 2500,
				// 	disableOnInteraction: false,
				// }}
				navigation={true}
				modules={[ Pagination, Navigation]}
				className="mySwiper w-full"
			>
				<SwiperSlide>
					<div className="relative">
						<img
							className="h-[600px] w-full brightness-50"
							src={img1}
							alt="/"
						/>
						<div className="absolute top-[25%] left-[17rem]">
							<h3 data-aos="fade-right" className="text-4xl font-extrabold">
								{" "}
								<span className="text-yellow-500 h-6">|</span>
								<span className="text-white">AIRPORT TRANSFERS</span>
							</h3>
							<p
								data-aos="fade-left"
								className="text-2xl font-serif text-white font-bold mt-2"
							>
								<span className="text-3xl">|</span>
								TAXI TO/FROM PERTH AIRPORT - NO SURCHARGE.NO CALL OUT FEE
							</p>
                            <div className=" justify-end items-end">
								<button className="btn bg-yellow-600 rounded-xl text-white">
									Read more
								</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<img className="h-[600px] w-full brightness-90" src={img2} alt="/" />
						<div className="absolute top-[25%] left-[30rem]">
							<h3
								data-aos="fade-right"
								className="text-4xl font-bold p-4 text-white text-right"
							>
								BABY CAPSULE
								<span className="text-yellow-500">|</span>
							</h3>
							<p
								data-aos="fade-left"
								className="text-2xl font-serif text-white text-right font-bold"
							>
								TRAVELLING WITH BUB ? BOOK A TAXI WITH A BABY SEAT.
								<span>|</span>
							</p>
							{/* <div className="justify-end w-5 content-end items-end right-80">
								<button className="btn bg-yellow-600 rounded-xl text-white">
									Read more
								</button>
							</div> */}
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<img className="h-[600px] w-full brightness-50" src={img3} alt="/" />
						<div className="absolute text-white top-[35%] left-[25rem]">
							<h3
								data-aos="fade-right"
								className="text-4xl font-bold text-center"
							>
								WEDDING TRANSPORT
							</h3>
							<p data-aos="fade-left" className="text-2xl font-serif p-3 mt-3">
                            COMFORTABLE TRANSFERS FOR ALL YOUR WEDDING GUESTS

							</p>
                            <div className="w-40 mx-auto">
                            <button className="btn bg-yellow-600">Read more</button>
                            </div>
						</div>
                      
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<img className="h-[600px] w-full brightness-50" src={img4} alt="/" />
						<div className="absolute text-white top-[35%] left-[25rem]">
							<h3
								data-aos="fade-right"
								className="text-4xl font-bold text-center"
							>
								MAXI TAXI
							</h3>
							<p data-aos="fade-left" className="text-2xl font-serif p-3 mt-3">
                            7/10/13 SEATERS FOR GROUP TRANSFERS , BIKES , WHEELCHAIRS.

							</p>
                            <div className="w-40 mx-auto">
                            <button className="btn bg-yellow-600">Read more</button>
                            </div>
						</div>
                      
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Banner;
