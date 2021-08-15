<script lang="ts">
	import type { ICON } from '$lib/types/Icon';
	import { icons } from '$lib/icons.json';
	export let icon: string;
	const iconWidth = 24;
	const iconHeight = 24;

	const icons$: ICON[] = icons.map((m: ICON) => ({
		...m,
		width: iconWidth,
		height: iconHeight
	}));
	const icon$ = icons$.find((ico) => ico.name == icon);
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	width={icon$.width}
	height={icon$.height}
	class="text-white inline-block"
>
	{@html icon$.path}
</svg>
