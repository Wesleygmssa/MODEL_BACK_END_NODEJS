const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Ana Doe',
          email: 'Ana@teste.com',
          password_hash: await bcryptjs.hash('1234560', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz ',
          email: 'Luiz@teste.com',
          password_hash: await bcryptjs.hash('1234560', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Fenando Doe',
          email: 'Fenando@teste.com',
          password_hash: await bcryptjs.hash('1234560', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async () => { },
};
