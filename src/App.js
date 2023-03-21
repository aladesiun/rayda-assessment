import './App.css';
import { ItemsApi } from "./features/itemsSlice";
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { Provider } from 'react-redux';
import { store } from './store/index';
import Welcome from './components/welcome';
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <>
      <Provider store={store}>
        <ApiProvider api={ItemsApi}>
          <Welcome />
        </ApiProvider>
      </Provider>
      <Toaster />

    </>
  );
}

export default App;
