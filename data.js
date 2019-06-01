const users = [
  {
    id: 1,
    name: "Autumn Toy"
  },
  {
    id: 2,
    name: "Jannie VonRueden"
  },
  {
    id: 3,
    name: "Anya Upton"
  },
  {
    id: 4,
    name: "Milo Ankunding"
  },
  {
    id: 5,
    name: "Reginald Schaden"
  },
  {
    id: 6,
    name: "Sedrick Bayer"
  },
  {
    id: 7,
    name: "Kathryn Medhurst"
  },
  {
    id: 8,
    name: "Meredith Jenkins"
  },
  {
    id: 9,
    name: "Florine Jaskolski"
  },
  {
    id: 10,
    name: "Kiel O'Reilly"
  },
  {
    id: 11,
    name: "Jake Jenkins"
  },
  {
    id: 12,
    name: "Maynard Langworth"
  },
  {
    id: 13,
    name: "Lorenz Dare"
  },
  {
    id: 14,
    name: "Lura Kshlerin"
  },
  {
    id: 15,
    name: "Sigurd Hoppe"
  },
  {
    id: 16,
    name: "Julie Reilly"
  },
  {
    id: 17,
    name: "Kianna Walter"
  },
  {
    id: 18,
    name: "Meggie Rice"
  },
  {
    id: 19,
    name: "Muriel McGlynn"
  },
  {
    id: 20,
    name: "Kelley VonRueden"
  },
  {
    id: 21,
    name: "Immanuel Witting"
  },
  {
    id: 22,
    name: "Pearl Harber"
  },
  {
    id: 23,
    name: "Michaela Swaniawski"
  },
  {
    id: 24,
    name: "Kenyon Mohr"
  },
  {
    id: 25,
    name: "Forest Swaniawski"
  },
  {
    id: 26,
    name: "Ervin Larson"
  },
  {
    id: 27,
    name: "Elmer Hyatt"
  },
  {
    id: 28,
    name: "Dominique Beier"
  },
  {
    id: 29,
    name: "Elwyn Homenick"
  },
  {
    id: 30,
    name: "Jeremy Quigley"
  },
  {
    id: 31,
    name: "Michaela Jakubowski"
  },
  {
    id: 32,
    name: "Eugene Corkery"
  },
  {
    id: 33,
    name: "Pierce Hilll"
  },
  {
    id: 34,
    name: "Jadyn Doyle"
  },
  {
    id: 35,
    name: "Henry Wiza"
  },
  {
    id: 36,
    name: "Rubie Stanton"
  },
  {
    id: 37,
    name: "Euna Batz"
  },
  {
    id: 38,
    name: "Fannie Effertz"
  },
  {
    id: 39,
    name: "Clifford Schoen"
  },
  {
    id: 40,
    name: "Danny Ankunding"
  },
  {
    id: 41,
    name: "Meda Ledner"
  },
  {
    id: 42,
    name: "Chaya Pouros"
  },
  {
    id: 43,
    name: "Andy Casper"
  },
  {
    id: 44,
    name: "Maureen Jaskolski"
  },
  {
    id: 45,
    name: "Davonte Kutch"
  },
  {
    id: 46,
    name: "Myrl Osinski"
  },
  {
    id: 47,
    name: "Hubert Parker"
  },
  {
    id: 48,
    name: "Josue Blick"
  },
  {
    id: 49,
    name: "Leola Ratke"
  },
  {
    id: 50,
    name: "Tommie Bogan"
  },
  {
    id: 51,
    name: "Jeremie Skiles"
  },
  {
    id: 52,
    name: "Michael Vandervort"
  },
  {
    id: 53,
    name: "Florencio Crist"
  },
  {
    id: 54,
    name: "Hermann Ryan"
  },
  {
    id: 55,
    name: "Yesenia Thiel"
  },
  {
    id: 56,
    name: "Olin Johns"
  },
  {
    id: 57,
    name: "Valentine Considine"
  },
  {
    id: 58,
    name: "Santa Kautzer"
  },
  {
    id: 59,
    name: "Adan Aufderhar"
  },
  {
    id: 60,
    name: "Hilbert Torphy"
  },
  {
    id: 61,
    name: "Vena Pfeffer"
  },
  {
    id: 62,
    name: "Alphonso MacGyver"
  },
  {
    id: 63,
    name: "Casandra Larson"
  },
  {
    id: 64,
    name: "Emilio Jacobson"
  },
  {
    id: 65,
    name: "Sonny Hickle"
  },
  {
    id: 66,
    name: "Nova Hayes"
  },
  {
    id: 67,
    name: "Elinore Wehner"
  },
  {
    id: 68,
    name: "Rahul Wintheiser"
  },
  {
    id: 69,
    name: "Keith Schmidt"
  },
  {
    id: 70,
    name: "Gabriella Anderson"
  },
  {
    id: 71,
    name: "Fabian Rodriguez"
  },
  {
    id: 72,
    name: "Amelie Wolff"
  },
  {
    id: 73,
    name: "Anabelle Fahey"
  },
  {
    id: 74,
    name: "Wilhelm Hegmann"
  },
  {
    id: 75,
    name: "Rosario Langosh"
  },
  {
    id: 76,
    name: "Myrtle Effertz"
  },
  {
    id: 77,
    name: "Garett Reichert"
  },
  {
    id: 78,
    name: "Alverta Bosco"
  },
  {
    id: 79,
    name: "Destinee Olson"
  },
  {
    id: 80,
    name: "Dakota Nader"
  },
  {
    id: 81,
    name: "Guy Haley"
  },
  {
    id: 82,
    name: "Alan Doyle"
  },
  {
    id: 83,
    name: "Ethel Hudson"
  },
  {
    id: 84,
    name: "Ford Bode"
  },
  {
    id: 85,
    name: "Jaclyn Rath"
  },
  {
    id: 86,
    name: "Cesar Ledner"
  },
  {
    id: 87,
    name: "Elenora Fadel"
  },
  {
    id: 88,
    name: "Matilda Lind"
  },
  {
    id: 89,
    name: "Nash Cole"
  },
  {
    id: 90,
    name: "Lauriane Langworth"
  },
  {
    id: 91,
    name: "Dale Mayert"
  },
  {
    id: 92,
    name: "Shad Klein"
  },
  {
    id: 93,
    name: "Declan Koelpin"
  },
  {
    id: 94,
    name: "Myrtis Stroman"
  },
  {
    id: 95,
    name: "Adriana Gleichner"
  },
  {
    id: 96,
    name: "Willy Halvorson"
  },
  {
    id: 97,
    name: "Kiel Hauck"
  },
  {
    id: 98,
    name: "Kaleb Kovacek"
  },
  {
    id: 99,
    name: "Carlo Simonis"
  },
  {
    id: 100,
    name: "Sarai Bradtke"
  }
]

