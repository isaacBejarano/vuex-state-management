<template>
	<section class="grand-child">
		<h3>GrandChild Component</h3>
		<h4>GrandChild State: {{ state3 }}</h4>

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
	</section>
</template>

<script lang="ts">
	import { ref } from "vue";

	import Counter from "../counter.vue";

	export default {
		name: "GrandChild", // devtools
		components: { Counter },
		setup() {
			const limitN = 1;

			// attr
			let incrementBy = ref(limitN);
			let state3 = ref(0); // initial state

			// methods
			function add(n: number): void {
				state3.value += +n;
			}

			function substract(n: number): void {
				state3.value -= +n;
			}
			return { state3, incrementBy, add, substract };
		},
	};
</script>

<style lang="scss" scoped>
	.grand-child {
		padding: 1rem;
		background-color: darkgray;

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
