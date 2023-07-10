import { Home } from "./components/Home";
import { Map } from "./components/Map";
import { Editor } from "./components/Editor";

const AppRoutes = [
    {
        index: true,
        path: '/Home',
        element: <Home />
    },
    {
        path: '/Map',
        element: <Map />
    },
    {
        path: '/Editor',
        element: <Editor />
    },
];

export default AppRoutes;
