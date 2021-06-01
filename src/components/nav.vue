<template>
	<nav>
		<router-link :to="navLinks[0][1]">{{ navLinks[0][0] }}</router-link>
		|
		<router-link :to="navLinks[1][1]">{{ navLinks[1][0] }}</router-link>
	</nav>
</template>

<script lang="ts">
	import { ref } from "vue";

	export default {
		setup(): object {
			// props
			const navLinks = ref(<string[][]>[
				["VUEX-driven", "/"],
				["Event-driven", "/event-driven"],
			]);

			// DI
			// const key: InjectionKey<string> = Symbol();
			// provide(key, "foo");
			// const foo: string | undefined = inject(key);

			// const bar = inject<string | undefined>("bar");

			// return props
			return { navLinks };
		},
	};

	// NOTE:
	// We can force type inference by using defineComponent()
	// I think, explcicid TS typing is more reliable and robust :)
</script>

<style lang="scss" scoped>
	nav {
		padding: 1rem;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
