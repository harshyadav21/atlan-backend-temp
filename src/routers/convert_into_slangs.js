require("dotenv").config();

const { Translate } = require('@google-cloud/translate').v2;
const express = require("express");
const router_translate = new express.Router();

const project_id = process.env.PROJECT_ID;
const api_key = process.env.KEY;

const translate = new Translate({ projectId: project_id, key: api_key });

router_translate.get("/translate", (req, res) => {
    res.render("translate");
});

router_translate.post("/translate", async(req, res) => {

    try {
        const { text, target } = req.body;

        const [translation] = await translate.translate(text, target);
        const translated_text = [translation];
        res.status(201).render("translate", { translated_text });
        console.log(`Text: ${text}`);
        console.log(`Translation: ${translation}`);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

module.exports = router_translate;