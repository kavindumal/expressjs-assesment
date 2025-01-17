import {Customer} from '../model/customer';

let customers: Customer[] = [];

export function addCustomer(customer: Customer): void {
    customers.push(customer);
}

export function deleteCustomer(id: number): void {
    const index = customers.findIndex((customer: Customer) => customer.id === id);
    if (index !== -1) {
        customers.splice(index, 1);
    }
}

export function updateCustomer(id: number,cus: Customer) {
    customers.map((customer: Customer): void => {
        if(customer.id === id) {
            customer.name = cus.name;
            customer.email = cus.email;
            customer.phone = cus.phone;
        }
    })
}

export function getCustomers() {
    return customers;
}