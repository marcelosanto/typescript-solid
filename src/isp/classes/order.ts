import { Messaging } from '../services/messaging'
import { ShoppingCart } from './shopping-cart'
import { orderStatus } from './interfaces/order-status'
import { Persistency } from '../services/persistency'
import { CustomerOrder } from './interfaces/custumer-protocol'

export class Order {
  private _orderStatus: orderStatus = 'open'

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): orderStatus {
    return this._orderStatus
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio')
      return
    }

    this._orderStatus = 'closed'
    this.messaging.sendMessage(
      `Seu pedido ${this.cart.totalWithDiscount()} foi recebido.`,
    )
    this.persistency.saveOrder()
    this.cart.clear()
    console.log(
      `O cliente é: ${this.customer.getName()}, ${this.customer.getIDN()}`,
    )
  }
}
