class RoomRepo {
  constructor(data) {
    this.data = [...data]
  }


}

export default RoomRepo

// When I visit the main application tab,
//   clicking on the`Rooms` icon will take me to the`Rooms` tab.
//     The`Rooms` tab will default to display the following:

// - Most popular booking date
//   - The date with the most rooms available

// I will also see an input that will allow me to search for what rooms are available for a specified date.

  //- Total Rooms Available for today's date
  // - Total of debt's owed/earned for today's date
  //   - Percentage of rooms occupied for today's date