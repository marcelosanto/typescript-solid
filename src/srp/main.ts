import { Persistency } from './persistency'
import { Messaging } from './messaging'
import { Order } from './order'
import { ShoppingCart } from './shopping-cart'
import { Product } from './product'

const shoppingCart = new ShoppingCart()
const menssaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, menssaging, persistency)

shoppingCart.addItem(new Product('Camiseta', 49.9))
shoppingCart.addItem(new Product('Caderno', 3.29))
shoppingCart.addItem(new Product('Copo', 19.59))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
order.checkout()
console.log(order.orderStatus)
