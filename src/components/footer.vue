<template>
	<footer>
		<small>{{ developer }}</small>
		<small>Made with &#128154; in Vue 3.0, VueX and SASS</small>
		<small>{{ year }}</small>
	</footer>
</template>

<script lang="ts">
	import { ref } from "vue";

	export default {
		setup(): object {
			// props
			const developer = ref(<string>"Isaac Bejarano");
			const year = ref(<string>"2021");

			// return props
			return { developer, year };
		},
	};

	// NOTE:
	// We can force type inference by using defineComponent()
	// I think, explcicid TS typing is more reliable and robust :)
</script>

<style lang="scss" scoped>
	small:nth-child(n + 1) {
		display: block;
	}
	small:nth-child(2) {
		color: gainsboro;
		font-weight: lighter;
	}
</style>
