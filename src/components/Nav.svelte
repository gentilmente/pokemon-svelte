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

  let route_names = ["/", "Trainers", "Pokes"];
  let currentRoute = window.location.href.split("/").slice(-1)[0];
</script>

<Navbar color="light" light expand="sm">
  <NavbarBrand href="/">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
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
            {route === '/' ? '' : route}
          </NavLink>
        </NavItem>
      {/each}
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>Options</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Trade</DropdownItem>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem divider />
          <DropdownItem on:click={() => (window.location.reload(false))}>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>

    </Nav>
  </Collapse>
</Navbar>
