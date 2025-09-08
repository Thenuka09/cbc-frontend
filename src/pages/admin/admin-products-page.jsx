import axios from "axios";

export default function AdminProductsPage(){

    async function getProducts() {
        const respose = await axios.get("http://localhost:5000/api/product");
        console.log(respose);
    }

    getProducts();

    return(
        <div className="pt-4">
            <h1 className="text-center text-2xl">Admin Products Page</h1>
        </div>
    )
}