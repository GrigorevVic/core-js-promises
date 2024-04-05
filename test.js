const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(2);
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 50));
const promise4 = new Promise((resolve) => setTimeout(() => resolve(4), 100));
const promise5 = new Promise((resolve) => setTimeout(() => resolve(5), 150));
const promise6 = new Promise((reject) => setTimeout(() => reject(6), 10));
const promise7 = Promise.resolve(7);
const promise8 = Promise.resolve(8);
const promise9 = Promise.resolve(9);

//[promise3, promise6, promise1] => Promise fulfilled with 1
//[promise4, promise3, promise5] => Promise fulfilled with 3
//[promise3, promise6, promise2] => Promise rejected with 2
//[promise3, promise4, promise6] => Promise rejected with 6

function getFirstPromiseResult(promises) {
  let a;
  const res = Promise.race(promises);
  res.then((result) => (a = result));
  return a;
}

console.log(getFirstPromiseResult([promise7, promise8, promise9]));