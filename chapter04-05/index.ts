import { BuyButton, Cart, ShoppingCartItem } from './type';

let shopping_cart: Cart = [];
let shopping_cart_total = 0;

function add_item(cart: Cart, name: string, price: number) {
  const new_cart = cart.slice();
  new_cart.push({ name, price });

  return new_cart;
}

function add_item_to_cart(name: string, price: number) {
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total();
}

function calc_total(cart: Cart) {
  let total = 0;
  for (const item of cart) {
    total += item.price;
  }
  return total;
}

function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

function set_cart_total_dom() {
  // TODO: DOM 업데이트
  console.log(shopping_cart_total);
}

function get_buy_buttons_dom(): BuyButton[] {
  return [];
}

function isFreeShipping(cart: Cart) {
  return calc_total(cart) >= 20;
}

function update_shipping_icons() {
  const buttons = get_buy_buttons_dom();

  for (const button of buttons) {
    const item = button.item;
    const new_cart = add_item(shopping_cart, item.name, item.price);

    if (isFreeShipping(new_cart)) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}

function set_tax_dom(tax: number) {
  // TODO: DOM 업데이트
  console.log(tax);
}

function calc_tax(amount: number) {
  return amount * 0.1;
}

function update_tax_dom() {
  set_tax_dom(calc_tax(shopping_cart_total));
}
