import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      rua: Yup.string().required(),
      num_casa: Yup.number().required(),
      telefone: Yup.string().required(),
      login: Yup.string().required(),
      password: Yup.string().required(),
    });

    //Condição de validação dos campos e dados de entrada
    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação, dado inválido' });
    }
    
    // Validando o user
    const usuarioExiste = await User.findOne({ where: { email: req.body.email } });

    // Condição para ver se o user já existe
    if(usuarioExiste) {
      return res.status(400).json({ error: 'Usuário já existe!' });
    }

    const {id, nome, login , email} = await User.create(req.body);

    return res.json({
      id,
      nome,
      login,
      email
    });
  } 
}

export default new UserController();