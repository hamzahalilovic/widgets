import React from "react";
import App from "../src/App";

export default { title: "Test" };

export const app = () => <App city="moscow" />;
app.story = {
  name: "App",
};
