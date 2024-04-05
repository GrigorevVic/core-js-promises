/* [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)] => Promise fulfilled with [1, 2, 3]
 * [Promise.resolve(1), Promise.reject(2), Promise.resolve(3)] => Promise rejected with 2
 */
function getAllOrNothing(promises) {
  try {
    return Promise.all(promises).then((res) => {
      return res;
    });
  } catch (e) {
    return Promise.all(promises).then((res) => {
      return res;
    });
  }
}

console.log(
  getAllOrNothing([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)])
);
