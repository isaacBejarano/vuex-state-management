<template>
	<section class="child">
		<h3>Child Component</h3>
		<h4>Child State: {{ state2 }}</h4>

		<Counter @emit-counter="counter(...$event)" :stateInit="state_init"></Counter>

		<!-- GrandChild -->
		<GrandChild :stateInit="state_init"></GrandChild>
	</section>
</template>

<script lang="ts">
	import { ref } from "vue";

	import Counter from "../counter.vue";
	import GrandChild from "./grand-child.vue";

	export default {
		name: "Child", // devtools
		components: { Counter, GrandChild },
		props: { stateInit: Number },
		setup(props: any) {
			// -> props
			let state_init = ref(props.stateInit);

			// attr
			let state2 = ref(state_init);

			// methods
			function counter(e: Event, payload: number) {
				state2.value = payload;
			}

			return { state2, state_init, counter };
		},
	};
</script>

<style lang="scss">
	.child {
		padding: 1rem;
		background-color: lightgray;
	}
</style>
