import Backtheme from "./Components/Backtheme";
import Define from "./Components/Define";
import Sidebar from "./Components/Sidebar";
import Info from "./Components/Info";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import {
	Greedy_Approach,
	Knapsack,
	Huffmann,
} from "./Components/Greedy_Approach";
import {
	Services,
	ServicesOne,
	ServicesTwo,
	ServicesThree,
} from "./Components/Services";
import {
	Events,
	EventsOne,
	EventsTwo,
} from "./Components/Events";
import Contact from "./Components/Contact";
import Support from "./Components/Support";

const App=()=>{
	return (
		<Router>
			
			<Sidebar />
			<Routes>
				<Route
					path="/about-us"
					element={<Greedy_Approach />}
				/>
				<Route
					path="/about-us/aim"
					element={<Knapsack />}
				/>
				<Route
					path="/about-us/vision"
					element={<Huffmann />}
				/>
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="/services/services1"
					element={<ServicesOne />}
				/>
				<Route
					path="/services/services2"
					element={<ServicesTwo />}
				/>
				<Route
					path="/services/services3"
					element={<ServicesThree />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/events"
					element={<Events />}
				/>
				<Route
					path="/events/events1"
					element={<EventsOne />}
				/>
				<Route
					path="/events/events2"
					element={<EventsTwo />}
				/>
				<Route
					path="/support"
					element={<Support />}
				/>
			</Routes>
			<Backtheme/>
			<Define/>
			<Info/>
		</Router>
	);
}

export default App;




