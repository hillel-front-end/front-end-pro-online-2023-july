import Router from "@/plugins/router";
import Movies from "@/pages/movies";
import SignIn from "@/pages/signIn";
import NotFound from "@/pages/notFound";


const routes = [
  {
    path: '/',
    component: Movies
  },
  {
    path: '/signIn',
    component: SignIn
  },
  {
    path: '*',
    component: NotFound
  }
];


export const router = new Router(routes);

console.log(router, 'router');