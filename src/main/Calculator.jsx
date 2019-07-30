import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display';

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
    }

    setOperation(op) {
        console.log(op)
    }

    setDigit(n) {
        console.log(n)
    }

    clearMemory() {
        console.log('limpar display')
    }

    render() {
        // Resolve bind with contructor or declare thsi function
        const setDigit = n => this.setDigit(n)

        return (
            <div className='calculator'>
                <Display value='1231' />

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