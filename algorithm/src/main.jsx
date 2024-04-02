import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom";


import Backtheme from "./Components/Backtheme";
import Define from "./Components/Define";
import Sidebar from "./Components/Sidebar";
import Info from "./Components/Info";
import Contacts from "./Components/Contacts";
import Knapsack from "./Components/Knapsack";
import Huffmann from "./Components/Huffmann";

import 	{Greedy_Approach} from "./Components/Greedy_Approach";
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




const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
		{
					path:"/about-us",
					element:<Greedy_Approach />
    },
				
				{
					path:"/about-knapsack",
					element:<Knapsack />
        },
			
				{
					path:"/about-huffmann",
					element:<Huffmann />
        },
				
			{
					path:"/services",
					element:<Services />
      },
				
				{
					path:"/services/services1",
					element:<ServicesOne />
    },
		
		{
					path:"/services/services2",
					element:<ServicesTwo />
    },
			
					{
            path:"/services/services3",
					element:<ServicesThree />
    },
				{
					path:"/contact",
					element:<Contact />
    },
				{
					path:"/events",
					element:<Events />
        },
			
				{				path:"/events/events1",
					element:<EventsOne />
},
				{
	
					path:"/events/events2",
					element:<EventsTwo />
        },
		
					{
          path:"/support",
					element:<Support />
          }
			
			
		
   ])
		










   ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
