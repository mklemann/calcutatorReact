import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    current: 0,
    values: [0, 0]
}

export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.setDigit = this.setDigit.bind(this)
    }

    state = { ...initialState }

    setOperation(op) {
        
    }

    setDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) { return }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n

        this.setState({ clearDisplay: false, displayValue })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue

            this.setState({ values })
            console.log(values)
        }
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    render() {
        // Resolve bind with contructor or declare thsi function
        // const setDigit = n => this.setDigit(n)

        return (
            <div className='calculator'>
                <Display value={this.state.displayValue} />
                <Button label='AC' click={() => this.clearMemory()} triple />
                <Button label='/' click={this.setOperation} operation />
                <Button label='7' click={this.setDigit} />
                <Button label='8' click={this.setDigit} />
                <Button label='9' click={this.setDigit} />
                <Button label='*' click={this.setOperation} operation />
                <Button label='4' click={this.setDigit} />
                <Button label='5' click={this.setDigit} />
                <Button label='6' click={this.setDigit} />
                <Button label='-' click={this.setOperation} operation />
                <Button label='1' click={this.setDigit} />
                <Button label='2' click={this.setDigit} />
                <Button label='3' click={this.setDigit} />
                <Button label='+' click={this.setOperation} operation />
                <Button label='0' click={this.setDigit} double />
                <Button label='.' click={this.setDigit} />
                <Button label='=' click={this.setOperation} operation />
            </div>
        )
    }
}