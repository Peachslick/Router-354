import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct, removeProduct } from '../features/productSlice';

function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);

  // สร้าง state สำหรับ input ในฟอร์ม
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductDescription, setNewProductDescription] = useState('');

  // ฟังก์ชันจัดการการเพิ่มสินค้า
  const handleAddProduct = (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้าเมื่อส่งฟอร์ม
    const newProduct = {
      id: productList.length + 1, // สร้าง id ใหม่ตามจำนวนสินค้าใน state
      name: newProductName,
      price: newProductPrice,
      description: newProductDescription,
    };
    dispatch(addProduct(newProduct));

    // เคลียร์ค่า input หลังจากเพิ่มสินค้า
    setNewProductName('');
    setNewProductPrice('');
    setNewProductDescription('');
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productList.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name} - {product.price}
            </Link>
            <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Add New Product</h2>
      <form onSubmit={handleAddProduct}>
        <div>
          <h3 htmlFor="name">Product Name:</h3>
          <input
            type="text"
            id="name"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            required
          />
        </div>

        <div>
          <h3 htmlFor="price">Product Price:</h3>
          <input
            type="text"
            id="price"
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
            required
          />
        </div>

        <div>
          <h3 htmlFor="description">Product Description:</h3>
          <textarea
            id="description"
            value={newProductDescription}
            onChange={(e) => setNewProductDescription(e.target.value)}
            required
          />
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default Products;
