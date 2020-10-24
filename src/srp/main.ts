import { Persistency } from './services/persistency'
import { Messaging } from './services/messaging'
import { Order } from './entities/order'
import { ShoppingCart } from './entities/shopping-cart'
import { Product } from './entities/product'

const shoppingCart = new ShoppingCart()
const menssaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, menssaging, persistency)

shoppingCart.addItem(new Product('Camiseta', 49.9))
shoppingCart.addItem(new Product('Caderno', 3.29))
shoppingCart.addItem(new Product('Copo', 19.59))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
