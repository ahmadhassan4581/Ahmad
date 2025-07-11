import React from 'react';

const AdminPanel = () => {
  return (
    <div className="p-6 space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-4">Customer Details: (Users)</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Orders Details:</th>
              <th className="border border-gray-300 p-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {/* Rows would be dynamically generated */}
          </tbody>
        </table>
      </section>
      
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Products List</h2>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Add Product +
          </button>
        </div>
        
        <form className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block font-medium">Product Details</label>
            <input type="file" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium">Extra Images</label>
            <input type="file" multiple className="w-full p-2 border border-gray-300 rounded" />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium">Title</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium">Describe</label>
            <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium">Category</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium">Rating</label>
            <input type="number" min="1" max="5" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium">Size</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium">Colors</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium">Stock Status</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option value="available">Available</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>
          
          <div className="space-y-2 col-span-2">
            <label className="block font-medium">Add Reviews</label>
            <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          
          <button type="submit" className="col-span-2 bg-black text-white py-2 rounded hover:bg-gray-800">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default AdminPanel;