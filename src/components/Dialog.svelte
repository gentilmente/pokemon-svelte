<script>
  import Select from "svelte-select";
  import loadOptions from "../trainers.js";

  import { getContext } from "svelte";
  export let message;
  export let hasForm = false;
  export let onCancel = () => {};
  export let onOkay = () => {
    alert(ok);
  };

  const { close } = getContext("simple-modal");
  const items = ["One", "Two", "Three"];
  const optionIdentifier = "id";
  const getOptionLabel = option => option.name;
  const getSelectionLabel = option => option.name;
  let value;
  let onChange = () => {};

  function _onCancel() {
    onCancel();
    close();
  }

  function _onOkay() {
    onOkay(value);
    close();
  }

  $: onChange(value);
</script>

<style>
  h2 {
    font-size: 2rem;
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
</style>

<h2>{message}</h2>

{#if hasForm}
  <Select
    {loadOptions}
    {optionIdentifier}
    {getSelectionLabel}
    {getOptionLabel}
    bind:value />
{/if}
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<div class="buttons">
  <button on:click={_onCancel}>Cancel</button>
  <button on:click={_onOkay}>Okay</button>
</div>
