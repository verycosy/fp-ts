import { BuyButton, Cart } from './type';

const shopping_cart: Cart = [];

function add_item(cart: Cart, name: string, price: number) {
  const new_cart = cart.slice();
  new_cart.push({ name, price });

  return new_cart;
}

function add_item_to_cart(cart: Cart, name: string, price: number) {
  const new_cart = add_item(cart, name, price);

  const amount = calc_total(new_cart);
  set_cart_total_dom(amount);
  update_shipping_icons(new_cart);
  update_tax_dom(amount);
}

function calc_total(cart: Cart) {
  let total = 0;
  for (const item of cart) {
    total += item.price;
  }
  return total;
}

function set_cart_total_dom(amount: number) {
  // TODO: DOM 업데이트
  console.log(amount);
}

function get_buy_buttons_dom(): BuyButton[] {
  return [];
}

function isFreeShipping(cart: Cart) {
  return calc_total(cart) >= 20;
}

function update_shipping_icons(cart: Cart) {
  const buttons = get_buy_buttons_dom();

  for (const button of buttons) {
    const item = button.item;
    const new_cart = add_item(cart, item.name, item.price);

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

function update_tax_dom(amount: number) {
  set_tax_dom(calc_tax(amount));
}

add_item_to_cart(shopping_cart, 'name', 3000);
