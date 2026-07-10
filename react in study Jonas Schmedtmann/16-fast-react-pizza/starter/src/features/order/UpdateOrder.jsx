import { useFetcher } from "react-router-dom";
import Button from "../../components/Button";
import { updateOrder } from "../../services/apiRestaurant";

export default function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form className="text-right" method="PATCH">
      <Button type="submit">update priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.id, data);
  return null;
}
