import React from 'react'

export default class Response extends React.Component {
  render() {
    return (
      <div className='response'>
        <hr/>
        <h2>Response</h2>
        <pre>
          { JSON.stringify(this.props.response, null , 2) } 
        </pre>
      </div>
    )
  }
}
