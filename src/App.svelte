<script>
  import { Button } from 'sveltestrap';
  import Nav from "./components/Nav.svelte";
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
</script>

<div class="container mt-5">
  <div class="row">
    <div class="col-md-4">
      <h1 class="display-6">Los Pokemones</h1>
      <Nav />
      <section class="section has-navbar-fixed-top">
        <Router {routes} />
      </section>
    </div>
  </div>
</div>
