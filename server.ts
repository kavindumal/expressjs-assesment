import express from 'express';
import  customerRoutes from './routes/customer-routes';

const app = express();

app.use('/customer', customerRoutes)
app.use(express.json());

app.listen(3000, (err) => {
    console.log('Server is running on port 3000');
})
