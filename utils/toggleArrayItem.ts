export default function<T> (item: T, array: T[]) {

  const index = array.indexOf(item);

  if (index === -1) {
    array.push(item);
  } else {
    array.splice(index, 1);
  }

}