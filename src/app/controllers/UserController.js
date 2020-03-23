import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      rua: Yup.string().required(),
      num_casa: Yup.string().required(),
      telefone: Yup.string().required(),
      login: Yup.string().required(),
      password: Yup.string().required().min(6),
     
    });

    //Condição de validação dos campos e dados de entrada
    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação, dado inválido' });
    }
    console.log(err);

  

    const {id, nome, login } = await User.create(req.body);

    return res.json({
      id,
      nome,
      login,
     
    });
  } 
}

export default new UserController();