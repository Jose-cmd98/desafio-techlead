const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    // validate response
    if(!email) {
        res.status(403).json({msg: 'Email obrigatório'});
    }
    if(!password) {
        res.status(403).json({msg: 'Password obrigatório'});
    }

    // check if users already exists
    const user = await User.findOne({email: email});

    if(!user) {
        return res.status(404).json({msg: 'Usuário não existe'})
    }

    // check the password
    const checkPassword = await bcrypt.compare(password, user.password);
    if(!checkPassword) {
        return res.status(400).json({msg: 'Senha inválida'});
    }

    try {
        const secret = process.env.SECRET;

        const token = jwt.sign({
            id: user.id
        }, 
            secret
        )
        res.status(200).json({msg: 'User autenticado', token: token, user: user.name})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Erro no servidor'});
    }
})

module.exports = router;