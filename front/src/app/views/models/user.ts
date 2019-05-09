import { Analise } from './analise';
import { Endereco } from './endereco';

export class User{
    id: number;
    nome: String;
    nascimento: Date;
    cpf: String;
    sexo: String;
    email: String;
    senha: String;
    desc: String;
    Analises: Array<Analise>;
    Enderecos: Array<Endereco>;
    nota: number;
    type: String;
}