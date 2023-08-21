import react from "react";
import { App } from "./app";
import singleSpaReact from "single-spa-react";

const preactLifecycles = singleSpaReact({
  react,
  rootComponent: App,
});

export const bootstrap = async (props) => {
  console.log("vite single-spa bootstrap", props);
  return preactLifecycles.bootstrap();
};
export const mount = preactLifecycles.mount;
export const unmount = preactLifecycles.unmount;
