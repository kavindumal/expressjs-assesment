import express from "express";
import {addCustomer, deleteCustomer, getCustomers, updateCustomer} from "../database/prisma-data-store";
import {Customer} from "../model/customer";

const  router = express.Router();

router.use(express.json());

router.post('/add', (req, res) => {
    const newCustomer : Customer = req.body;
    addCustomer(newCustomer);
    res.send('Customer added successfully');
})

router.put('/update/:id', (req, res) => {
    const id = +req.params.id;
    updateCustomer(id, req.body); // Use the imported service
    res.status(200).send('Update Customer');
});

router.delete('/delete/:id', (req, res) => {
    const id = +req.params.id;
    deleteCustomer(id); // Use the imported service
    res.status(200).send('Delete Customer');
});

router.get('/view', (req, res) => {
    const customers = getCustomers();
    res.json(customers)
});

export default router;