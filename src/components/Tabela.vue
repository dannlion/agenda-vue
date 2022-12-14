<template>
  <q-table
    title="Agenda Camilo"
    :rows="rows"
    :columns="columns"
    row-key="name"
    dark
    color="amber"
  />
</template>

<script>
const columns = [
  { name: 'Nome', align: 'left', label: 'Nome:', field: 'Nome', sortable: true },
  { name: 'Celular', align: 'center', label: 'Celular:', field: 'Celular' },
]

const rows = [
  {
    id: 1,
    Nome: "Daniel Camilo da Silva",
    Endereco: "Rua Maria da Costa Leite, sn, Jardins, SGA-RN",
    Celular: "(84) 9 9178-4369",
    Email: "daniel.camilo.silva@gmail.com",
    Obs: "Técnico de Informática, DevOps e Cloud Analyst em preparação."
  },
  {
    id: 2,
    Nome: "Adriana Correia de Andrade",
    Endereco: "Rua Maria da Costa Leite, sn, Jardins, SGA-RN",
    Celular: "(84) 9 9476-7611",
    Email: "drika.andcor@gmail.com",
    Obs: "Bacharéu em Serviço Social, dona de casa e esposa."
  },
  {
    id: 3,
    Nome: "Davisson Alves da Silva",
    Endereco: "Rua Central, 777, Pureza-RN",
    Celular: "(84) 9 9137-1806",
    Email: "davisson.silva@gmail.com",
    Obs: "Ex militar, estudante de idiomas e praticante de trader."
  },
  {
    id: 4,
    Nome: "Fofonildo Coelho",
    Endereco: "Rua das Cenouras, 578, Natal-RN",
    Celular: "(84) 9 9137-1806",
    Email: "davisson.silva@gmail.com",
    Obs: "Coelho comilão e muito sem vergonha."
  }
]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}
</script>