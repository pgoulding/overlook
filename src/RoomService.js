import domUpdates from "./domUpdates";

class RoomService {
  constructor(data, menu, customer) {
    this.data = data;
    this.menu = menu;
    this.customer = customer;
  }
  
  // - Breakdown of dates and dollar amounts for room service
  breakDown() {
    let customersService = this.data.filter(service => service.userID === this.customer)
    if(customersService.length === 0) {
      return ['No Information to display']
    } else {
      return customersService
    }
  }
  
  // - Total dollar amount spent on room service for a particular day
  perDate(date) {
    let dayCost = [...this.data].find(food => food.date === date)
    if(dayCost) {
      let total = dayCost.totalCost
        return total
    } else {
      return 0;
    }
  }
// - Total dollar amount spent on room service for a all days ever
  forAllDays() {
    if (this.breakDown() !== 'No Information to display') {
      let totalCost = this.breakDown().reduce((acc, item) => acc += item.totalCost, 0)
        return totalCost || 0;
    }
  }

  orderFood(specDate, sandwich) {
    let sammish = this.menu.find(item => item.food === sandwich)
    let customerOrder = {
      userID: this.customer,
      date: specDate,
        ...sammish
      }
      this.data.push(sammish)
      return customerOrder
  }

  updateInfo(specDate) {
    console.log(specDate);
    
    domUpdates.totalOrdersCost(this.forAllDays());
    domUpdates.customerRoomServiceDate(this.perDate(specDate));
    domUpdates.ordersBreakDown(this.breakDown())
  }

}

export default RoomService;
