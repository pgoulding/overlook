import domUpdates from "./domUpdates";

class RoomServiceRepo {
  constructor(data, date) {
    this.data = data;
    this.date = date;
    this.services = this.totalServicesDate(date)
  }

  totalServicesDate(date) {
    console.log('what up')
    let todaysServices = this.data.filter(day => day.date === date)
    domUpdates.allRoomServiceOnDate(todaysServices)
    console.log(todaysServices)
    return todaysServices
  }

}

export default RoomServiceRepo;