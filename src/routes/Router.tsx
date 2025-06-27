import { Route, Routes } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Root />}>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Route>
    </Routes>
  );
};

export default Router;
