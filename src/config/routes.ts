import Home from '../pages/Home'
import YourReports from '../pages/YourReports'
import About from '../pages/About'
import TheMap from '../pages/TheMap'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/yourreports",
      component: YourReports,
      name: "YourReports",
    },
    {
      path: "/about",
      component: About,
      name: "About",
    },
    {
      path: "/themap",
      component: TheMap,
      name: "TheMap",
    }
];

export default routes