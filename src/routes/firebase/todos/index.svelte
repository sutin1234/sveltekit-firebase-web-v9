<script lang="ts">
	import { initializeApp, getApps, getApp } from 'firebase/app';
	import {
		collection,
		getFirestore,
		onSnapshot,
		updateDoc,
		doc,
		deleteDoc,
		addDoc,
		serverTimestamp
	} from 'firebase/firestore';
	import { firebaseConfig, todosCollection } from '$lib/firebase/index';
	import { browser } from '$app/env';
	import { toFirestoreDateLocaleTh } from '$lib/utils/dateUtils';
	import { onDestroy } from 'svelte';

	const firebaseApp =
		browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
	const db = browser && getFirestore();
	const colRef = browser && collection(db, todosCollection);

	let text = '';
	let complete: boolean;
	const created = serverTimestamp();

	$: todos = [];
	$: {
		todos = todos.map((m) => ({ ...m, created: toFirestoreDateLocaleTh(m?.created) }));
		console.log(todos);
	}

	const unsubscribe = onSnapshot(colRef, (queySnapshot) => {
		let fbTodos = [];
		queySnapshot.forEach((doc) => {
			let todos = { ...doc.data(), id: doc.id };
			fbTodos = [todos, ...fbTodos];
		});
		todos = fbTodos;
	});

	const doUpdateDoc = async (id: string, isComplete: boolean) => {
		await updateDoc(doc(db, todosCollection, id), {
			complete: !isComplete
		});
	};

	const doDeleteDoc = async (id: string) => {
		await deleteDoc(doc(db, todosCollection, id));
	};

	const doAddDoc = async () => {
		await addDoc(collection(db, todosCollection), {
			text,
			complete,
			created
		});
		text = '';
	};

	onDestroy(() => unsubscribe());

	console.log({ firebaseApp, db, colRef, todos });
</script>

<div class="mx-4 my-4">
	<h1>Firebase Todos</h1>

	<div class="border px-4 py-4 bg-white">
		<form on:submit|preventDefault={doAddDoc}>
			Text: <input type="text" bind:value={text} /> <br />
			isComplete:
			<select bind:value={complete}>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
			<br />
			<input type="submit" value="Submit" class="px-2" />
		</form>
	</div>

	<ul>
		{#each todos as { id, text, created, complete }, index}
			<li>
				<div class="flex">
					<div class="flex-1">{index + 1} (id={id})</div>
					<div class="flex-1">{text}</div>
					<div class={JSON.parse(complete) ? 'flex-1 text-green-600' : 'flex-1 text-red-600'}>
						{complete}
					</div>
					<div class="flex-1">{created}</div>
					<div>
						<button on:click={doUpdateDoc(id, complete)}>Update</button>
						<button on:click={doDeleteDoc(id)}>Delete</button>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
