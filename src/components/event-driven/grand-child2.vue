<template>
	<section class="grand-child2">
		<h3>GrandChild Component</h3>
		<h4>GrandChild State: {{ state3 }}</h4>

		<Counter>
			<!-- input -->
			<template v-slot:input>
				<input v-model="incrementBy" id="n" type="number" step="1" min="1" />
			</template>

			<!-- tune -->
			<template v-slot:tune>
				<button
					class="btn btn-add"
					@mousedown="
						add(incrementBy);
						$emit('emited-counter3', [$event, state3]);
					"
				>
					+ {{ incrementBy }}
				</button>
				<button
					class="btn btn-substract"
					@mousedown="
						substract(incrementBy);
						$emit('emited-counter3', [$event, state3]);
					"
				>
					- {{ incrementBy }}
				</button>
			</template>
		</Counter>
	</section>
</template>

<script lang="ts">
	import { ref, watchEffect } from "vue";

	import Counter from "../counter.vue";

	export default {
		name: "GrandChild2", // devtools
		components: { Counter },
		props: { state: Number },
		// Events
		emits: {
			["emited-counter3"](e: Event, payload: number) {
				return [e, payload];
			},
		},
		setup(props: any) {
			const limitN = 1;

			// attr
			let incrementBy = ref(limitN);
			let state3 = ref(props.state);

			// methods
			function counter(e: Event, payload: number) {
				state3.value = payload;
			}

			function add(n: number): void {
				state3.value += +n;
			}

			function substract(n: number): void {
				state3.value -= +n;
			}

			// watch
			watchEffect(() => (state3.value = props.state));

			return { incrementBy, state3, counter, add, substract };
		},
	};
</script>

<style lang="scss">
	.grand-child2 {
		padding: 1rem;
		background-color: goldenrod;
	}
</style>
