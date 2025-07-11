import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="p-4">Product not found.</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={product.image} alt={product.title} className="w-full h-80 object-cover rounded" />
      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 text-green-600">Stock: Available</p>
      <button className="mt-4 bg-black text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductPage;
