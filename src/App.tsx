import React, {lazy, Suspense} from 'react';
import Main from "@/Pages/main/Main";
import Directions from "@/Pages/directions/Directions";
import Subdirections from "@/Pages/subdirections/Subdirections";
import '@root/style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Direction = lazy(() => import("@/Pages/directions/Directions"));
const Subdirection = lazy(() => import("@/Pages/subdirections/Subdirections"));
const Results = lazy(() => import("@/Pages/results/Results"));

const url = 'http://localhost:4000/v1/courses';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route
					path='/directions'
					element={<Suspense fallback={null}><Direction /></Suspense>}
				/>
				<Route
					path='/subdirections'
					element={<Suspense fallback={null}><Subdirection /></Suspense>}
				/>
				<Route
					path='/results'
					element={<Suspense fallback={null}><Results /></Suspense>}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;