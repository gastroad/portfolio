import { createRoot } from "react-dom/client";
import "core-js";
import "regenerator-runtime/runtime";

import App from "./App"
import "./assets/css/reset.scss"
import "./assets/css/app.scss"
import React from "react";


createRoot(
    document.getElementById("root") as HTMLElement
).render(
    <React.StrictMode>
        <App />
    </React.StrictMode >
)



