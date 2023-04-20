export interface ShoppingCartItem {
  name: string;
  price: number;
}

export interface BuyButton {
  item: ShoppingCartItem;
  show_free_shipping_icon: () => void;
  hide_free_shipping_icon: () => void;
}
