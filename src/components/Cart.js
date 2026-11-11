import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import CartItem from './CartItem';

function Cart() {
  const dispatch = useDispatch();
  
  // TODO 8: Use useSelector to get items from the cart state
  // TODO 9: Use useSelector to get totalQuantity from the cart state
    const items = useSelector(state=>state.cart.items);
    const totalQuantity = useSelector(state=>state.cart.totalQuantity);

  const handleClearCart = () => {
    // TODO 10: Dispatch clearCart action
    dispatch(clearCart());
  };

  // TODO 11: Calculate total price (price * quantity for each item)
  const totalPrice = items.reduce((total,item)=>total+item.price*item.quantity,0);

  return (
    <div className="card">
      {/* TODO 12: Build the cart UI */}
      {/* Show: "Cart (X items)" title, list of CartItem components, total price, Clear Cart button */}
      {/* If cart is empty, show "Your cart is empty" */}
      {/*
        Bootstrap classes to use:
        - card, card-header, card-body for the container
        - list-group, list-group-item for the items list
        - btn btn-danger for the Clear Cart button
        - text-muted for empty cart message
      */}
        <div className="card-header">
            <h4 className="mb-0">Cart({totalQuantity} items)</h4>
        </div>
        <div className="card-body">
            {items.length===0 ? (
                <p className="text-muted">Your Cart is empty</p>
            ) : (
                <>
                <ul className="list-group mb-3">
                    {items.map(item=>(
                        <li className="list-group-item" key={item.id}>
                            <CartItem item={item}/>
                        </li>
                    ))}
                </ul>
                <h5>Total: ${totalPrice.toFixed(2)}</h5>
                <button className="btn btn-danger mt-3 w-100" onClick={handleClearCart}>Clear Cart</button>
                </>
            )
        }
        </div>
    </div>
  );
}

export default Cart;