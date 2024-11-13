import React from "react"
import ReactDOM from 'react-dom/client'

const heading2  = React.createElement('div',{id:'parent1'},
    React.createElement('div',{id:'child1'},[
        React.createElement('h1',{key:"first"},'Hello Manish'),
        React.createElement('h1',{key:"second"},'Hello Child2')
    ]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(heading)
root.render(heading2)
        