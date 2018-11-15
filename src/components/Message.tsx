import * as React from 'react'

export class Message extends React.Component<MessageProps> {
  render() {
    return (
      <div>
        {`${this.props.text}`}
      </div>
    )
  }
}

interface MessageProps {
  text: string
}
