import React from "react"
import ReactDOM from 'react-dom/client'

// const heading2  = React.createElement('div',{id:'parent1'},
//     React.createElement('div',{id:'child1'},[
//         React.createElement('h1',{key:"first"},'Hello Manish'),
//         React.createElement('h1',{key:"second"},'Hello Child2')
//     ]
//     )
// )
const heading2 = <div id="parent1"><div id="child1"><h1>Hello Manish1</h1><h1>Hello Child2</h1></div></div>
const Title = () => (<h1>I am Title</h1>)
const number = "Hello " + 10 + 11 + "Manish";
const CompFunction  = () => (<div>
<h1>Hello Function Component {number}</h1>
<Title/>
</div>
)
const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(heading)
//root.render(heading2)
root.render(<CompFunction/>)
        