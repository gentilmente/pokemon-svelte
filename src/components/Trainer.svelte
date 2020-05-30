<script>
  import Poke from "./Poke.svelte";
  export let trainer;
  let pokeList = [];
  Promise.all(
    trainer.pokemon.map(e =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${e.number}/`)
        .then(r => r.json())
        .catch()
    )
  ).then(data => {
    pokeList = data.map(e => ({
      id: e.id,
      name: e.name,
      order: e.order,
      tag: e.types[0].type.name,
      img: e.sprites.front_default
    }));
  });
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
  li {
    list-style: none;
    margin-top: 1em;
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
      {#each pokeList as poke}
        <li>
          <Poke {poke} />
        </li>
      {/each}
    </ul>
  {/if}
</article>
