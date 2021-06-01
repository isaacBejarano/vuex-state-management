<template>
	<nav>
		<router-link v-for="(link, i) in navLinks" :key="i" :to="link[1]">
			{{ link[0] }}

			<span v-if="i < navLinksLastIdx">|</span>
		</router-link>
	</nav>
</template>

<script lang="ts">
	import { ref, computed } from "vue";

	export default {
		setup(): object {
			// props
			const navLinks = ref(<string[][]>[
				["Uncommunicated", "/"],
				["Event-driven", "/event-driven"],
				["VUEX-drive", "/state-driven"],
			]);

			// computed
			const navLinksLastIdx = computed(() => navLinks.value.length - 1);

			// return props
			return { navLinks, navLinksLastIdx };
		},
	};

	// NOTE:
	// We can force type inference by using defineComponent()
	// I think, explcicid TS typing is more reliable and robust :)
</script>

<style lang="scss" scoped>
	nav {
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}

		span {
			padding: 1rem;
		}
	}
</style>
