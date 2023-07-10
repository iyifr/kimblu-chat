import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Chat Window screen
import DirectMessage from "./components/containers/DirectMessage/_ui";

const router  = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/chats",
                element: <DirectMessage />
            }
        ]
    },
    {
        path: "/room",
        element: <>Hello room</>
    }
])

export default router