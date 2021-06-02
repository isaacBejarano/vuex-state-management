<template>
	<section class="parent2">
		<h3>Parent Component</h3>
		<h4>Parent State: {{ state1 }}</h4>

		<Counter @emit-counter="counter(...$event)" :stateInit="state_init"></Counter>

		<!-- Child -->
		<Child2 :stateInit="state_init"></Child2>
	</section>
</template>

<script lang="ts">
	import { ref } from "vue";

	import Counter from "../counter.vue";
	import Child2 from "./child2.vue";

	export default {
		name: "Parent2", // devtools
		components: { Counter, Child2 },
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
	.parent2 {
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
