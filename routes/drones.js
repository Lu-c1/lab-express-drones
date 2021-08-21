const express = require("express");
const Drone = require("../models/Drone.model");
const router = require("express").Router();

// require the Drone model here

router.get("/drones", (req, res, next) => {
    // Iteration #2: List the drones
    Drone.find()
        .then((drones) => {
            console.log("list of drones:", drones);
            res.render("drones/list.hbs", { drones });
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get("/drones/create", (req, res, next) => {
    // Iteration #3: Add a new drone
    res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
    const { name, propellers, maxSpeed } = req.body;
    Drone.create({ name, propellers, maxSpeed })
        .then((drone) => {
            console.log("drone created", drone);
            res.redirect("/drones");
        })
        .catch((err) => {
            console.log(err);
        });
});
// Iteration #3: Add a new drone
// ... your code here

router.get("/drones/:id/update-form", (req, res, next) => {
    // Iteration #4: Update the drone
    const { id } = req.params;
    Drone.findById(id)
        .then((drone) => {
            console.log("drone requested", drone);
            res.render("drones/update-form", { drone });
        })
        .catch((err) => {
            console.log(err);
        });
});

router.post("/drones/:id/update-form", (req, res, next) => {
    const { id } = req.params;
    const { name, propellers, maxSpeed } = req.body;
    Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
        .then((drone) => {
            console.log("drone updated", drone);
            res.redirect(`/drones/${drone._id}`);
        })
        .catch((err) => {
            console.log(err);
        });
});
// Iteration #4: Update the drone
// ... your code here

router.post("/drones/:id/delete", (req, res, next) => {
    // Iteration #5: Delete the drone
    const { id } = req.params;
    Drone.findByIdAndDelete(id)
        .then(() => {
            res.redirect("/drones");
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;