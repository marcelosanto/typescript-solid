import { Messaging } from '../services/messaging'
import { ShoppingCart } from './shopping-cart'
import { orderStatus } from './interfaces/order-status'
import { Persistency } from '../services/persistency'

export class Order {
  private _orderStatus: orderStatus = 'open'

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): orderStatus {
    return this._orderStatus
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrionho está vazio')
      return
    }

    this._orderStatus = 'closed'
    this.messaging.sendMessage(`Seu pedido ${this.cart.total()} foi recebido.`)
    this.persistency.saveOrder()
    this.cart.clear()
  }
}
