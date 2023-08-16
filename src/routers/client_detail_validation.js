const express = require("express");
const router = new express.Router();

const send_text_message = require("../routers/send_message");
const client_details_model = require("../models/client_details_model");
const save_in_sheets = require("../routers/google_sheets");

router.post("/responses", async(req, res) => {

    try {

        const { income, savings } = req.body;
        if (parseInt(income) < parseInt(savings)) {
            return res.status(500).send({
                status: "Failed",
                issue: "Client Income-savings Validation failed!",
                message: "Client monthly Savings Exceeds Client Monthly Income!",
            });
        }
        const user = new client_details_model(req.body);

        console.log(typeof req.body);
        console.log(req.body.name);

        create_user = await user.save();
        console.log(typeof create_user);

        res.status(201).render("submit", { create_user });

        //await save_in_sheets(req);

        //send_text_message(req.body);
        console.log("message sent!!");
    } catch (e) {
        res.status(400).send(e);
    }

});

module.exports = router;