import { useEffect, useState } from "react"
import axios from "axios";

export default function AdminCustomersPage() {

    const [customers, setCustomers] = useState(
        [
            {
                "_id": "678b5ac79ed56a25d621f9a3",
                "email": "john2@gmail.com",
                "firstName": "John",
                "lastName": "Silva",
                "password": "$2b$10$bbEgs78SZ.nL1Dd0I48grua8J0i8RRNbuyvvloMwGvBQn39BUXmF.",
                "isBlocked": false,
                "type": "customer",
                "profilePicture": "https://www.freepik.com/icon/person_13924070#fromView=keyword&page=1&position=2&uuid=a034dabf-0392-4a5a-a0c6-7976a830cb17",
                "__v": 0
            },
            {
                "_id": "677e9e17da2aef914e630c00",
                "email": "john@gmail.com",
                "firstName": "John",
                "lastName": "Silva",
                "password": "johe123",
                "isBlocked": false,
                "type": "customer",
                "profilePicture": "https://www.freepik.com/icon/person_13924070#fromView=keyword&page=1&position=2&uuid=a034dabf-0392-4a5a-a0c6-7976a830cb17",
                "__v": 0
            },
        ]
    )

    console.log(customers);

    // get customers using api
    useEffect(() => {
        async function getAllCustomers() {
            try {
                const response = await axios.get("http://localhost:5000/api/user/customers");
                setCustomers(response.data);
            } catch (error) {
                console.error("Failed to get customers, ", error);
            }
        }
        getAllCustomers();
    }, [])

    return (
        <div className="pt-4">
            <h1 className="text-center text-2xl">Admin Customers Page</h1>

            {/* get customer details using map function */}
            {customers.map((customer, index) => {
                return (
                    <div key={index} className="flex space-x-2">
                        <span>{index}</span>
                        <span>First Name: {customer.firstName}</span>
                        <span>Last Name: {customer.lastName}</span>
                        <span>Email: {customer.email}</span>
                        <span>Type: {customer.type}</span>
                    </div>
                )
            })}
        </div>
    )
}