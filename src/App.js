import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/router";
import { Toaster } from "react-hot-toast";

function App() {
	<script>AOS.init();</script>;
	return (
		<div className="max-w-[1500px] mx-auto">
			<Toaster></Toaster>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
