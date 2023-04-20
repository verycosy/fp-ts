import { BuyButton, ShoppingCartItem } from './type';

const shopping_cart: ShoppingCartItem[] = [];
let shopping_cart_total = 0;

function add_item_to_cart(name: string, price: number) {
  shopping_cart.push({
    name,
    price,
  });

  calc_cart_total();
}

function calc_cart_total() {
  shopping_cart_total = 0;

  for (const item of shopping_cart) {
    shopping_cart_total += item.price;
  }

  set_cart_total_dom();
  update_shipping_icons();
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