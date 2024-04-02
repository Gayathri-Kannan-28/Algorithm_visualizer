import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";




export const SidebarData = [
	{
		title: "KNAPSACK",
		path: "/about-knapsack",
		
			
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		// subNav: [
		// 	{
		// 		title: "Knapsack",
		// 		path: "/about-knapsack",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},
		// 	{
		// 		title: "Huffmann",
		// 		path: "/about-huffmann",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},
		// ],
	},
	{
		title: "TRAVELLING SALESMAN",
		path: "/ts",
		// icon: <IoIcons.IoIosPaper />,
		// iconClosed: <RiIcons.RiArrowDownSFill />,
		// iconOpened: <RiIcons.RiArrowUpSFill />,

		// subNav: [
		// 	{
		// 		title: "N Queens",
		// 		path: "/services/services1",
		// 		icon: <IoIcons.IoIosPaper />,
		// 		cName: "sub-nav",
		// 	},
		// 	{
		// 		title: "Assignment Problem",
		// 		path: "/services/services2",
		// 		icon: <IoIcons.IoIosPaper />,
		// 		cName: "sub-nav",
		// 	},
		// 	{
		// 		title: "Subset",
		// 		path: "/services/services3",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},
		// ],
	},
	{
		title: "HUFFMANN",
		path: "/huffmann",
		//icon: <FaIcons.FaPhone />,
	},
	{
		title: "SUBSET",
		path: "/subset",
		// //icon: <FaIcons.FaEnvelopeOpenText />,

		// iconClosed: <RiIcons.RiArrowDownSFill />,
		// iconOpened: <RiIcons.RiArrowUpSFill />,

		// subNav: [
		// 	{
		// 		title: "Event 1",
		// 		path: "/events/events1",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},
		// 	{
		// 		title: "Event 2",
		// 		path: "/events/events2",
		// 		icon: <IoIcons.IoIosPaper />,
		// 	},
		// ],
	},
	{
		title: "N QUEENS",
		path: "/queens",
		//icon: <IoIcons.IoMdHelpCircle />,
	},
];