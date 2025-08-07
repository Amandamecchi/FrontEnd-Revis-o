"use client";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import { useState, useEffect } from 'react';
import { productsData } from '../../data/products.js';
import ProductCard from "../components/ProductCard.jsx/ProductCard";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

 return (
  <div className={styles.container}>
    <Header productCount={productCount} />
    <div className={styles.productsGrid}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);
}