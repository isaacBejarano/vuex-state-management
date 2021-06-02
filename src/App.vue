<template>
	<header>
		<img alt="Vue logo" width="35" src="./assets/logo.png" />

		<h1>{{ titles[0] }}</h1>
		<h2>{{ titles[1] }}</h2>

		<Navbar></Navbar>
	</header>

	<section id="social-media">
		<a class="link-github" href="https://github.com/isaacBejarano/vuex-counter-example" target="_blank">
			<!-- octicon -->
			<Octicon></Octicon>
			<span>
				https://github.com/isaacBejarano/vuex-counter-example
			</span>
		</a>
	</section>

	<!-- router-view -->
	<router-view />

	<Footer></Footer>
</template>

<script lang="ts">
	import { ref } from "vue";

	import Footer from "@/components/footer.vue";
	import Navbar from "@/components/nav.vue";
	import Octicon from "@/components/icons/octicon.vue";

	export default {
		components: {
			Navbar,
			Footer,
			Octicon,
		},
		setup(): object {
			//  props
			const titles = ref(<string[]>["VUE 3.0", "State-driven Counter vs. Event-driven Counter"]);
			titles.value[0] = titles.value[0] + " + VUEX"; // write/read

			//  -> props
			return { titles };
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
		background-color: #5028f121;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		background-color: whitesmoke;
		user-select: none;

		header {
			background-color: #5028f110;
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

		#social-media {
			margin-top: 3rem;

			.link-github {
				display: inline-flex;
				text-decoration: none;
				// octicon + span
				span {
					margin-left: 0.5rem;
					color: #2c3e50;
					font-size: 0.9rem;
					&:hover {
						color: #42b983;
					}
				}
			}
		}
	}

	// root
	@import "./sass/root";
</style>
