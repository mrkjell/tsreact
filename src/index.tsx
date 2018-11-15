import * as React from "react";
import * as ReactDOM from "react-dom";

import { Message } from "./components/Message";

ReactDOM.render(
    <Message text='Hello world!' />,
    document.getElementById("root")
);