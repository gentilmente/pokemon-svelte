import Home from './pages/Home.svelte';
import Trainers from './pages/Trainers.svelte';
import Pokes from './pages/Pokes.svelte';

export const routes = [
  {
    name: '/',
    component: Home,
  },
  {
    name: 'trainers',
    component: Trainers,
  },
  {
    name: 'pokes',
    component: Pokes
  }
]; 