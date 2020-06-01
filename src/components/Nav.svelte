<script>
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "sveltestrap";

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }

  let route_names = ["/", "trainers", "pokes"];
  let currentRoute = window.location.href.split("/").slice(-1)[0];
</script>

<Navbar color="light" light expand="md">
  <NavbarBrand href="/">
    <img
      src="./components/logo.png"
      width="60"
      height="60"
      alt=""
      loading="lazy" />
  </NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ml-auto" navbar>
      {#each route_names as route}
        <NavItem>
          <NavLink
            href={route}
            class={route === currentRoute ? 'navbar-item is-active' : 'navbar-item'}
            on:click={() => (currentRoute = route)}>
            {route === '/' ? 'home' : route}
          </NavLink>
        </NavItem>
      {/each}
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>Options</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  </Collapse>
</Navbar>
