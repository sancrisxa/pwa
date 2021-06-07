import React from 'react';
import Label from '../Label';
import Input from '../Input';
import GenderImage from '../GenderSelector';
import GenderSelector from '../GenderSelector';

class NovoUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: {
                nome: '',
                genero: ''
            },
            validacao: {
                nomeInvalido: false,
                generoInvalido: false
            }
        }
    }

    atualizarGenero(e, genero) {
        e.preventDefault();
        let usuario = this.state.usuario;
        usuario.genero = genero;
        this.setState({
            usuario: usuario
        });
    }

    atualizarNome(e) {
        let usuario = this.state.usuario;
        usuario.nome = e.target.value;
        this.setState({
            usuario: usuario
        });
    }

    render() {
        return (
            <div className="center">
                <form className="pure-form pure-form-stacked">
                    <Label 
                        htmlFor="nome" 
                        texto="Quem é você?" 
                        valorInvalido 
                    />
                    <Input
                        id="nome"
                        placeholder="Digite seu nome"
                        maxLength="40"
                        readOnly={false}
                        valorInvalido={this.state.validacao.nomeInvalido}
                        defaultValue={this.state.usuario.nome}
                        onChange={this.atualizarNome.bind(this)}
                    />
                    <Label
                        texto="Seu gênero:"
                        valorInvalido={this.state.generoInvalido}
                    />
                    <GenderSelector
                        valorInvalido={this.state.validacao.generoInvalido}
                        genero={this.state.usuario.genero}
                        atualizarGenero={this.atualizarGenero.bind(this)}
                    />
                </form>
            </div>
        );
    }
}

export default NovoUsuario;