import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom";


import Knapsack from "./Components/Knapsack";
import Huffmann from "./Components/Huffmann";
import TS from "./Components/TS.jsx";
import Subset from "./Components/Subset.jsx"

import 	{Greedy_Approach} from "./Components/Greedy_Approach.jsx";





const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
   },
		{
					path:"/about-knapsack",
					element:<Knapsack/>
    },
				
				
			
				{
					path:"huffmann",
					element:<Huffmann />
        },
				
			{
					path:"/ts",
					element:<TS />
      },
				
				
			
			
				{
					path:"/subset",
					element:<Subset />
    },
				{
					path:"/queens",
					element:<Greedy_Approach />
        },
			
		
		
			
		
   ])
		










   ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
