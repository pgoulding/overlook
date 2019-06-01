class RoomService {
  constructor(data, customer) {
    this.data = data;
    this.customer = customer;
  }

  breakDown() {
    let customersService = [...this.data].filter(service => service.userID === this.customer)
    if(customersService.length === 0) {
      return 'No Information to display'
    } else {
      return customersService
    }
  }

  perDate(date) {
    let dayCost = [...this.data].find(food => food.date === date).totalCost
    if (!dayCost) {
      return 'No Information to display' 
    } else {
      return dayCost;
    }
  }

  forAllDays() {
    let totalCost = this.breakDown().reduce((acc, item) => acc += item.totalCost, 0)
    if (!totalCost) {
      return 'No Information to Display'
    } else {
      return totalCost;
    }
  }

}

export default RoomService;

//  when a valid customer has been selected,
//  clicking on the`Orders` icon  will take me to the`Orders` tab.
//  The`Orders` tab will display customer specific information:

// - Breakdown of dates and dollar amounts for room service
// - Total dollar amount spent on room service for a particular day
// - Total dollar amount spent on room service for a all days ever


//  If there is no valid information for this customer,
//  I will be notified that no valid data exists.