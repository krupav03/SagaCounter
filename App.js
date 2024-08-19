import { Provider } from "react-redux";
import AppCounter from "./src";
import store from "./Redux/store";

function App () {
  return(
    <Provider store={store}>
      <AppCounter/>
    </Provider>
  )
}

export default App;
