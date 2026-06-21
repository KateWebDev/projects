import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formError = useActionData();

  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required placeholder="Tom" />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required placeholder="+7(999)123-45-67" />
          </div>
          {formError?.phone && <p>{formError.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input type="checkbox" name="priority" id="priority" />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={isSubmitting}>{!isSubmitting ? "Order now" : "Placing order..."}</button>
        </div>
      </Form>
    </div>
  );
}

export async function sending({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const newOrder = { ...data, priority: data.priority === "on", cart: JSON.parse(data.cart) };

  const errors = {};
  if (!isValidPhone(newOrder.phone)) {
    errors.phone = "Please, enter correctly number phone";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const order = await createOrder(newOrder);

  return redirect(`/order/${order.id}`);
}

export default CreateOrder;
