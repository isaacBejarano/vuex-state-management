<template>
	<footer>
		<small>{{ developer }}</small>
	</footer>
</template>

<script lang="ts">
	import { ref } from "vue";

	export default {
		setup(): object {
			// props
			const developer = ref(<string>"Isaac Bejarano. 2021");

			// return props
			return { developer };
		},
	};

	// NOTE:
	// We can force type inference by using defineComponent()
	// I think, explcicid TS typing is more reliable and robust :)
</script>

<style lang="scss" scoped>
	footer {
		padding: 1rem;
		background-color: #2c3e50;
		color: #42b983;
	}
</style>
