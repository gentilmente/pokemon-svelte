<script>
  import { onMount } from "svelte";
  import Poke from "../components/Poke.svelte";
  // define the data holding variable
  let pokeList = [];
  /*
  onMount(async () => {
    await fetch(`https://api.dev.perfivo.com/pokeapi/v0/pokemon/`)
      .then(r => r.json())
      .then(internalPokes => {
        Promise.all(
          internalPokes.map(internalPoke =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${internalPoke.number}/`)
              .then(r => r.json())
              .catch()
          )
        ).then(data => {
          console.log(data);
          pokeList = data.map(e => ({
            id: e.id,
            name: e.name,
            order: e.order,
            weight: e.weight,
            tag: e.types[0].type.name,
            img: e.sprites.front_default
          }));
        });
      });
  });
*/

  onMount(async () => {
    const internalPokes = await fetch(
      `https://api.dev.perfivo.com/pokeapi/v0/pokemon/`
    ).then(r => r.json());

    const dataWithTrainer = await Promise.all(
      internalPokes.map(internalPoke =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${internalPoke.number}/`).then(
          async r => ({
            data: await r.json(),
            trainer: internalPoke.trainer
              ? internalPoke.trainer.name
              : "no trainer"
          })
        )
      )
    );
    pokeList = dataWithTrainer.map(({ data, trainer }) => ({
      ...data,
      trainer
    }));

    console.table(
      dataWithTrainer.map(({ data, trainer }) => ({
        ...data,
        trainer
      }))
    );
    console.log(dataWithTrainer);
    return;
  });

  /* onMount(async () => {
    const internalPokes = await fetch(
      `https://api.dev.perfivo.com/pokeapi/v0/pokemon/`
    ).then(r => r.json());

    const dataWithTrainer = await Promise.all(
      internalPokes.map(internalPoke =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${internalPoke.number}/`)
          .then(r => r.json())
          .then(data => ({
            poke: data,
            trainer: internalPoke.trainer
          }))
      )
    );
    // ahora tenes un array de objetos con data y su trainer 
    pokeList = dataWithTrainer.map(e => {
      console.log(e);
    }); */

  /*return {
          id: e.id,
          name: e.name,
          order: e.order,
          weight: e.weight,
          trainer: e.trainer
  
          //tag: e.types[0].type.name || "",
          //img: e.sprites.front_default || ""
        }; 
    //console.log(dataWithTrainer);
    //console.log(pokeList);
  });*/
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
  li {
    list-style: none;
  }
</style>

{#if pokeList}
  {#each pokeList as poke}
    <ul>
      <li>

        <p>...waiting</p>

        <Poke {poke} />

      </li>
    </ul>
  {/each}
{:else}
  <p class="loading">loading...</p>
{/if}
