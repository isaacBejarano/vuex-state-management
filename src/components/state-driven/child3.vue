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
				<button class="btn btn-add" @mousedown="incrementPlusOrMinus(incrementBy, 'plus')">+ {{ incrementBy }}</button>
				<button class="btn btn-substract" @mousedown="incrementPlusOrMinus(incrementBy, 'minus')">- {{ incrementBy }}</button>
			</template>
		</Counter>

		<!-- GrandChild -->
		<GrandChild3></GrandChild3>
	</section>
</template>

<script lang="ts">
	import { ref, watchEffect } from "vue";
	import store from "@/store";

	import Counter from "../counter.vue";
	import GrandChild3 from "./grand-child3.vue";

	export default {
		name: "Child3", // devtools
		components: { Counter, GrandChild3 },
		setup() {
			const limitN = 1;

			// attr
			let incrementBy = ref(limitN);
			let state2 = ref(0); // fallback

			// methods
			function incrementPlusOrMinus(n: number, sign: string) {
				const payload =
					sign === "plus" //
						? (state2.value += +n)
						: sign === "minus"
						? (state2.value -= +n)
						: state2.value;

				store.commit("setCount", payload);
			}

			// VUEX @watch
			watchEffect(() => (state2.value = store.getters.getCount));

			return { state2, incrementBy, incrementPlusOrMinus };
		},
	};
</script>

<style lang="scss" scoped>
	.child {
		padding: 1rem;
		background-color: paleturquoise;

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
