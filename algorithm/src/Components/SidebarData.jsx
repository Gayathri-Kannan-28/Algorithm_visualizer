import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";




export const SidebarData = [
	{
		title: "Greedy_Approach",
		path: "/about-us",
		icon: <IoIcons.IoIosPaper />,
			
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Knapsack",
				path: "/about-us/aim",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Huffmann",
				path: "/about-us/vision",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Brand and Bound",
		path: "/services",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "N Queens",
				path: "/services/services1",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Assignment Problem",
				path: "/services/services2",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Subset",
				path: "/services/services3",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Contact",
		path: "/contact",
		icon: <FaIcons.FaPhone />,
	},
	{
		title: "Events",
		path: "/events",
		icon: <FaIcons.FaEnvelopeOpenText />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Event 1",
				path: "/events/events1",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Event 2",
				path: "/events/events2",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Support",
		path: "/support",
		icon: <IoIcons.IoMdHelpCircle />,
	},
];