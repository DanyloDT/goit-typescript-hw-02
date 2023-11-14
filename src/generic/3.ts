/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, R extends object>(objA: T, objB: R) {
  return Object.assign(objA, objB);
}

export {};
