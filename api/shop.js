
const _products = [
  {"id": 1, "title": "Black Hat", "price": 20.01, "inventory": 2},
  {"id": 2, "title": "Black Shoes", "price": 100.99, "inventory": 10},
  {"id": 3, "title": "Blue Jacket", "price": 199.99, "inventory": 5}
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
