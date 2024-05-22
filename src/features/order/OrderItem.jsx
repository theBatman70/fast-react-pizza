import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="flex justify-between py-3">
      <p>
        <span className="font-semibold">{quantity}&times;</span> {name}
      </p>
      <p className="font-semibold">{formatCurrency(totalPrice)}</p>
    </li>
  );
}

export default OrderItem;
