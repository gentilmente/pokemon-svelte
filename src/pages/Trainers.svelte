<script>
  import { onMount } from "svelte";
  import Trainer from "../components/Trainer.svelte";
  // define the data holding variable
  let trainers;

  onMount(async () => {
    await fetch(`https://api.dev.perfivo.com/pokeapi/v0/trainers/`)
      .then(r => r.json())
      .then(data => {
        trainers = data;
      });
  });
</script>

<style>
  .loading {
    opacity: 0;
    animation: 0.4s 0.8s forwards fade-in;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  ul {
    list-style-type: none;   
  }
</style>

<h2>Trainers</h2>
{#if trainers}
  <ul>
    {#each trainers as trainer}
      <li>
        <Trainer {trainer} />
      </li>
    {/each}
  </ul>
{:else}
  <p class="loading">loading...</p>
{/if}
