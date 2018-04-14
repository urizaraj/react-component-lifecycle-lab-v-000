import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: this.props.newTweets
    };
  }

  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }

  componentWillReceiveProps(newProps) {
    // this.setState({
    //   tweets: [...newProps.newTweets, ...this.state.tweets]
    // })
    this.state = {
      tweets: [...newProps.newTweets, ...this.state.tweets]
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.tweets === this.state.tweets)
  }
}

export default TweetWall;
