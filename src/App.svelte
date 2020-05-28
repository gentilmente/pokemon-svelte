<script>
  import { onMount } from "svelte";
  import Poke from "./Poke.svelte";
  import Pokes from "./Pokes.svelte";
  import Trainers from "./Trainers.svelte";
  import Trainer from "./Trainer.svelte";
  let pokes;
  let poke;
  let trainers;
  let trainer;

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
  <div class="container mt-5">
    <div class="row">
      <div class="col-md" />
      <div class="col-md-8">

        <h1 class="display-4">Los Pokemones</h1>
        <Trainers {trainers} />

        <form class="form-inline" on:submit|preventDefault={submitHandler}>
          <input
            class="w-75 form-control"
            placeholder="pokemon id"
            type="number"
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
      </div>
      <div class="col-md" />
    </div>
  </div>

</main>
