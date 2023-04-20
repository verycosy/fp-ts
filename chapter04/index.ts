import { BuyButton, ShoppingCartItem } from './type';

let shopping_cart: ShoppingCartItem[] = [];
let shopping_cart_total = 0;

function add_item(cart: ShoppingCartItem[], name: string, price: number) {
  const new_cart = cart.slice();
  new_cart.push({ name, price });

  return new_cart;
}

function add_item_to_cart(name: string, price: number) {
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total();
}

function calc_total(cart: ShoppingCartItem[]) {
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

function update_shipping_icons() {
  const buttons = get_buy_buttons_dom();

  for (const button of buttons) {
    const item = button.item;

    if (item.price + shopping_cart_total >= 20) {
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

function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.1);
}
