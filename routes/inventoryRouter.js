const express = require('express');
const inventoryRouter = express.Router();
const Item = require('../models/inventory.js');


inventoryRouter.route('/')
    .get(async (req, res, next) => {
        try {
            const foundItems = await Item.find();
            return res.status(200).send(foundItems);
        } catch (error) {
            res.status(500);
            return next(error);
        }
    })
    .post(async (req, res, next) => {
        try {
            const newItem = new Item(req.body);
            const savedItem = await newItem.save();
            return res.status(201).send(savedItem);
        } catch (error) {
            res.status(500);
            return next(error);
        }
    })

    inventoryRouter.route('/placeorder')
        .get(async (req, res, next) => {
            try {
                const placeAnOrder = req.query.placeAnOrder;
                const foundItems = await Item.find( { placeAnOrder } );
                res.status(200).send(foundItems);
            } catch (error) {
                res.status(500);
                return next(error);
            }
        })

    module.exports = inventoryRouter;