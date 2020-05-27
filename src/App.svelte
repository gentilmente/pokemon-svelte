<script>
  import { onMount } from "svelte";
  import Poke from "./Poke.svelte";
  import Pokes from "./Pokes.svelte";
  let pokes;
  let poke;

  let query = "";
  let result;

  async function getResult() {
    const response = await fetch(
      `https://api.dev.perfivo.com/pokeapi/v0/pokemon/${query}`
    );
    let text = await response.text();
    let data = text;
    return data;
  }

  function submitHandler(e) {
    result = getResult();
  }
</script>

<main>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md" />
      <div class="col-md-8 text-center">
        <h1 class="display-4">Los Pokemones</h1>

        <Pokes {pokes} />

        <form class="form-inline" on:submit|preventDefault={submitHandler}>
          <input class="w-75 form-control" type="number" bind:value={query} />
          <button class="w-25 btn btn-dark">Submit</button>
        </form>

        {#if result === undefined}
          <p />
        {:else}
          {#await result}

            <p>Loading...</p>

          {:then value}
            {value}
          {:catch error}
            {error.message}
          {/await}
        {/if}
      </div>
      <div class="col-md" />
    </div>
  </div>

</main>
