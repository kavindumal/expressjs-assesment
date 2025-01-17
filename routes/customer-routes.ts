import express from "express";
import {addCustomer, getCustomers} from "../database/local-data-store";
import {Customer} from "../model/customer";

const  router = express.Router();

router.use(express.json());

router.post('/add', (req, res) => {
    console.log(req.body.name);
    const newCustomer : Customer = req.body;
    addCustomer(newCustomer);
    res.send('Customer added successfully');
})

router.put('/update', (req, res) => {
    res.status(200).send('Update Customer');
})

router.delete('/delete', (req, res) => {
    res.status(200).send('Delete Customer');
})

router.get('/view', (req, res) => {
    const customers = getCustomers();
    res.json(customers)
});

export default router;