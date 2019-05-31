class Room {
  constructor(data, roomID) {
    this.data = data;
    this.number = roomID;
    this.found = this.findRoom()
    this.roomType = null;
    this.bidet = null;
    this.bedSize = null;
    this.numBeds = null;
    this.costPerNight = null;
  }
  findRoom() {
    let foundRoom = this.data.find(rooms => this.number === rooms.number)
    this.roomType = foundRoom.roomType;
    this.bidet = foundRoom.bidet;
    this.bedSize = foundRoom.bedSize;
    this.numBeds = foundRoom.numBeds;
    this.costPerNight = foundRoom.costPerNight;
    return foundRoom;
  }
}

export default Room;