<template>
	<header>
		<img alt="Vue logo" width="35" loading="lazy" src="./assets/logo.png" />

		<h1>{{ titles[0] }}</h1>
		<h2>{{ titles[1] }}</h2>

		<Navbar></Navbar>
	</header>

	<!-- Counter -->

	<p class="state">state: {{ state }}</p>

	<!-- router-view -->
	<router-view />

	<Footer></Footer>
</template>

<script lang="ts">
	import { ref, computed } from "vue";

	import Footer from "@/components/footer.vue";
	import Navbar from "@/components/nav.vue";

	export default {
		components: {
			Navbar,
			Footer,
		},
		setup(): object {
			//  props
			const titles = ref(<string[]>["VUE 3.0", "State-driven Counter vs. Event-driven Counter"]);
			titles.value[0] = titles.value[0] + " + VUEX"; // write/read

			// state
			const state = computed((): number => titles.value.length);

			//  -> props
			return { titles, state };
		},
	};

	/*
	NOTE:
		Shell App has no class
		We can force type inference by using defineComponent()
		I think, explcicid TS typing is more reliable and robust :)
	*/
</script>

<style lang="scss">
	body {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		overflow: hidden;
		background-color: #5028f121;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		background-color: whitesmoke;

		header {
			background-color: #5028f121;
			padding: 1rem;
			border: 1px solid #2c3e50;
			h1 {
				margin: 0;
				font-weight: bold;
			}
			h2 {
				font-weight: lighter;
			}
		}

		.state {
			padding: 1rem;
			margin: 0;
			border: 0 solid #2c3e50;
			border-width: 0px 0px 1px;
		}

		footer {
			padding: 1rem;
			background-color: #2c3e50;
			color: #42b983;
		}
	}

	// root
	@import "./sass/root";
</style>
