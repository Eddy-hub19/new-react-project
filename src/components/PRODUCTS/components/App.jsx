import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { ProductDetails } from '../pages/ProductDetails';
// import { Products } from '../pages/Products';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { Container, Header, Logo, Link } from '../components/App.styled';
import { Products } from './ProductList/Product/Product';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <>
      <Container>
        <Header>
          <Logo>
            <span role="img" aria-label="grapes icon">
              🍇
            </span>
            GoMerch Store
          </Logo>
          <nav>
            <Link to={'/'} end>
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
          </nav>
        </Header>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Routes index element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="mission" element={<Mission />} />
              <Route path="team" element={<Team />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
};
