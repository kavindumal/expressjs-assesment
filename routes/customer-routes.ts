import express from "express";

const  router = express.Router();

router.post('/add', (req, res) => {
    res.status(200).send('Add Customer');
})

router.put('/update', (req, res) => {
    res.status(200).send('Update Customer');
})

router.delete('/delete', (req, res) => {
    res.status(200).send('Delete Customer');
})

router.get('/view', (req, res) => {
    res.status(200).send('Get Customer');
});

export default router;