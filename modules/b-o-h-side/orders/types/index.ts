interface Order {
  orderId: number,
  orderCart: {
    quantity: number,
    dishName: string,
  }[],
  timeSlot: string,
}


export { Order };