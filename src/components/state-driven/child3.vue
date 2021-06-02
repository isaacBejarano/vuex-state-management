<template>
	<section class="child3">
		<h3>Child Component</h3>
		<h4>Child State: {{ state2 }}</h4>

		<Counter @emit-counter="counter(...$event)" :stateInit="state_init"></Counter>

		<!-- GrandChild -->
		<GrandChild3 :stateInit="state_init"></GrandChild3>
	</section>
</template>

<script lang="ts">
	import { ref } from "vue";

	import Counter from "../counter.vue";
	import GrandChild3 from "./grand-child3.vue";

	export default {
		name: "Child3", // devtools
		components: { Counter, GrandChild3 },
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
	.child3 {
		padding: 1rem;
		background-color: paleturquoise;
	}
</style>
