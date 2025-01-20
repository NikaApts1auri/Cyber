import { useEffect, useState } from "react";

// პროდუქტის ტიპი
type Product = {
  id: number;
  device: string;
  title: string;
  price: string;
  image_url: string;
};

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // მონაცემების წამოღება 
  const fetchProducts = async () => {
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  
      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("Supabase URL ან API გასაღები ვერ მოიძებნა.");
      }
  
      const response = await fetch(`${supabaseUrl}/rest/v1/products`, {
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`მონაცემების წამოღების შეცდომა: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Response Data:", data);  // აქ გამოვიტანოთ მიღებული მონაცემები
      
      if (data && data.length > 0) {
        setProducts(data);
      } else {
        console.log("No products found.");
      }
    } catch (error) {
      console.error("მონაცემების წამოღების შეცდომა:", error);
    }
  };
  

  console.log(products);

  return (
    <div className="product-list">
      <h1>პროდუქტების სია</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow-md bg-white"
          >
            <img
              src={product.image_url}
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-gray-600">{product.device}</p>
            <p className="text-green-500 font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
