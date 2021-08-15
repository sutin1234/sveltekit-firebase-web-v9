<script lang="ts">
	import { lazyLoad } from '$lib/utils/lazyload';
	export let src = '';
	export let alt = '';
	export let width = 0;
	export let height = 0;
</script>

<img use:lazyLoad={src} {alt} data-width={width} data-height={height} />
