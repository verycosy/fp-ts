export interface ShoppingCartItem {
  readonly name: string;
  readonly price: number;
}

export interface BuyButton {
  readonly item: ShoppingCartItem;
  show_free_shipping_icon: () => void;
  hide_free_shipping_icon: () => void;
}

export type Cart = ShoppingCartItem[];
