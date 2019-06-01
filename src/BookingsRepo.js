class BookingRepo {
  constructor(data) {
    this.data = data;
  }
  mostBookedDate() {
    let copiedArray = [...this.data]
    // let sorted = copiedArray.sort((date1, date2) => {
    //   return date1.split('/') - date2.split('/')
    // })
    // return sorted
  }

  leastBookedDate() {

  }
}


export default BookingRepo