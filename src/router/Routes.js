import About from "../pages/About";
import Clock from "../pages/Clock";
import Tracker from "../pages/Tracker";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Training from "../pages/Training";


export const privateRoutes = [
  { path: '/tracker', component: Tracker },
  { path: '/clock', component: Clock },
  { path: '/about', component: About },
  { path: '/training', component: Training },
  { path: '/', component: Posts },
  { path: '/posts/:id', component: PostIdPage },
];

export const publicRoutes = [
  { path: '/login', component: Login },
];  