<template>
	<section class="parent3">
		<h3>Parent Component</h3>
		<h4>Parent State: {{ state1 }}</h4>

		<Counter @emit-counter="counter(...$event)" :stateInit="state_init"></Counter>

		<!-- Child -->
		<Child3 :stateInit="state_init"></Child3>
	</section>
</template>

<script lang="ts">
	import { ref } from "vue";

	import Counter from "../counter.vue";
	import Child3 from "./child3.vue";

	export default {
		name: "Parent3", // devtools
		components: { Counter, Child3 },
		setup() {
			// -> prop
			let state_init = ref(0);

			// attr
			let state1 = ref(state_init);

			// methods
			function counter(e: Event, payload: number) {
				state1.value = payload;
			}

			return { state1, state_init, counter };
		},
	};
</script>

<style lang="scss">
	.parent3 {
		padding: 1rem;
		max-width: 678px;
		margin: 3rem auto;
		background-color: transparent;
		border: 1px solid gray;

		h4 {
			color: blueviolet;
			padding: 1rem;
			background-color: gainsboro;
			border: 1px solid gray;
			border-radius: 5px;
			max-width: 180px;
			margin: 0 auto;
		}
	}
</style>
