import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>🛒Loja de Eletrônicos</h1>
      <p className ={styles.subtitle}>Os melhores produtos com os melhores preços!</p>
      <p>📊 Total de produtos: 10</p>
    </header>
  );
}


