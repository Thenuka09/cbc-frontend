import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState([
        {
            _id: "68878f1fdaf3d69c429f8503",
            orderId: "CBC0001",
            email: "johndoe10@example.com",
            orderedItems: [
                {
                    name: "Organic Compost",
                    price: "1200",
                    quantity: "1",
                    image: "https://example.com/images/compost.jpg",
                    _id: "68878f1fdaf3d69c429f8504",
                },
            ],
            paymentId: "PAY123456",
            status: "pending",
            notes: "Leave at the front gate.",
            name: "John Doe",
            address: "123 Garden Lane, Colombo",
            phoneNumber: "0771234567",
            date: "2025-07-28T14:54:23.627Z",
            __v: 0,
        },
        {
            _id: "68878f4cdaf3d69c429f8508",
            orderId: "CBC0002",
            email: "johndoe10@example.com",
            orderedItems: [
                {
                    name: "Neem Oil Spray",
                    price: "950",
                    quantity: "2",
                    image: "https://example.com/images/neem.jpg",
                    _id: "68878f4cdaf3d69c429f8509",
                },
                {
                    name: "Coconut Husk Chips",
                    price: "800",
                    quantity: "1",
                    image: "https://example.com/images/chips.png",
                    _id: "68878f4cdaf3d69c429f850a",
                },
            ],
            paymentId: "PAY789654",
            status: "pending",
            notes: "Ring the bell on arrival.",
            name: "Sachini Perera",
            address: "45 Lake View, Kandy",
            phoneNumber: "0712345678",
            date: "2025-07-28T14:55:08.736Z",
            __v: 0,
        },
    ]);

    //create a useEffect to fetch order details
    useEffect(() => {
        // get order details
        async function getOrders() {
            try {
                const response = await axios.get("http://localhost:5000/api/order");
                setOrders(response.data);
            } catch (error) {
                console.error("Failed to fetch orders :", error);
            }
        }
        getOrders();
    }, []);

    return (
        <div className="pt-4">
            <h1 className="text-center text-2xl">Admin Orders Page</h1>

            {/* map function to display the orders */}
            {orders.map((order, index) => {
                return (
                    <div key={index} className="flex space-x-2">
                        <span>Order Id :</span>
                        <span>{order.orderId}</span>
                        <span>
                            Orderd Items :{" "}
                            {order.orderedItems.map((orderedItem, index) => {
                                return (
                                    <span key={index} className="flex space-x-2">{orderedItem.name}</span>
                                );
                            })}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
