import { Provider } from "react-redux";
import store from "./redux/store";

console.log("App is running"); // ✅ HERE

export default function App() {
  return <Provider store={store}>{/* your code */}</Provider>;
}
