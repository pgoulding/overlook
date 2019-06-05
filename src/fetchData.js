const data = {
  menu: [
    {
      userID: null,
      date: null,
      food: "Reuben Sandwich",
      totalCost: 17.39
    },
    {
      userID: null,
      date: null,
      food: "PBJ Sandwich",
      totalCost: 5.46
    },
    {
      userID: null,
      date: null,
      food: "Tuna Sandwich",
      totalCost: 12.39
    },
    {
      userID: null,
      date: null,
      food: "Ham Sandwich",
      totalCost: 8.19
    },
    {
      userID: null,
      date: null,
      food: "Crab Sandwich",
      totalCost: 15.23
    },
    {
      userID: null,
      date: null,
      food: "Turkey Sandwich",
      totalCost: 7.26
    }
  ]
};

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
  .then(response => response.json())
  .then(remote => data.users = remote.users)
  .catch(err => console.error(err))

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
  .then(response => response.json())
  .then(remote => data.rooms = remote.rooms)
  .catch(err => console.error(err))

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings')
  .then(response => response.json())
  .then(remote => data.bookings = remote.bookings)
  .catch(err => console.error(err))

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices')
  .then(response => response.json())
  .then(remote => data.services = remote.roomServices)
  .catch(err => console.error(err))

export default data;