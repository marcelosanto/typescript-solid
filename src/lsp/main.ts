/*
  LSP - Liskov Substitution Principle (Princípio da Substituição de Liskov)
*/

import { Persistency } from './services/persistency'
import { Messaging } from './services/messaging'
import { Order } from './classes/order'
import { ShoppingCart } from './classes/shopping-cart'
import { Product } from './classes/product'
import { NoDiscount } from './classes/discount'

const noDiscount = new NoDiscount()
const shoppingCart = new ShoppingCart(noDiscount)
const menssaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, menssaging, persistency)

shoppingCart.addItem(new Product('Camiseta', 49.9))
shoppingCart.addItem(new Product('Caderno', 3.29))
shoppingCart.addItem(new Product('Copo', 19.59))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
