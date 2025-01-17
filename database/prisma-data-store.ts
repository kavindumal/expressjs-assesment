import { PrismaClient } from "@prisma/client";
import { Customer } from "../model/customer";

const prisma = new PrismaClient();

export async function addCustomer(customer: Customer): Promise<void> {
    await prisma.customer.create({
        data: {
            id: customer.id!,
            name: customer.name!,
            email: customer.email!,
            phone: customer.phone!
        }
    });
}

export async function deleteCustomer(id: number): Promise<void> {
    await prisma.customer.delete({
        where: { id }
    });
}

export async function getCustomers(): Promise<Customer[]> {
    return await prisma.customer.findMany();
}

export async function updateCustomer(id: number, customer: Partial<Customer>): Promise<void> {
    await prisma.customer.update({
        where: { id },
        data: customer
    });
}