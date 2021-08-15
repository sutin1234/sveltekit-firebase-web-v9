<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { IC_POS } from '$lib/enum/Icon';
	export let text: string = '';
	export let icon: string = '';
	export let click: svelte.JSX.MouseEventHandler<HTMLButtonElement>;
	export let pos: 'left' | 'right';
</script>

<button class="bg-blue-700 px-2 py-2 text-white rounded" on:click={click}>
	{#if icon && pos === IC_POS.LEFT}
		<Icon {icon} />
	{/if}
	{text}
	{#if icon && pos === IC_POS.RIGHT}
		<Icon {icon} />
	{/if}
</button>
