<template>
	<section class="child2">
		<h3>Child Component</h3>
		<h4>Child State: GrandChild State: {{ state2 }}</h4>

		<Counter @emit-counter="counter(...$event)" :stateInit="state_init"></Counter>

		<!-- GrandChild -->
		<GrandChild2 :stateInit="state_init"></GrandChild2>
	</section>
</template>

<script lang="ts">
	import { ref } from "vue";

	import Counter from "../counter.vue";
	import GrandChild2 from "./grand-child2.vue";

	export default {
		name: "Child2", // devtools
		components: { Counter, GrandChild2 },
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
	.child2 {
		padding: 1rem;
		background-color: palegoldenrod;
	}
</style>
