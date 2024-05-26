import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export async function action({ params }) {
  const updateObj = { priority: true };
  await updateOrder(params.orderId, updateObj);
  return null;
}

export default UpdateOrder;
