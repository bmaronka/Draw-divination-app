class DivinationApp extends React.Component {
    state = {
        displayDivination: '',
        inputValue: '',
        allDivinations: ['1', '2', '3'],
    }

    handleShow = () => {
        const divinations = this.state.allDivinations
        const number = Math.floor(Math.random() * divinations.length);

        this.setState({
            displayDivination: divinations[number],
        })
    }

    handleAddDivination = () => {
        let divinations = [...this.state.allDivinations];

        if (this.state.inputValue === '') return alert('write something!')

        divinations.push(this.state.inputValue);

        this.setState({
            allDivinations: divinations,
            inputValue: '',
        })
        alert(`Current divinations ${divinations}`);
    }

    handleInputChange = e => {
        this.setState({
            inputValue: e.target.value,
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleShow}>Show divination</button>
                <br />
                <input value={this.state.inputValue} type="text" onChange={this.handleInputChange} />
                <button onClick={this.handleAddDivination}>Add divination</button>
                {this.state.displayDivination ? <h1>{this.state.displayDivination}</h1> : null}
            </>
        )
    }
}

ReactDOM.render(<DivinationApp />, document.getElementById('root'));