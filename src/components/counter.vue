<template>
	<div class="btn-group">
		<h5>Counter Component</h5>

		<!-- input -->
		<fieldset>
			<label for="n"></label>
			Setup Increment:
			<slot name="input"></slot>
		</fieldset>

		<!-- tune -->
		<slot name="tune"></slot>
	</div>
</template>

<script lang="ts">
	export default {
		name: "Counter", // devtools
	};
</script>

<style lang="scss">
	h5,
	small {
		color: darkblue;
	}

	h5 {
		font-size: 0.9rem;
	}

	small {
		display: block;
		margin-bottom: 1rem;
	}
	fieldset {
		border: none;
		margin-bottom: 0.5rem;
		padding: 0.5rem;
		input {
			max-width: 50px;
			padding: 0.3rem;
			border: 1px solid gray;
		}
	}
</style>
