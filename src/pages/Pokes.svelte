<script>
  import { onMount } from "svelte";
  import Poke from "../components/Poke.svelte";
  // define the data holding variable
  let pokes;

  onMount(async () => {
    await fetch(`https://api.dev.perfivo.com/pokeapi/v0/pokemon/`)
      .then(r => r.json())
      .then(data => {
        pokes = data;
      });
  })
</script>

{#if pokes}
  {#each pokes as poke }
    <ul>
      <li>    
        <Poke {poke} />
      </li>
    </ul>
  {/each}
{:else}
  <p class="loading">loading...</p>
{/if}

<style>
  .loading {
    opacity: 0;
    animation: 0.4s 0.8s forwards fade-in;
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  li {
    list-style: none;
  }
</style>
