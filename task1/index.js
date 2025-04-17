function helloFunc(){
    return <h1>Привет</h1>
}

let helloArrow = () => <h1>Привет</h1>

class HelloES6 extends React.Component {
    render(){
        return <h1>Привет</h1>;
    }
}

ReactDOM.render(helloFunc(), document.getElementById("app1"));
ReactDOM.render(helloArrow(), document.getElementById("app2"));
ReactDOM.render(<HelloES6/>, document.getElementById("app3"));