<template>
	<section class="btn-group">
		<!-- setup increment -->
		<fieldset>
			<label for="nw"></label>
			Setup Increment:
			<input v-model="n" id="n" type="number" step="1" min="1"/>
		</fieldset>

		<!-- incremenors -->
		<button class="btn btn-add" @mousedown="add(n)">+ {{ n }}</button>
		<button class="btn btn-substract" @mousedown="substract(n)">- {{ n }}</button>

		<!-- local state -->
		state: {{ state }}
	</section>
</template>

<script lang="ts">
	import { ref } from "vue";

	export default {
		name: "Uncommunicated", // devtools
		setup(): object {
			// props
			const state = ref(0);
			const n = ref(1);

			// methods
			function add(n: number): void {
				state.value += +n;
			}

			function substract(n: number): void {
				state.value -= +n;
			}

			return { state, add, substract, n };
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
