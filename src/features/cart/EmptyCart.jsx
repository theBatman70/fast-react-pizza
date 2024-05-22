import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-20 text-center font-semibold">
        <span className=" text-lg font-medium text-stone-500">
          Your cart is still empty.
        </span>
        <p className="text-xl">Start adding some pizzas :)</p>
      </p>
    </div>
  );
}

export default EmptyCart;
