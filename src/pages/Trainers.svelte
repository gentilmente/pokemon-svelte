<script>
  import { onMount } from "svelte";
  import Trainer from "../components/Trainer.svelte";
  // define the data holding variable
  let trainers;
  const url = "https://api.dev.perfivo.com/pokeapi/v0/trainers/";

  let query = "";
  let id = "";
  let result;

  async function setNewTrainer() {
    await fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify({ name: query }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  }

  async function deleteTrainer() {
    await fetch(url + id.trim() + "/", {
      method: "DELETE", // or 'PUT'
      body: JSON.stringify({ id: id.trim() }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  }

  onMount(async () => {
    await fetch(url)
      .then(r => r.json())
      .then(data => {
        //console.log(data);
        trainers = data;
      });
  });
</script>

<style>
  form {
    margin-top: 20px;
    margin-bottom: 20px;
  }
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

<form class="form-inline" on:submit|preventDefault={setNewTrainer}>
  <input class="w-70 form-control" placeholder="name" bind:value={query} />
  <button class="w-30 btn btn-dark">create new</button>
</form>

<form class="form-inline" on:submit|preventDefault={deleteTrainer}>
  <input class="w-70 form-control" placeholder="id" bind:value={id} />
  <button class="w-30 btn btn-danger">delete</button>
</form>

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
