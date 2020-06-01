<script>
  import Select from "svelte-select";
  import { onMount } from "svelte";

  import { getContext } from "svelte";
  export let message;
  export let hasForm = false;
  export let onCancel = () => {};
  export let onOkay = () => {};

  const { close } = getContext("simple-modal");

  let trainers = [];
  const url = "https://api.dev.perfivo.com/pokeapi/v0/trainers/";

  onMount(async () => {
    await fetch(url)
      .then(r => r.json())
      .then(data => {
        //console.log(data);
        trainers = data.map(e => ({
          id: e.id,
          label: e.name
        }));
      });
  });
  let selectedValue = undefined;
  let onChange = () => {};

  function _onCancel() {
    onCancel();
    close();
  }

  function _onOkay() {
    onOkay(selectedValue);
    close();
  }

  $: onChange(selectedValue);
</script>

<style>
  h2 {
    font-size: 2rem;
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
</style>

<h2>{message}</h2>

{#if hasForm}
  <Select items={trainers} bind:selectedValue />
{/if}
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<div class="buttons">
  <button on:click={_onCancel}>Cancel</button>
  <button on:click={_onOkay}>Okay</button>
</div>
