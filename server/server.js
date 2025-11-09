var express = require('express');
var axios = require('axios');
var cors = require('cors');

var app = express();
var port = 3001;

app.use(cors());
app.use(express.json());

// Rota para consultar o CEP e retornar a cidade
app.get('/api/cep/:cep', async (req, res) => {
    const cep = req.params.cep.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cep.length !== 8) {
        return res.status(400).json({ error: 'CEP inválido. Deve conter 8 dígitos.' });
    }

    try {
        // Consulta à API do ViaCEP
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;

        // Verifica se o CEP foi encontrado
        if (data.erro) {
            return res.status(404).json({ error: 'CEP não encontrado.' });
        }

        // Retorna a cidade para o frontend
        res.json({
            cidade: data.localidade,
            bairro: data.bairro,
            uf: data.uf
        });

    } catch (error) {
        console.error('Erro ao consultar CEP:', error.message);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

app.listen(port, () => {
    console.log(`Backend rodando em http://localhost:${port}`);
});