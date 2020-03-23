import sequelize from 'sequelize';

module.exports = {
  dialect: 'mysql',
  host: '127.0.0.1',
  username: 'root',
  password: '',
  database: 'prefeitura',
  define: {
    timestamps: true
  },
};

sequelize.authenticate().then(function() {
  console.log("sucess");
}).catch(function(error){
  console.log("error: "+error);
});