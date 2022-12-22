/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'alunos',
      [
        {
          nome: "Felipe Matheus D'avila Pereira",
          cpf: '15733954710',
          sexo: 'Masculino',
          endereco: 'Rua da Gamboa',
          turno: 'Manhã',
          matricula: 5899031006,
          email: 'felipe@mail.com.br',
          data_nascimento: new Date(),
          curso: 'Ciência da computação',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Rebecca Fernandes',
          cpf: '49930611029',
          sexo: 'Feminino',
          endereco: 'Rua 10',
          turno: 'Manhã',
          matricula: 8036778387,
          email: 'rebecca@mail.com.br',
          data_nascimento: new Date(),
          curso: 'Ciência da computação',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Bruno Rodrigues',
          cpf: '87663704002',
          sexo: 'Masculino',
          endereco: 'Rua 11',
          turno: 'Manhã',
          matricula: 7131507733,
          email: 'bruno@mail.com.br',
          data_nascimento: new Date(),
          curso: 'Ciência da computação',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Joaozinho',
          cpf: '00713605065',
          sexo: 'Masculino',
          endereco: 'Rua Longe',
          turno: 'Noturno',
          matricula: 5353684450,
          email: 'joaozinho@mail.net',
          data_nascimento: new Date(),
          curso: 'Sistemas de Informação',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Matheus José',
          cpf: '61222098059',
          sexo: 'Masculino',
          endereco: 'Rua de Baixo',
          turno: 'Noturno',
          matricula: 6030785781,
          email: 'matheusj@yahoo.com.br',
          data_nascimento: new Date(),
          curso: 'Análise e Desenvolvimento de Sistemas',
          created_at: new Date(),
          updated_at: new Date(),
        },

      ],

      {},
    );
  },

  down() {

  },
};
