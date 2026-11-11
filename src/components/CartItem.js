import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    // TODO 13: Dispatch updateQuantity to increase by 1
    dispatch(updateQuantity({id:item.id,quantity:item.quantity+1}));
  };

  const handleDecrease = () => {
    // TODO 14: Dispatch updateQuantity to decrease by 1
    dispatch(updateQuantity({id:item.id,quantity:item.quantity-1}));
  };

  const handleRemove = () => {
    // TODO 15: Dispatch removeItem with the item's id
    dispatch(removeItem(item.id));
  };

  return (
    <div>
      {/* TODO 16: Display item name, price, quantity with +/- buttons, and Remove button */}
      {/*
        Bootstrap classes to use:
        - d-flex, justify-content-between, align-items-center for layout
        - btn btn-sm btn-secondary for +/- buttons
        - btn btn-sm btn-danger for Remove button
        - mb-0 for removing margin from text elements
      */}
      <div className="d-flex justify-content-between align-items-center">
        <div>
            <h6 className="mb-1">{item.name}</h6>
            <p className="mb-1 text-muted">${item.price} each</p>
            <p className="mb-0">Subtotal: ${item.price*item.quantity}</p>
        </div>
        <div className="text-end">
            <div className="mb-2">
                <button className="btn btn-sm btn-secondary me-2" onClick={handleDecrease}>-</button>
                <span>{item.quantity}</span>
                <button className="btn btn-sm btn-secondary ms-2" onClick={handleIncrease}>+</button>
            </div>
            <button className="btn btn-sm btn-danger" onClick={handleRemove}></button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;