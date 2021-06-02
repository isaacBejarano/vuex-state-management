<template>
	<section class="parent">
		<h3>Parent Component</h3>
		<h4>Parent State: {{ state1 }}</h4>

		<Counter @emit-counter="counter(...$event)" :stateInit="state_init"></Counter>

		<!-- Child -->
		<Child :stateInit="state_init"></Child>
	</section>
</template>

<script lang="ts">
	import { ref } from "vue";

	import Counter from "../counter.vue";
	import Child from "./child.vue";

	export default {
		name: "Parent", // devtools
		components: { Counter, Child },
		setup() {
			// -> prop
			let state_init = ref(5);

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
	.parent {
		padding: 1rem;
		max-width: 678px;
		margin: 3rem auto;
		background-color: transparent;
		border: 1px solid gray;

		h4 {
			color: palegreen;
			text-shadow: 0px 1px 4px black;
		}
	}
</style>
