import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Users from '../models/Users';
import userView from '../views/users_view';
import * as Yup from 'yup';

export default {
    async show (request: Request, response: Response){
        const usersRepository = getRepository(Users);

        const user = await usersRepository.findOneOrFail();

        return response.json(userView.render(user));
    },
    
    async create(request: Request, response: Response) {

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
            name: Yup.string().notRequired(),
            email: Yup.string().notRequired(),
            senha: Yup.string().notRequired(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const user = usersRepository.create(data);

        await usersRepository.save(user);

        return response.status(201).json(user);
    }
}