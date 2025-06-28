import { Route, Routes } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Auth from '../layout/Auth';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Root />}>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Route>
      <Route path='/' element={<Auth />}>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default Router;
