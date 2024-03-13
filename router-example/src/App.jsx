import './App.css'
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import Product from './pages/Product';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  )
}

export default App
