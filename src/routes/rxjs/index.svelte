<script lang="ts">
	import { RxFromFetch } from '$lib/utils/rxjsUtils';
	$: {
		const poke = RxFromFetch('https://pokeapi.co/api/v2/pokemon/ditto');
		poke.subscribe((data) => {
			console.log(data);
		});
	}
</script>

<div class="px-4 py-4">
	<h1>RxJS Utils</h1>
</div>
