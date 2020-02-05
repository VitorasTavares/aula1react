import React from 'react';
import TableProfissionais from './table_profissionais';
import Form from './form'

export default class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <TableProfissionais />
                <Form />
            </div>
        )
    }
}