class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <h1>Hello {this.props.name}</h1> // { name.toUpperCase() } - pentru a scrie cu litere mari
    }
}
class Clicker extends React.Component {
    constructor(props) {
        super(props)
        // starea initiala a componentei
        this.state = {
            clicks: 0
        }
    }
    render() {
        return <button onClick={this.Increment}>You clicked {this.state.clicks} times</button>
    }
    // definind metoda ca arrow function se face automat bind la this
    increment = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }
}

const template = <div>
    <Welcome name='Alyn'></Welcome>
    <Clicker></Clicker>
</div>

ReactDOM.render(
    template,
    document.getElementById('root')
)