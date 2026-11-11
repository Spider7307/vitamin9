import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import products from '../data/products';

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // TODO 6: Dispatch addItem action with the product
    dispatch(addItem(product));
  };

  return (
    <div>
      <h2 class="mb-4">Products</h2>
      {/* TODO 7: Create a grid of product cards */}
      {/* Map over products and display each one */}
      {/* 
        Bootstrap classes to use:
        - row, col-md-3 (or col-md-4) for grid layout
        - card, card-body, card-title, card-img-top for cards
        - btn btn-primary for the Add to Cart button
      */}
      <div className="row">
        {products.map(product=>(
            <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100">
                    <img src={product.image} className="card-img-top" alt={product.name}/>
                    <div className="card-body">
                        <h5 className="card-title">
                            {product.name}
                        </h5>
                        <p className="card-text">
                            ${product.price.toFixed(2)}
                            </p>
                        <button class="btn btn-primary" onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;