const rooms = [
  {
    number: 1,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 344.58
  },
  {
    number: 2,
    roomType: "single room",
    bidet: true,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 462.7
  },
  {
    number: 3,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 344.89
  },
  {
    number: 4,
    roomType: "junior suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 192.48
  },
  {
    number: 5,
    roomType: "junior suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 269.65
  },
  {
    number: 6,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 426.45
  },
  {
    number: 7,
    roomType: "residential suite",
    bidet: true,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 441.66
  },
  {
    number: 8,
    roomType: "single room",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 254.9
  },
  {
    number: 9,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 405.85
  },
  {
    number: 10,
    roomType: "junior suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 275.32
  },
  {
    number: 11,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 493.85
  },
  {
    number: 12,
    roomType: "single room",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 176.99
  },
  {
    number: 13,
    roomType: "residential suite",
    bidet: true,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 417.08
  },
  {
    number: 14,
    roomType: "single room",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 217.17
  },
  {
    number: 15,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 159.65
  },
  {
    number: 16,
    roomType: "junior suite",
    bidet: false,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 239.54
  },
  {
    number: 17,
    roomType: "junior suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 259.06
  },
  {
    number: 18,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 444.27
  },
  {
    number: 19,
    roomType: "junior suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 229.67
  },
  {
    number: 20,
    roomType: "suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 258.1
  },
  {
    number: 97,
    roomType: "suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 258.1
  },
  {
    number: 143,
    roomType: "suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 210.1
  }
];

