<template>
	<div class="btn-group">
		<h5>Counter Component</h5>

		<!-- local state -->
		<small>counter state: {{ state }}</small>

		<!-- setup increment -->
		<fieldset>
			<label for="nw"></label>
			Setup Increment:
			<input v-model="incrementBy" id="n" type="number" step="1" min="1" />
		</fieldset>

		<!-- incrementors -->
		<button
			class="btn btn-add"
			@mousedown="
				add(incrementBy);
				$emit('emitCounter', [$event, state]);
			"
		>
			+ {{ incrementBy }}
		</button>
		<button
			class="btn btn-substract"
			@mousedown="
				substract(incrementBy);
				$emit('emitCounter', [$event, state]);
			"
		>
			- {{ incrementBy }}
		</button>
	</div>
</template>

<script lang="ts">
	import { ref, watchEffect } from "vue";

	export default {
		// devtools
		name: "Uncommunicated",
		// Events
		emits: {
			["emitCounter"](e: Event, payload: number) {
				return [e, payload];
			},
		},
		setup(): object {
			const limitN = 1;

			// props
			let incrementBy = ref(limitN);
			let state = ref(0);

			// methods
			function add(n: number): void {
				state.value += +n;
			}

			function substract(n: number): void {
				state.value -= +n;
			}

			// watch
			watchEffect(() => (incrementBy.value = +incrementBy.value > limitN ? +incrementBy.value : limitN));

			return { state, add, substract, incrementBy };
		},
	};
</script>

<style lang="scss">
	h5,
	small {
		color: darkblue;
	}

	h5 {
		font-size: 0.9rem;
	}

	small {
		display: block;
		margin-bottom: 1rem;
	}
	fieldset {
		border: none;
		margin-bottom: 0.5rem;
		padding: 0.5rem;
		input {
			max-width: 50px;
			padding: 0.3rem;
			border: 1px solid gray;
		}
	}
</style>
