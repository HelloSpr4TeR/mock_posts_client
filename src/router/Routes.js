import About from "../pages/About";
import Clock from "../pages/Clock";
import Counter from "../pages/Counter";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";


export const privateRoutes = [
  { path: '/counter', component: Counter },
  { path: '/clock', component: Clock },
  { path: '/about', component: About },
  { path: '/', component: Posts },
  { path: '/posts/:id', component: PostIdPage },
];

export const publicRoutes = [
  { path: '/login', component: Login },
];  