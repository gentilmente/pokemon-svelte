<script>
  import Nav from "./components/Nav.svelte";
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
</script>

<h1 class="display-6">Los Pokemones</h1>
<Nav />
<section class="section has-navbar-fixed-top">
  <Router {routes} />
</section>
