// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model")

require("../db");
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

Drone.create(drones)
    .then((createdDrones) => {
        console.log(`Created ${createdDrones.length} drones`);

        mongoose.connection.close();
    })
    .catch((error) => console.log("An error ocurred on the drone creation", error));