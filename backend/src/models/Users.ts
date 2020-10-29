import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

@Entity('users')
export default class Users {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    // hashPassword(next: any) {
    //     if (!this.isModified("senha")) next();
      
    //     this.senha = await bcrypt.hash(this.senha, 8);
    //   });

    compareHash(senha: any) {
        if(senha === this.senha){
            return true;
        }
        false;
        //return bcrypt.compare(senha, this.senha);
    }

    generateToken(){
        return jwt.sign({ id: this.id }, "secret", {
            expiresIn: 86400
        });
    }

}