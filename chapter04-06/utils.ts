export function add_element_last<T>(array: T[], elem: T): T[] {
  const new_array = array.slice();
  new_array.push(elem);
  return new_array; // or [...array, elem]
}

export function remove_items<T>(array: T[], idx: number, count: number) {
  const copy = array.slice();
  copy.splice(idx, count);
  return copy; // or filter?
}

export function object_set<T extends {}, K extends keyof T>(
  object: T,
  key: K,
  value: T[K]
): T {
  const copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

export function object_delete<T extends {}, K extends keyof T>(
  object: T,
  key: K
): Omit<T, K> {
  const copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}

const item = {
  name: 'd',
  price: 3,
};
