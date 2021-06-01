<template>
	<section class="btn-group">
		<button class="btn btn-add" @click="add(n)">+ {{ n }}</button>
		<button class="btn btn-substract" @click="substract(n)">- {{ n }}</button>
		{{ state }}
	</section>
</template>

<script lang="ts">
	import { ref } from "vue";
	import { useRoute } from "vue-router";

	export default {
		name: "Uncommunicated", // devtools
		setup(props, { emit }): object {
			// props
			const state = ref(0);
			const n = ref(1);

			// router
			const router = useRoute();

			// methods
			function add(n: number): void {
				state.value += n;
			}

			function substract(n: number): void {
				state.value -= n;
			}

			return { state, add, substract, n };
		},
	};
</script>
