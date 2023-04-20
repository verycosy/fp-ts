import { BuyButton, Cart, ShoppingCartItem } from './type';

const shopping_cart: Cart = [];

function add_element_last<T>(array: T[], elem: T): T[] {
  const new_array = array.slice();
  new_array.push(elem);
  return new_array;
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
  const new_cart = add_item(cart, item);

  const amount = calc_total(new_cart);
  set_cart_total_dom(amount);
  update_shipping_icons(new_cart);
  update_tax_dom(amount);
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

function isFreeShipping(cart: Cart): boolean {
  return calc_total(cart) >= 20;
}

function update_shipping_icons(cart: Cart): void {
  const buttons = get_buy_buttons_dom();

  for (const button of buttons) {
    const item = button.item;
    const new_cart = add_item(cart, item);

    if (isFreeShipping(new_cart)) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
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

add_item_to_cart(shopping_cart, 'name', 3000);
