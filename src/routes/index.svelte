<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Button from '$lib/components/Button.svelte';
	import { loop_guard } from 'svelte/internal';
	let loaded = false;
	onMount(() => (loaded = true));
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="bg-white">
	<div class="container">
		<div class="flex">
			{#if loaded}
				<div transition:fly={{ y: 200, duration: 1000 }} class="flex-1 px-4 py-4">
					<div>
						<span class="text-red-600 text-3xl font-bold">We</span> are
						<span class="text-blue-600 text-3xl font-bold">Developer</span>
					</div>
					<div class="leading-5 mt-2">build application is how they get started.</div>
				</div>
			{/if}
			<div class="flex-1 px-4 py-4">
				<div class="text-2xl font-bold mt-2 text-green-600">Sutin Injitt (Thin)</div>
				<div>
					<span class="text-red-600">Web Developer</span>
					<span class="text-purple-600">@2022</span>
				</div>
				<Button
					text="GET ACCESS CONTACT"
					icon="arrow-right"
					pos="right"
					click={() => console.log('test click')}
				/>
			</div>
		</div>
	</div>
</section>
