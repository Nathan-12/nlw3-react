import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Users from '../models/Users';
import * as Yup from 'yup';
import bcrypt from 'bcrypt';

export default {
    async create(request: Request, response: Response) {
        // const bcrypt = require('bcrypt');
        // const saltRounds = 10;
        // const myPlaintextPassword = 's0/\/\P4$$w0rD';
        // const someOtherPlaintextPassword = 'not_bacon';

        // bcrypt.hash(myPlaintextPassword, saltRounds, function(senha: string){
            
        // });

        const {
            name,
            email,
            senha,
        } = request.body;

        
        const usersRepository = getRepository(Users);

        const data = {
            name,
            email,
            senha
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            senha: Yup.string().required(),
        })

        await schema.validate(data, {
            abortEarly: false,
        });

        const user = usersRepository.create(data);

        await usersRepository.save(user);

        return response.status(201).json(user);
    }
}