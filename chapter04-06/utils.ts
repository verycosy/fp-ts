export function add_element_last<T>(array: T[], elem: T): T[] {
  const new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

export function remove_items<T>(array: T[], idx: number, count: number) {
  const copy = array.slice();
  copy.splice(idx, count);
  return copy;
}
