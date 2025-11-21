interface Product {
  name: string;
  price: number;
  amount: number;
  discount: number;
}

class Order {
  orderId: number;
  customerName: string;
  items: Product[];
  totalAmount: number;

  constructor(orderId: number, customerName: string) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.items = [];
    this.totalAmount = 0;
  }

  addItem(product: Product) {
    this.items.push(product);
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = this.items.reduce((total, item) => {
      const itemCost = item.price * item.amount * (1 - item.discount / 100);
      return total + itemCost;
    }, 0);
  }

  displayOrderInfo(): void {
    console.log(`Order ID: ${this.orderId}`);
    console.log(`Customer: ${this.customerName}`);
    console.log("Items:");
    this.items.forEach((item, index) => {
      console.log(`  ${index + 1}. ${item.name}: $${item.price} x ${item.amount}, Discount: ${item.discount * 100}%, Total: $${(item.price * item.amount * (1 - item.discount))}`);
    });
    console.log(`Total Amount: $${this.totalAmount}`);
  }
}

const order = new Order(1, "Nguyen Van A");
order.addItem({ name: "Laptop", price: 1000, amount: 1, discount: 10 }); // Giảm 10%
order.addItem({ name: "Mouse", price: 50, amount: 2, discount: 0 }); // Không giảm
order.displayOrderInfo();
