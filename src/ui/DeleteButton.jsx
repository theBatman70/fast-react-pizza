import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../features/cart/cartSlice";

function DeleteButton({ itemId }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem(itemId));
  }
  return (
    <Button onClick={handleDelete} type="small">
      Delete
    </Button>
  );
}

export default DeleteButton;
