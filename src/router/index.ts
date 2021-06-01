import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Uncommunicated from "../views/Uncommunicated.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Uncommunicated",
		component: Uncommunicated,
	},
	{
		path: "/event-driven",
		name: "Event Driven",
		component: () => import("../views/EventDriven.vue"), // lazy
	},
	{
		path: "/state-driven",
		name: "StateDriven",
		component: () => import("../views/StateDriven.vue"), // lazy
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
