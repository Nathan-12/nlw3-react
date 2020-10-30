import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Users from '../models/Users';
import userView from '../views/users_view';
import * as Yup from 'yup'; 
import bcrypt from 'bcrypt';

                     
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
    },

    async login(request: Request, response: Response){
       
        try{
            const {
                email,
                senha
            } = request.body
    
            const usersRepository = getRepository(Users);
            const user = await usersRepository.findOne({ email });
            
            const data = {
                email,
                senha
            }
            
            //const senhaDB = await usersRepository.findOneOrFail();
            //const verified = bcrypt.compare(senhaDB, senha);
    
            if(!user) {
                return response.status(400).json({ error: "User not found" });
            }
            if(!(await user.compareHash(data.senha))){
                console.log(data.senha);
                return response.status(400).json({ error: "Invalid password" });
            }
            return response.json({
                user,
                token: user.generateToken()
            });
        }
        
        catch(err) {
            return response.status(400).json({ error: "User authentication failed" })
        }
    }
}