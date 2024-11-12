/*
Creating a Div Parent with Child 
<div id="parent">
    <div id="child">
        <h1>Hello Manish</h1>
    </div>
</div>

<div id="parent1">
    <div id="child1">
        <h1>Hello Manish</h1>
        <h1>Hello Child 2</h1>
    </div>
</div>
*/

// const heading = React.createElement(
//     'h1',
//     {id:'heading',name:"Manish"},
//     "Hello World from React")

// const heading  = React.createElement("div",{id:"parent"},
//     React.createElement('div',{id:"child"},
//         React.createElement('h1',{},"Hello Manish")
//     )
// )

const heading2  = React.createElement('div',{id:'parent1'},
    React.createElement('div',{id:'child1'},[
        React.createElement('h1',{},'Hello manish'),
        React.createElement('h1',{},'Hello Child2')
    ]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(heading)
root.render(heading2)
        