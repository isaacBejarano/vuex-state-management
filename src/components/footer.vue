<template>
	<footer>
		<small>{{ developer }}</small>
		<small>{{ made }}</small>
	</footer>
</template>

<script lang="ts">
	import { ref } from "vue";

	export default {
		setup(): object {
			// props
			const developer = ref(<string>"@ 2021 Isaac Bejarano");
			const made = ref(<string>"Made with 💚 in Vue 3.0, VueX and SASS");

			// return props
			return { developer, made };
		},
	};
</script>

<style lang="scss" scoped>
	footer {
		padding: 1rem;
		background-color: #2c3e50;
		color: #42b983;

		small:nth-child(1) {
			color: inherit;
			display: block;
		}
		small:nth-child(2) {
			color: gainsboro;
			font-weight: lighter;
		}
	}
</style>
