class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <h1>Hello {this.props.name } </h1> //this.props.name.toUpperCase() - pentru a scrie cu litere mari
    }
}
class Clicker extends React.Component {
    constructor() {
        super()
        // starea initiala a componentei
        this.state = {
            clicks: 0,
        }
    }
    // definind metoda ca arrow function se face automat bind la this
    increment = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    };
    render() {
        return <button onClick={this.increment}>You clicked {this.state.clicks} times</button>
    }
}

const template = (
<div>
    <Welcome name='Alyn'></Welcome>
    <Clicker></Clicker>
</div>
)

ReactDOM.render(
    template,
    document.getElementById('root')
)