
// function expect(value){
//   return{
//     toBe: exp => {
//       if (value === exp){
//         console.log('success');
//       }else{
//         console.error(`value is ${value} but expectation id ${exp}`);
//       }
//     }
//   }
// }
const sum = (a, b) => a + b;

const nativeNUll = () => null;

module.exports = {sum, nativeNUll};

// expect(sum(2, 4)).toBe(5)