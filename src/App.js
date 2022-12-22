import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/navbar/navbar';
import MainContent from './componenets/mainContent/mainContent';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Cart from './componenets/mainContent/cart/cart';


const store = configureStore();
console.log(store);

function App() {
  return (
    <div >
      <Provider store={store}>
        <Navbar />
      </Provider>
      <Routes>
        <Route path='/' element={<Provider store={store}>
          <MainContent />
        </Provider>} />
        <Route path='/cart' element={<Provider store={store}>
          <Cart />
        </Provider>} />
      </Routes>

    </div>
  );
}

export default App;
