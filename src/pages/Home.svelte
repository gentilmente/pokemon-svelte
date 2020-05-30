<script>
  import { onMount } from "svelte";
  import Poke from "../components/Poke.svelte";

  let poke;

  let query = "";
  let result;

  async function getResult() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}/`);
    let data = await response.json();
    return data;
  }

  function submitHandler(e) {
    result = getResult();
  }
</script>

<main>

  <form class="form-inline" on:submit|preventDefault={submitHandler}>
    <input
      class="w-75 form-control"
      placeholder="e.g. 'ivysaur' or 2"
      bind:value={query} />
    <button class="w-25 btn btn-dark">get</button>
  </form>

  {#if result === undefined}
    <p />
  {:else}
    {#await result}

      <p>Loading...</p>

    {:then poke}
      <Poke {poke} />
    {:catch error}
      {error.message}
    {/await}
  {/if}
  <p />

</main>
