
<script>
  export let poke;
</script>

<article>
    <h1>{poke.name}</h1>
    <small>
      weight: <b>{poke.weight}</b>   
    </small><br/>
    <small>
      order: <b>{poke.order}</b>
    </small><br/>

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
