<template>
	<section class="grand-child3">
		<h3>GrandChild Component</h3>
		<h4>GrandChild State: {{ state3 }}</h4>

		<Counter @emit-counter="counter(...$event)" :stateInit="state_init"></Counter>
	</section>
</template>

<script lang="ts">
	import { ref } from "vue";

	import Counter from "../counter.vue";

	export default {
		name: "GrandChild3", // devtools
		components: { Counter },
		props: { stateInit: Number },
		setup(props: any) {
			// -> props
			let state_init = ref(props.stateInit);

			// attr
			let state3 = ref(state_init);

			// methods
			function counter(e: Event, payload: number) {
				state3.value = payload;
			}

			return { state3, state_init, counter };
		},
	};
</script>

<style lang="scss">
	.grand-child3 {
		padding: 1rem;
		background-color: turquoise;
	}
</style>
