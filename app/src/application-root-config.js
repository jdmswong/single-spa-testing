import react from "react";
import { App } from "./app";
import singleSpaReact from "single-spa-react";

const reactLifecycles = singleSpaReact({
  react,
  rootComponent: App,
});

export const bootstrap = async (props) => {
  console.log("vite single-spa bootstrap", props);
  return reactLifecycles.bootstrap();
};
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
