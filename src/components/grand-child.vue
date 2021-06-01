<template>
	<section class="grand-child">
		<h3>GrandChild Component</h3>
		<h4>GrandChild State: {{ state3 }}</h4>

		<Counter @emit-counter="counter(...$event)"></Counter>
	</section>
</template>

<script lang="ts">
	import { ref } from "vue";

	import Counter from "../components/counter.vue";

	export default {
		name: "Uncommunicated", // devtools
		components: { Counter },
		setup() {
			// props
			const state3 = ref(999);

			// methods
			function counter(e: Event, payload: number) {
				state3.value = payload;
			}

			return { state3, counter };
		},
	};
</script>

<style lang="scss">
	.grand-child {
		padding: 1rem;
		background-color: darkgray;
	}
</style>
