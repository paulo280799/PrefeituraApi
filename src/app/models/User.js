import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING,
      rua: Sequelize.STRING,
      num_casa: Sequelize.STRING,
      telefone: Sequelize.STRING,
      login: Sequelize.STRING,
      password: Sequelize.STRING,

    },
    {
      sequelize,
    }
    
    );
    return this;
  }

}

export default User;