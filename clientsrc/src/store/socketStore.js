import io from "socket.io-client"

let socket = {};

export const socketStore = {
  actions: {
    initializeSocket({ commit, dispatch, state }) {
      socket = io("//localhost:3000");

      socket.on("CONNECTED", data => {
        console.log(data.message + " Let the villany commence")
      })
      socket.on("newBid", data => {
        commit("setActive", data)
      })
      socket.on("newShip", data => {
        commit("addShip", data)
      })
      socket.on("deleteShip", data => {
        commit("removeShip", data)
      })

    },
    joinRoom({ commit, dispatch }, roomName) {
      socket.emit("dispatch", { action: "joinRoom", data: roomName })
    },
    leaveRoom({ commit, dispatch }, roomName) {
      socket.emit("disconnect", { action: "leaveRoom", data: roomName })
    }
  }
}