import React from 'react'

export default class Form extends React.Component {
    render(){
        return (
            <form>
                <p>
                    <label class="form-label">Nome</label><br />
                    <input class="form-control" type="text" />
                </p>
                <p>
                    <label>Github</label><br />
                    <input type="text" />
                </p>
                <p>
                   <button>Enviar!</button>
                </p>
            </form>
        )
    }
}