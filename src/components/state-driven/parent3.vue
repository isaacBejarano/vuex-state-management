<template>
	<section class="parent">
		<h3>Parent Component</h3>
		<h4>Parent State: {{ state1 }}</h4>

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

		<!-- Child -->
		<Child3></Child3>
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
			const limitN = 1;

			// attr
			let incrementBy = ref(limitN);
			let state1 = ref(0); // initial state

			// methods
			function add(n: number): void {
				state1.value += +n;
			}

			function substract(n: number): void {
				state1.value -= +n;
			}

			return { state1, incrementBy, add, substract };
		},
	};
</script>

<style lang="scss" scoped>
	.parent {
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
