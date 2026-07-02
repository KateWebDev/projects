import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import { createOrder } from "../../services/apiRestaurant";
import { allPriceProducts, clearCart, getCart } from "../cart/cartSlice";
import { getUserName } from "../user/userSlice";

import Button from "../../components/Button";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

function CreateOrder() {
  const [isPriority, setIsPriority] = useState(false);
  const userName = useSelector(getUserName);
  const navigation = useNavigation();
  const formError = useActionData();
  const cart = useSelector(getCart);
  const allPrice = useSelector(allPriceProducts);
  const priority = isPriority ? (allPrice * 20) / 100 : 0;

  const totalSum = allPrice + priority;

  const isSubmitting = navigation.state === "submitting";

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div>
      <h2 className="mb-4 text-lg md:mb-8 sm:text-xl">Ready to order? Let's go!</h2>

      <Form className="space-y-4 md:space-y-8" method="POST" action="/order/new">
        <div className="form-item">
          <label>First Name</label>
          <input
            className="uppercase input focus-element trans"
            type="text"
            name="customer"
            required
            placeholder="Tim"
            defaultValue={userName}
          />
        </div>
        <div className="form-item">
          <label>Phone number</label>
          <div>
            <input
              className="input focus-element trans"
              type="tel"
              name="phone"
              required
              placeholder="+7(999)123-45-67"
            />
          </div>
          {formError?.phone && <p className="text-red-500">{formError.phone}</p>}
        </div>
        <div className="form-item">
          <label>Address</label>
          <div>
            <input className="input focus-element trans" name="address" required />
          </div>
        </div>
        <div className="flex item-center gap-x-2">
          <input
            className="w-5 h-5 accent-yellow-500 focus-element"
            type="checkbox"
            name="priority"
            id="priority"
            value={isPriority}
            onChange={(evt) => setIsPriority(evt.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="submit">
            {!isSubmitting ? `Order now - ${formatCurrency(totalSum)}` : "Placing order..."}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function sending({ request }) {
  const formData = await request.formData();
  const data = await Object.fromEntries(formData);

  const newOrder = {
    ...data,
    priority: data.priority === "true",
    cart: JSON.parse(data.cart),
  };

  const errors = {};
  if (!isValidPhone(newOrder.phone)) {
    errors.phone = "Please, enter correctly number phone";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const order = await createOrder(newOrder);
  store.dispatch(clearCart());
  return redirect(`/order/${order.id}`);
}

export default CreateOrder;
