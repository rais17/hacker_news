import './App.css';
import Home from './Pages/Home';
import store from './Utils/store';
import NewsDetails from './Pages/NewsDetails';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <section className="min-h-screen w-screen bg-[#F5F5F5] overflow-hidden">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<NewsDetails />} />
        </Routes>
      </Provider>
    </section>
  );
}

export default App;
