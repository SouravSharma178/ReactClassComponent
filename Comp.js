import React, { Component } from 'react'

export default class Comp extends Component {
componentWillUnmount(){
    console.log("component unmounted")
  }
  render() {
    return (
      <div>
        <h1>Child component</h1>
      </div>
    )
  }
}

