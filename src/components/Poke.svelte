<script>
  import { getContext } from "svelte";
  import { fly } from "svelte/transition";

  import Dialog from "./Dialog.svelte";

  const { open } = getContext("simple-modal") ? getContext("simple-modal") : "";

  let opening = false;
  let opened = false;
  let closing = false;
  let closed = false;
  let name;
  let status = 0;

  export let poke;

  const onCancel = text => {
    name = "";
    status = -1;
  };

  const onOkay = text => {
    name = text;
    status = 1;
  };
  function showDialog() {
    open(
      Dialog,
      {
        message: "pick a trainer",
        hasForm: true,
        onCancel,
        onOkay
      },
      {
        closeButton: false,
        closeOnEsc: false,
        closeOnOuterClick: false
      }
    );
  }
</script>

<style>
  .card {
    margin-top: 1.5em;
    background-color: whitesmoke;
    padding: 1.5rem 1.5rem 0rem 1.5rem;
    border-radius: 20px;
    box-shadow: 12px 12px 24px rgba(128, 128, 128, 0.2), -12px -12px 12px white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card:hover {
    animation: wiggle 0.3s;
  }
  .card__title {
    font-weight: 800;
    font-size: 1.2rem;
    color: #43a047;
  }
  .card__tag {
    font-size: 0.6rem;
    text-transform: uppercase;
    color: white;
    padding: 0.2rem 0.5rem;
    margin: 0.5rem 1rem;
    background-color: #43a047;
    border-radius: 50px;
    cursor: pointer;
  }

  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>

<div class="card" on:click={showDialog}>
  <div class="card__title" id="pokeName">{poke.name}</div>
  <p class="ccard__weight" id="pokeID">#{poke.id}</p>
  {#if poke.trainer}
    <p class="ccard__weight" id="pokeID">trainer: {poke.trainer}</p>
    <p class="card__weight" id="pokeWeight">ID: {poke.internalId}</p>
  {/if}
  <div class="card__tag" id="pokeTag">
    {poke.tag || poke.types[0].type.name}
  </div>
  <div class="card__img">
    <img src={poke.img || poke.sprites.front_default} alt="" id="pokeImg" />
  </div>

</div>
