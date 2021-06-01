<template>
	<h3>Parent Component</h3>
	<Counter></Counter>

	<!-- Child -->
	<h3>Child Component</h3>

	<!-- GrandChild -->
	<h3>Grand Child Component</h3>
</template>

<script lang="ts">
	import Counter from "../components/counter.vue";

	export default {
		name: "Uncommunicated", // devtools
		components: { Counter },
	};
</script>
