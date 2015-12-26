import React from 'react'

export default class Response extends React.Component {
  render() {
    return (
      <div>
        <h2>Resulting Response</h2>
        <pre>
          { JSON.stringify(this.props.response, null , 2) } 
        </pre>
      </div>
    )
  }
}
