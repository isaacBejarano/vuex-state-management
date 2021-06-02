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
				<button class="btn btn-add" @mousedown="incrementPlusOrMinus(incrementBy, 'plus')">+ {{ incrementBy }}</button>
				<button class="btn btn-substract" @mousedown="incrementPlusOrMinus(incrementBy, 'minus')">- {{ incrementBy }}</button>
			</template>
		</Counter>
	</section>
</template>

<script lang="ts">
	import { ref, watchEffect } from "vue";
	import store from "@/store";

	import Counter from "../counter.vue";

	export default {
		name: "GrandChild3", // devtools
		components: { Counter },
		setup() {
			const limitN = 1;

			// attr
			let incrementBy = ref(limitN);
			let state3 = ref(0); // fallback

			// methods
			function incrementPlusOrMinus(n: number, sign: string) {
				const payload =
					sign === "plus" //
						? (state3.value += +n)
						: sign === "minus"
						? (state3.value -= +n)
						: state3.value;

				store.commit("setCount", payload);
			}

			// VUEX @watch
			watchEffect(() => (state3.value = store.getters.getCount));

			return { state3, incrementBy, incrementPlusOrMinus };
		},
	};
</script>

<style lang="scss" scoped>
	.grand-child {
		padding: 1rem;
		background-color: cadetblue;

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
