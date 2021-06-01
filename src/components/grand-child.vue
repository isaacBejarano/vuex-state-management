<template>
	<section class="grand-child">
		<h3>GrandChild Component</h3>
		<h4>GrandChild State</h4>

		<Counter></Counter>
	</section>
</template>

<script lang="ts">
	import Counter from "../components/counter.vue";

	export default {
		name: "Uncommunicated", // devtools
		components: { Counter },
	};
</script>

<style lang="scss">
	.grand-child {
		padding: 1rem;
		background-color: darkgray;
	}
</style>
