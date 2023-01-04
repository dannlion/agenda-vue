const db = require("../config/database");
/* 
  Recupero as informações da função exportada de "database.js" e configuro no config de Sequelize.
  Usei o comando abaixo para ver todas as propriedades do objeto:
  console.log(Object.values(db));

  Os comandos db:create e db:migrate funcionam com base nesse arquivo de configuração.
*/
module.exports = {
  dialect: "mysql",
  host: db.config.host,
  username: db.config.username,
  password: db.config.password,
  database: db.config.database,
  port: db.config.port,
  define: db.define,
};
