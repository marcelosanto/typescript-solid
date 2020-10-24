import { Persistency } from './persistency'
import { Messaging } from './messaging'
import { Order } from './order'
import { ShoppingCart } from './shopping-cart'

const shoppingCart = new ShoppingCart()
const menssaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, menssaging, persistency)
shoppingCart.addItem({ name: 'Camiseta', price: 49.9 })
shoppingCart.addItem({ name: 'Caderno', price: 3.29 })
shoppingCart.addItem({ name: 'Copo', price: 19.59 })

console.log(shoppingCart.items)
console.log(shoppingCart.total())
order.checkout()
console.log(order.orderStatus)
