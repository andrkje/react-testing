import React from 'react';
import './Message.css';

export default class Message extends React.Component {
    constructor() {
        super()
        this.state = {
            liked: true
        }
    }

    click() {
        this.setState({
            liked: !this.state.liked
        })
    }

    render() {
        return (
            <div className={this.state.liked ? 'liked' : 'disliked'}>
                <h1>{this.props.title}</h1>
                <span id="bodyText">{this.props.body}</span>
                <button id="likeButton" onClick={this.click.bind(this)}>
                    {!this.state.liked ? '👍' : '👎'}
                </button>
            </div>
        );
    }
}