import { Link, useLoaderData, useParams } from "react-router-dom";

const Products = () => {
    const brand = useParams()
    const products = useLoaderData()
    console.log(brand, products)
    return (
        
            products.map(product=> 
            <div key={product._id} className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<img src={product.photo} className="max-w-sm rounded-lg shadow-2xl" />
<div>
  <h1 className="text-5xl font-bold">{product.name}</h1>
  <p className="py-6">Brand: {product.brand}</p>
  <p className="py-6">Price: {product.price}</p>
  <Link to="/updateBrand" className="btn btn-primary">Update</Link>
</div>
</div>
</div>
            


            )
        
        
    );
};

export default Products; 