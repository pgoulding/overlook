import domUpdates from "./domUpdates";

class RoomService {
  constructor(data, customer) {
    this.data = data;
    this.customer = customer;
  }
  
  // - Breakdown of dates and dollar amounts for room service
  breakDown() {
    let customersService = [...this.data].filter(service => service.userID === this.customer)
    if(customersService.length === 0) {
      return 'No Information to display'
    } else {
      domUpdates.ordersBreakDown(customersService)
      return customersService
    }
  }
  
  // - Total dollar amount spent on room service for a particular day
  perDate(date) {
    let dayCost = [...this.data].find(food => food.date === date).totalCost
    if (!dayCost) {
      return 'No Information to display' 
    } else {
      
      return dayCost;
    }
  }
// - Total dollar amount spent on room service for a all days ever
  forAllDays() {
    let totalCost = this.breakDown().reduce((acc, item) => acc += item.totalCost, 0)
    if (!totalCost) {
      return 'No Information to Display'
    } else {
      domUpdates.totalOrdersCost()
      return totalCost;
    }
  }

}

export default RoomService;

//  when a valid customer has been selected,
//  clicking on the`Orders` icon  will take me to the`Orders` tab.
//  The`Orders` tab will display customer specific information:




//  If there is no valid information for this customer,
//  I will be notified that no valid data exists.