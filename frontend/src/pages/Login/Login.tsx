import React, { useState, FormEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import SidebarLogin from '../../components/SidebarLogin';
import '../../styles/pages/Login/create-user.css';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function CreateUser() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function login(event: FormEvent) {
        event.preventDefault();

        const data = new FormData();

        data.append('email', email);
        data.append('senha', senha);
        
        console.log("1",{
            
            email,
            senha
        })

       await api.post("authenticate", data);

       console.log("2",{
            
        email,
        senha
    })

        history.push('/createsuccess');

        
    }

    return (
        <div id="create-user-container">
            <SidebarLogin />

            <main>
                <form onSubmit={login} className="form-user-create">
                    <h1>Cadastrar usuário</h1>
                    <div className="input-text">
                        <TextField
                            id="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            label="Email"
                            variant="outlined"
                        />
                    </div>

                    <div className="input-text">
                        <TextField
                            id="senha"
                            value={senha}
                            onChange={event => setSenha(event.target.value)}
                            label="Senha"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                    </div>
                    {/* <div>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
              </div>
              <div>
              <label htmlFor="email">email</label>
              <input
                id="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              </div>
              <div>
              <label htmlFor="senha">senha</label>
              <input
                id="senha"
                value={senha}
                onChange={event => setSenha(event.target.value)}
              />
              </div> */}
              
                    
                    <Button type="submit" variant="contained" color="primary">
                        Entrar 
                    </Button>
                    
                    
                </form>
            </main>
        </div>
    );
}