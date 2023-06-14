
import './App.css';
import { BrowserRouter , Routes , Route ,Outlet} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';


function App() {
  return (
    
    <div className='App'>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element = {<HomePage />}/>

          <Route path = "/products" element ={<HomePage />}/>
          <Route path='/products/:id' element = {<ProductDetailsPage />} />
          <Route path='/contact' element = {<ContactPage/>} />
          <Route path='/*' element = {<NotFoundPage />} />

        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
