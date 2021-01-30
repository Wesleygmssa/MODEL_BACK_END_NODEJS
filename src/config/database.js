module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '123456',
  database: 'escola',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createAt: 'created_at',
    updateAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',

};
