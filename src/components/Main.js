import React from 'react'
import AppLogo from './AppLogo'
import TodoManager from './TodoManager'

class Main extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <AppLogo/>
                <TodoManager/>
            </div>
        )
    }
}

export default Main