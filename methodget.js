// db.js arquivo para conexao com banco de dados
const { Pool } = require('pg');

const pool = new Pool({
  user: 'seu-usuario',
  host: 'https://pool-api-alpha.vercel.app/api/v1/pool/',
  database: 'seu-banco-de-dados',
  password: 'sua-senha',
  port: 5000,
});

module.exports = pool;

// server.js seridor para comunicar com o banco de dados
const express = require('express');
const cors = require('cors');
const pool = require('https://pool-api-alpha.vercel.app/api/v1/pool/');

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/dados', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM sua_tabela');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao obter dados do PostgreSQL', err);
    res.status(500).json({ error: 'Erro ao obter dados' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


// script.js  buscando dados na API e exibir na tela.
async function fetchDados() {
    try {
      const response = await fetch('https://pool-api-alpha.vercel.app/api/v1/pool/');
      const dados = await response.json();
      const lista = document.getElementById('dados-lista');
      dados.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.cloro; // Substitua pelo nome do campo que deseja mostrar
        lista.appendChild(li);
      });
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', fetchDados);
  