const bookings = [
  {
    userID: 78,
    date: "21/08/2019",
    roomNumber: 143
  },
  {
    userID: 43,
    date: "05/10/2019",
    roomNumber: 108
  },
  {
    userID: 5,
    date: "31/08/2019",
    roomNumber: 8
  },
  {
    userID: 14,
    date: "17/07/2019",
    roomNumber: 192
  },
  {
    userID: 83,
    date: "15/01/2020",
    roomNumber: 118
  },
  {
    userID: 61,
    date: "07/02/2020",
    roomNumber: 158
  },
  {
    userID: 31,
    date: "22/02/2020",
    roomNumber: 73
  },
  {
    userID: 34,
    date: "21/10/2019",
    roomNumber: 97
  },
  {
    userID: 62,
    date: "07/10/2019",
    roomNumber: 51
  },
  {
    userID: 74,
    date: "18/07/2019",
    roomNumber: 123
  },
  {
    userID: 88,
    date: "17/11/2019",
    roomNumber: 99
  },
  {
    userID: 45,
    date: "19/08/2019",
    roomNumber: 166
  },
  {
    userID: 92,
    date: "22/09/2019",
    roomNumber: 21
  },
  {
    userID: 69,
    date: "03/11/2019",
    roomNumber: 28
  },
  {
    userID: 76,
    date: "14/06/2019",
    roomNumber: 124
  },
  {
    userID: 44,
    date: "16/07/2019",
    roomNumber: 169
  },
  {
    userID: 7,
    date: "29/09/2019",
    roomNumber: 50
  },
  {
    userID: 48,
    date: "06/11/2019",
    roomNumber: 150
  },
  {
    userID: 67,
    date: "03/10/2019",
    roomNumber: 3
  },
  {
    userID: 46,
    date: "04/08/2019",
    roomNumber: 180
  }
];

const roomServices = [
  {
    userID: 34,
    date: "21/10/2019",
    food: "Generic Plastic Sandwich",
    totalCost: 9.48
  },
  {
    userID: 37,
    date: "24/12/2019",
    food: "Generic Soft Sandwich",
    totalCost: 24.24
  },
  {
    userID: 9,
    date: "15/07/2019",
    food: "Tasty Fresh Sandwich",
    totalCost: 13.07
  },
  {
    userID: 22,
    date: "01/01/2020",
    food: "Rustic Soft Sandwich",
    totalCost: 18.63
  },
  {
    userID: 90,
    date: "09/01/2020",
    food: "Sleek Concrete Sandwich",
    totalCost: 15.97
  },
  {
    userID: 98,
    date: "19/07/2019",
    food: "Rustic Wooden Sandwich",
    totalCost: 5.86
  },
  {
    userID: 34,
    date: "21/10/2019",
    food: "Intelligent Metal Sandwich",
    totalCost: 7.57
  },
  {
    userID: 97,
    date: "22/10/2019",
    food: "Sleek Metal Sandwich",
    totalCost: 9.38
  },
  {
    userID: 80,
    date: "24/01/2020",
    food: "Tasty Granite Sandwich",
    totalCost: 5.7
  },
  {
    userID: 25,
    date: "17/12/2019",
    food: "Ergonomic Fresh Sandwich",
    totalCost: 19.16
  },
  {
    userID: 68,
    date: "27/10/2019",
    food: "Intelligent Frozen Sandwich",
    totalCost: 21.6
  },
  {
    userID: 30,
    date: "29/01/2020",
    food: "Intelligent Metal Sandwich",
    totalCost: 23.02
  },
  {
    userID: 66,
    date: "27/01/2020",
    food: "Handmade Frozen Sandwich",
    totalCost: 22.69
  },
  {
    userID: 36,
    date: "02/11/2019",
    food: "Handmade Steel Sandwich",
    totalCost: 11.16
  },
  {
    userID: 72,
    date: "10/07/2019",
    food: "Unbranded Plastic Sandwich",
    totalCost: 9.6
  },
  {
    userID: 91,
    date: "04/12/2019",
    food: "Unbranded Wooden Sandwich",
    totalCost: 8.7
  },
  {
    userID: 74,
    date: "18/07/2019",
    food: "Handmade Cotton Sandwich",
    totalCost: 17.39
  },
  {
    userID: 36,
    date: "02/11/2019",
    food: "Refined Granite Sandwich",
    totalCost: 8.19
  },
  {
    userID: 13,
    date: "22/06/2019",
    food: "Incredible Fresh Sandwich",
    totalCost: 8.2
  },
  {
    userID: 39,
    date: "23/10/2019",
    food: "Rustic Frozen Sandwich",
    totalCost: 17.26
  }
];

export { users, rooms, bookings, roomServices };