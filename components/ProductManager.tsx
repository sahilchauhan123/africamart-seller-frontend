
import React from 'react';
import { MOCK_PRODUCTS } from '../constants';

interface Props {
  onBack: () => void;
  onAdd: () => void;
  onEdit: () => void;
}

const ProductManager: React.FC<Props> = ({ onBack, onAdd, onEdit }) => {
  return (
    <div className="flex flex-col bg-[#F5F7FA] min-h-full">

      <main className="p-4 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 h-32 flex flex-col justify-between">
            <h2 className="text-sm font-medium text-gray-500">Total Products</h2>
            <span className="text-3xl font-bold">250</span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 h-32 flex flex-col justify-between">
            <h2 className="text-sm font-medium text-gray-500">Categories</h2>
            <div className="flex justify-between items-end">
              <span className="text-3xl font-bold">3</span>
              <span className="text-xs text-primary font-bold">View</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 pb-24">
          {MOCK_PRODUCTS.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 transition active:scale-[0.99]">
              <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-100">
                <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
              </div>
              <div className="flex-1 flex flex-col justify-between relative">
                <button
                  onClick={onEdit}
                  className="absolute top-0 right-0 text-gray-400 p-1"
                >
                  <span className="material-icons-round text-lg">edit</span>
                </button>
                <div>
                  <h3 className="font-semibold line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-green-600 font-medium">{product.price}</p>
                </div>
                <div className="flex justify-end">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-primary text-xs font-medium">
                    <span className="material-icons-round text-sm">ads_click</span>
                    Reach Buyers
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <button onClick={onAdd} className="fixed bottom-6 right-6 bg-primary text-white rounded-full px-5 py-3 shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition">
        <span className="material-icons-round">add</span>
        <span className="font-medium">Add Product</span>
      </button>
    </div>
  );
};

export default ProductManager;
