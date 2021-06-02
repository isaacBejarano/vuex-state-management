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
				<button class="btn btn-add" @mousedown="incrementPlusOrMinus(incrementBy, 'plus')">+ {{ incrementBy }}</button>
				<button class="btn btn-substract" @mousedown="incrementPlusOrMinus(incrementBy, 'minus')">+ {{ incrementBy }}</button>
			</template>
		</Counter>

		<!-- Child -->
		<Child3></Child3>
	</section>
</template>

<script lang="ts">
	import { ref, watchEffect } from "vue";
	import store from "@/store";

	import Counter from "../counter.vue";
	import Child3 from "./child3.vue";

	export default {
		name: "Parent3", // devtools
		components: { Counter, Child3 },
		setup() {
			const limitN = 1;

			// attr
			let incrementBy = ref(limitN);
			let state1 = ref(0); // fallback

			// methods
			function incrementPlusOrMinus(n: number, sign: string) {
				const payload =
					sign === "plus" //
						? (state1.value += +n)
						: sign === "minus"
						? (state1.value -= +n)
						: state1.value;

				store.commit("setCount", payload);
			}

			// VUEX @watch
			watchEffect(() => (state1.value = store.getters.getCount));

			return { state1, incrementBy, incrementPlusOrMinus };
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
