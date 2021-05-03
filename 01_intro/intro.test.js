const {sum, nativeNUll} = require('./intro')

describe('sum', () => {
  test('should return sum of two values', ()=>{
  expect(sum(1, 2)).toBe(3)
  expect(sum(1, 2)).toEqual(3)
})

test('should return value correctly comparing to other values', ()=>{
  expect(sum(2, 2)).toBeGreaterThan(3)
  expect(sum(2, 2)).toBeGreaterThanOrEqual(4)
  expect(sum(2, 2)).toBeLessThan(10)
  expect(sum(2, 2)).toBeLessThanOrEqual(4)

})

test('should sum 2 float values correctly', ()=>{
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
})
});


describe('native null', () => {
  test('should return false value null', ()=>{
    expect(nativeNUll()).toBe(null)
    expect(nativeNUll()).toBeNull()
    expect(nativeNUll()).toBeFalsy()
    expect(nativeNUll()).toBeDefined()
    expect(nativeNUll()).not.toBeTruthy()
    expect(nativeNUll()).not.toBeUndefined()
  })
});

