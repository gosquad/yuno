import React from 'react'

export default class Response extends React.Component {
  
  render() {
    console.log(this.props.response)
    let prettyResponse = []
    return (
      <div>
        <ul>
          {prettyResponse} 
        </ul>
      </div>
    )
  }
}
