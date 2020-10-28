import Users from '../models/Users'

export default {
    render(users: Users){
        return {
            id: users.id,
            name : users.name,
            email: users.email,
            senha: users.senha,
        };
    },
};