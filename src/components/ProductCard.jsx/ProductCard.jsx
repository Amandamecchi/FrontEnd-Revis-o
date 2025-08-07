import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className={styles.image}
      />
      <h2 className={styles.name}>{product.nome}</h2> 
      <p className={styles.description}>{product.preco}</p>
      <p className={styles.description}>{product.descricao}</p>
      <p className={styles.description}>{product.avaliacao}</p>
     
    </div>
  );
}