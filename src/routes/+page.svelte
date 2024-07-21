<script lang="ts">
	import { useQuery } from '@triplit/svelte';
	import { client } from '$lib/client';

	let data = useQuery(client, client.query('form').include('fields'));
	let formsArray = $derived(data.results ? Array.from(data.results) : []);
	let new_field = $state('');

	const handleSubmit = async (
		event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }
	) => {
		event.preventDefault();
		await client.insert('form', {}).then((e) => console.log(e));
	};

	const handleFieldSubmit = async (
		event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement },
		form_id: string
	) => {
		event.preventDefault();
		await client
			.insert('field', { title: new_field, form_id: form_id })
			.then((e) => console.log(e));
		new_field = '';
		console.log(formsArray);
	};
</script>

<form onsubmit={(e) => handleSubmit(e)}>
	<button>Add Form</button>
</form>
<div>
	{#if data.fetching}
		<p>Loading...</p>
	{:else if data.error}
		<p>Error: {data.error.message}</p>
	{:else}
		<div>
			{#each formsArray as [_id]}
				<div>
					<p>Form {_id}</p>
					<form onsubmit={(e) => handleFieldSubmit(e, _id)}>
						<input type="text" bind:value={new_field} />
						<button>Add Field</button>
					</form>
					<button onclick={() => client.delete('form', _id)}>X</button>
				</div>
			{/each}
		</div>
	{/if}
</div>
