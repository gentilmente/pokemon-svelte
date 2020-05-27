
<script>
  // create a prop
  export let poke;
</script>

<article>
    <h1>{poke.name}</h1>
    <small>
      id: <b>{poke.id}</b>   
    </small><br/>
    <small>
      Number: <b>{poke.number}</b>
    </small><br/>
    <small>
      poke's trainer: <b>{poke.id}</b>
    </small>
</article>

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
