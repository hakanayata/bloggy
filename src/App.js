import './App.css';
import AppRouter from "../src/router/AppRouter"
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { ToastContainer } from 'react-toastify';
import { PersistGate } from "redux-persist/integration/react"

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
