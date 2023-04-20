import { Cart, ShoppingCartItem } from './type';
import { object_set } from './utils';

export function set_price(
  item: ShoppingCartItem,
  new_price: number
): ShoppingCartItem {
  return object_set(item, 'price', new_price);
}

export function set_price_by_name(cart: Cart, name: string, price: number) {
  const copy_cart = cart.slice();

  const idx = copy_cart.findIndex((item) => item.name === name);
  if (idx !== -1) {
    copy_cart[idx] = set_price(copy_cart[idx], price);
  }

  return copy_cart;
}
