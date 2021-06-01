<template>
	<section class="parent">
		<h3>Parent Component</h3>
		<!-- <h4>Parent State: {{ state }}</h4> -->
		<Counter></Counter>

		<!-- Child -->
		<Child></Child>
	</section>
</template>

<script lang="ts">
	import { ref } from "vue";

	import Counter from "../components/counter.vue";
	import Child from "../components/child.vue";

	export default {
		name: "Uncommunicated", // devtools
		components: { Counter, Child },

		// setup(): object {
		// 	const state = ref(0);
		// 	return { state };
		// },
	};
</script>

<style lang="scss">
	.parent {
		padding: 1rem;
		max-width: 678px;
		margin: 3rem auto;
		background-color: transparent;
		border: 1px solid gray;

		h4 {
			color: palegreen;
			text-shadow: 0px 1px 4px black;
		}
	}
</style>
