import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      {/* TODO 17: Create app layout */}
      {/* - Navbar at top with title "Redux Shopping Cart" */}
      {/* - Two-column layout: Products on left (wider), Cart on right */}
      {/*
        Bootstrap classes to use:
        - navbar, navbar-dark, bg-dark, navbar-brand for the navbar
        - container-fluid for full-width container
        - row for the row
        - col-md-8 for products column
        - col-md-4 for cart column
        - mt-4 for top margin
      */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Redux Shopping Cart</span>
        </div>
      </nav>

      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-8">
            <ProductList/>
          </div>
          <div className="col-md-4">
            <Cart/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;