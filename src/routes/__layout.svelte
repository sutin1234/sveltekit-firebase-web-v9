<script lang="ts">
	import 'virtual:windi.css';
	import Header from '$lib/header/Header.svelte';
</script>

<Header />

<main class="py-4">
	<slot />
	<style windi:preflights:global windi:safelist:global>
	</style>
</main>

<footer class="fixed bottom-0 w-full py-4 text-center">
	<p>
		visit <a href="https://kit.svelte.dev" class="text-red-400">kit.svelte.dev</a> to learn SvelteKit
	</p>
</footer>
