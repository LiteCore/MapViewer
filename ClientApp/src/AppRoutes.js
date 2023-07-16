import { Home } from "./components/Home";
import MapEditor from "./components/Map";
import { Editor } from "./components/Editor";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/Map',
        element: <MapEditor />
    },
    {
        path: '/Editor',
        element: <Editor />
    },
];

export default AppRoutes;
