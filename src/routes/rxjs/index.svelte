<script lang="ts">
	import LazyImage from '$lib/components/LazyImage.svelte';

	import type { POKE_API } from '$lib/types/Poke';

	import { getPokeMon } from '$lib/utils/rxjsUtils';
	import type { Observable } from 'rxjs';
	$: results = [];
	$: {
		const poke: Observable<POKE_API> = getPokeMon('https://pokeapi.co/api/v2/pokemon?limit=100');
		poke.subscribe((data: POKE_API) => (results = data?.results));
	}

	const pokeImage = (pokeName: string) => {
		return `https://img.pokemondb.net/artwork/large/${pokeName}.jpg`;
	};
</script>

<div class="px-4 py-4">
	<h1 class="text-2xl text-red-600">RxJS Utils Fetch Pokemon API</h1>
	<div class="flex flex-wrap">
		{#each results as poke}
			<div class="flex-1 p-4 bg-white m-2 rounded">
				<a href={pokeImage(poke.name)} target="_blank">
					<LazyImage src={pokeImage(poke.name)} alt={poke.name} />
					{poke.name}
				</a>
			</div>
		{/each}
	</div>
</div>
