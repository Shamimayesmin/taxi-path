import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/router";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="max-w-[1500px] mx-auto">
			<Toaster></Toaster>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
