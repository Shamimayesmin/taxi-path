import React from "react";

const ChooseUs = () => {
	return (
		<div className="my-10">
			<h1 className="text-3xl font-bold text-center mb-5 underline underline-offset-4 text-yellow-500">
				<span className="text-black">WHY CHOOSE US ?</span>
			</h1>
			<p className="text-justify">
				When you’re looking for a good, reliable taxi service in Greater Perth,
				there are plenty of good reasons to choose us. We’ll highlight a few of
				those reasons below, but <br /> for the full list of benefits of using
				our services, go to Why choose Maxi Taxi Perth.
				<br />
			</p>
			<p className="text-justify">
				• No call-out fee: At Maxi Taxi Perth, we don’t charge a call-out fee
				(save $1.50) • Meter or fixed fare: Choose meter fare or opt for a set
				price to avoid surprises <br /> • Standard taxi rates:We provide premium
				services at standard taxi rates (normal tariffs) • Direct communication:
				Speak directly to the taxi driver, not just some phone operator •Arrival
				alerts: Get a text message when we’re 10 minutes away (free service) •
				Online taxi fare calculator: Estimate your taxi fare with our online
				calculator • Group transfers: Efficient transfers of large groups is one
				of our specialties
			</p>

            <div className="mx-auto w-44">
            <button className="btn bg-yellow-500 border-0 relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white text-white">View more</button>
            </div>

			
		</div>
	);
};

export default ChooseUs;
