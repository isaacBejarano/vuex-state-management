import { createStore } from "vuex";

export default createStore({
	state: {
		count: 0,
	},
	// sync
	mutations: {
		setCount(state, payload: number) {
			state.count = payload;
		},
	},
	// async
	actions: {
		// API REST fetch, etc.
		// async setCountAsync(state, payload: number) {
		// 	const res = await fetch(url, headers);
		// 	const data = await res.json();
		// 	state.commit("setCountAsync", data.number);
		// },
	},
	// modules
	modules: {},
	// getters
	getters: {
		getCount: state => state.count,
		// getState: state => state,
	},
});
