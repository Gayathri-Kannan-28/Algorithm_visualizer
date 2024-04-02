import Backtheme from "./Components/Backtheme";
import Define from "./Components/Define";
import Sidebar from "./Components/Sidebar";
import Info from "./Components/Info";
import Contacts from "./Components/Contacts";

const App=()=>{
	return (
				
		//<Router>
			
			
		// 	<Routes>
		// 		<Route
		// 			path="/about-us"
		// 			element={<Greedy_Approach />}
		// 		/>
		// 		<Route
		// 			path="/about-knapsack"
		// 			element={<Knapsack />}
		// 		/>
		// 		<Route
		// 			path="/about-huffmann"
		// 			element={<Huffmann />}
		// 		/>
		// 		<Route
		// 			path="/services"
		// 			element={<Services />}
		// 		/>
		// 		<Route
		// 			path="/services/services1"
		// 			element={<ServicesOne />}
		// 		/>
		// 		<Route
		// 			path="/services/services2"
		// 			element={<ServicesTwo />}
		// 		/>
		// 		<Route
		// 			path="/services/services3"
		// 			element={<ServicesThree />}
		// 		/>
		// 		<Route
		// 			path="/contact"
		// 			element={<Contact />}
		// 		/>
		// 		<Route
		// 			path="/events"
		// 			element={<Events />}
		// 		/>
		// 		<Route
		// 			path="/events/events1"
		// 			element={<EventsOne />}
		// 		/>
		// 		<Route
		// 			path="/events/events2"
		// 			element={<EventsTwo />}
		// 		/>
		// 		<Route
		// 			path="/support"
		// 			element={<Support />}
		// 		/>
		// 		<Route
		// 			path="/support"
		// 			element={<Support />}
		// 		/>
		// 	</Routes>
			//</Router>
		<>
		<Sidebar/>

			<Backtheme/>
			<Define/>
		
			<Contacts/>
			<Info/>
	
		</>
	);
}

export default App;