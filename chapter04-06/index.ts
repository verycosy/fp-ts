import { BuyButton, Cart, ShoppingCartItem } from './type';

let shopping_cart: Cart = [];

function add_element_last<T>(array: T[], elem: T): T[] {
  const new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

function remove_items<T>(array: T[], idx: number, count: number) {
  const copy = array.slice();
  copy.splice(idx, count);
  return copy;
}

function make_cart_item(name: string, price: number): ShoppingCartItem {
  return {
    name,
    price,
  };
}

function add_item(cart: Cart, item: ShoppingCartItem): Cart {
  return add_element_last(cart, item);
}

function add_item_to_cart(cart: Cart, name: string, price: number): void {
  const item = make_cart_item(name, price);
  shopping_cart = add_item(cart, item);

  const amount = calc_total(shopping_cart);
  set_cart_total_dom(amount);
  update_shipping_icons(shopping_cart);
  update_tax_dom(amount);
}

function remove_item_by_name(cart: Cart, name: string): Cart {
  const idx = cart.findIndex((item) => item.name === name);
  if (idx !== -1) {
    return remove_items(cart, idx, 1);
  }

  return cart;
}

function calc_total(cart: Cart): number {
  let total = 0;
  for (const item of cart) {
    total += item.price;
  }
  return total;
}

function set_cart_total_dom(amount: number): void {
  // TODO: DOM 업데이트
  console.log(amount);
}

function get_buy_buttons_dom(): BuyButton[] {
  return [];
}

function is_free_shipping(cart: Cart): boolean {
  return calc_total(cart) >= 20;
}

function is_free_shipping_with_item(
  cart: Cart,
  item: ShoppingCartItem
): boolean {
  const new_cart = add_item(cart, item);
  return is_free_shipping(new_cart);
}

function set_free_shipping_icon(button: BuyButton, is_free: boolean) {
  if (is_free) {
    button.show_free_shipping_icon();
  } else {
    button.hide_free_shipping_icon();
  }
}

function update_shipping_icons(cart: Cart): void {
  const buttons = get_buy_buttons_dom();

  for (const button of buttons) {
    const item = button.item;
    const is_free = is_free_shipping_with_item(cart, item);
    set_free_shipping_icon(button, is_free);
  }
}

function set_tax_dom(tax: number): void {
  // TODO: DOM 업데이트
  console.log(tax);
}

function calc_tax(amount: number): number {
  return amount * 0.1;
}

function update_tax_dom(amount: number): void {
  set_tax_dom(calc_tax(amount));
}

function delete_handler(name: string) {
  shopping_cart = remove_item_by_name(shopping_cart, name);

  const amount = calc_total(shopping_cart);
  set_cart_total_dom(amount);
  update_shipping_icons(shopping_cart);
  update_tax_dom(amount);
}

add_item_to_cart(shopping_cart, 'name', 3000);
delete_handler('name');
