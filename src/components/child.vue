<template>
	<section class="child">
		<h3>Child Component</h3>
		<h4>Child State</h4>

		<Counter></Counter>

		<!-- GrandChild -->
		<GrandChild></GrandChild>
	</section>
</template>

<script lang="ts">
	import Counter from "../components/counter.vue";
	import GrandChild from "../components/grand-child.vue";

	export default {
		name: "Uncommunicated", // devtools
		components: { Counter, GrandChild },
	};
</script>

<style lang="scss">
	.child {
		padding: 1rem;
		background-color: lightgray;
	}
</style>
