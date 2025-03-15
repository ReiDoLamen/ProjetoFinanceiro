const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://henriquebs1601:1234@cluster0.ytlbu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// Configuração do MongoDB
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
//let db; // Variável para armazenar a conexão com o banco
// Função para conectar ao MongoDB
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



/*

// Função para salvar dados
async function salvarDados(data, descricao, valor, entradaSaida) {
  console.log('Dados recebidos:', { data, descricao, valor, entradaSaida });

  if (!data || !descricao || !valor || !entradaSaida) {
    throw new Error('Todos os campos são obrigatórios');
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    throw new Error('Data deve estar no formato YYYY-MM-DD');
  }

  if (isNaN(valor)) {
    throw new Error('Valor deve ser um número válido');
  }

  if (entradaSaida !== 'Entrada' && entradaSaida !== 'Saída') {
    throw new Error('Tipo deve ser "Entrada" ou "Saída"');
  }

  try {
    const collection = db.collection('faturamento');
    const resultado = await collection.insertOne({
      data,
      descricao,
      valor: Number(valor),
      entradaSaida,
      createdAt: new Date()
    });

    console.log('Documento inserido com ID:', resultado.insertedId);
    return { id: resultado.insertedId };
  } catch (err) {
    console.error('Erro ao salvar no MongoDB:', err);
    throw err;
  }
}

// Função para deletar dados
async function deletarDados(id) {
  if (!id) {
    throw new Error('ID é obrigatório');
  }

  try {
    const collection = db.collection('faturamento');
    const resultado = await collection.deleteOne({ _id: new ObjectId(id) });

    if (resultado.deletedCount === 0) {
      throw new Error('Registro não encontrado');
    }

    console.log('Registro deletado com sucesso');
    return { message: 'Registro deletado com sucesso' };
  } catch (err) {
    console.error('Erro ao deletar no MongoDB:', err);
    throw err;
  }
}

// Função para editar dados
async function editarDados(id, data, descricao, valor, entradaSaida) {
  if (!id) {
    throw new Error('ID é obrigatório para edição');
  }

  try {
    const collection = db.collection('faturamento');
    const resultado = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          data,
          descricao,
          valor: Number(valor),
          entradaSaida,
          updatedAt: new Date()
        }
      }
    );

    if (resultado.matchedCount === 0) {
      throw new Error('Registro não encontrado');
    }

    console.log('Registro atualizado com sucesso');
    return { message: 'Registro atualizado com sucesso' };
  } catch (err) {
    console.error('Erro ao atualizar no MongoDB:', err);
    throw err;
  }
}

// Exemplo de uso
async function main() {
  try {
    await connectToMongo();
    // Teste salvando um documento
    const resultado = await salvarDados("2025-03-05", "Teste", 100, "Entrada");
    console.log('Resultado:', resultado);
  } catch (err) {
    console.error('Erro na execução:', err.message);
  } finally {
    await client.close();
    console.log('Conexão com MongoDB fechada.');
  }
}

main().catch(console.dir);*/