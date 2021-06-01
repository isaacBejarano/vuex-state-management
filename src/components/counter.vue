<template>
	<div class="btn-group">
		<!-- setup increment -->
		<fieldset>
			<label for="nw"></label>
			Setup Increment:
			<input v-model="incrementBy" id="n" type="number" step="1" min="1" />
		</fieldset>

		<!-- incremenors -->
		<button class="btn btn-add" @mousedown="add(incrementBy)">+ {{ incrementBy }}</button>
		<button class="btn btn-substract" @mousedown="substract(incrementBy)">- {{ incrementBy }}</button>

		<!-- local state -->
		counter state: {{ state }}
	</div>
</template>

<script lang="ts">
	import { ref, watchEffect } from "vue";

	export default {
		name: "Uncommunicated", // devtools
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
