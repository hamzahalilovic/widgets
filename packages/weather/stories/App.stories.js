import React from "react";
import App from "../src/App";

export default { title: "Test" };

export const app = () => <App city="tokyo" />;
app.story = {
  name: "App",
};
