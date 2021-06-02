<template>
	<section class="child">
		<h3>Child Component</h3>
		<h4>Child State: {{ state2 }}</h4>

		<Counter>
			<!-- input -->
			<template v-slot:input>
				<input v-model="incrementBy" id="n" type="number" step="1" min="1" />
			</template>

			<!-- tune -->
			<template v-slot:tune>
				<button class="btn btn-add" @mousedown="add(incrementBy)">+ {{ incrementBy }}</button>
				<button class="btn btn-substract" @mousedown="substract(incrementBy)">- {{ incrementBy }}</button>
			</template>
		</Counter>

		<!-- GrandChild -->
		<GrandChild></GrandChild>
	</section>
</template>

<script lang="ts">
	import { ref } from "vue";

	import Counter from "../counter.vue";
	import GrandChild from "./grand-child.vue";

	export default {
		name: "Child", // devtools
		components: { Counter, GrandChild },
		setup() {
			const limitN = 1;

			// attr
			let incrementBy = ref(limitN);
			let state2 = ref(0); // initial state

			// methods
			function add(n: number): void {
				state2.value += +n;
			}

			function substract(n: number): void {
				state2.value -= +n;
			}

			return { state2, incrementBy, add, substract };
		},
	};
</script>

<style lang="scss" scoped>
	.child {
		padding: 1rem;
		background-color: lightgray;
	}
</style>
