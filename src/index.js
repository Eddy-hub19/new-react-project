import React from "react"
import ReactDOM from "react-dom"

// JSX
const el1 = <span>span</span>
const el2 = <span>span 2</span>
const element = (
    <div>
        {el1} {el2}
    </div>
)

ReactDOM.render(element, document.querySelector("#root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
