"use client";
import React from 'react';
import { useState } from 'react';

export default function Home() {
  const [pessoas, setPessoas] = useState([
    {nome: "Amanda", email: "amanda@gmail.com", idade: 20, },
    {nome: "Flavia"},
    {}
  ])
  return (
    <div>
      <h1>Lista de Pessoas</h1>
            </div>
          );
      }
