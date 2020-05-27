<script>
  import Poke from "./Poke.svelte";
  // create a prop
  export let trainer;
</script>

<style>
  article {
    margin: 0 0 1em 0;
  }
  h1 {
    font-size: 1.4em;
    margin: 0;
    display: block;
  }
</style>

<article>
  <h1>{trainer.name}</h1>
  <small>
    id:
    <b>{trainer.id}</b>
  </small>
  <br />
  {#if trainer.pokemon}
    <ul>
      {#each trainer.pokemon as poke}
        <li>
          <Poke {poke} />
        </li>
      {/each}
    </ul>
    <small>
      trainer's pokes:
      <b>{trainer.pokemon}</b>
    </small>
  {/if}
</article>
