import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import StateDriven from "../views/StateDriven.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "State Driven",
		component: StateDriven,
	},
	{
		path: "/event-driven",
		name: "Event Driven",
		component: () => import("../views/EventDriven.vue"), // lazy
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
