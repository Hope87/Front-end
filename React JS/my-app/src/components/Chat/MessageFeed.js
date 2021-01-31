import React, { Component, createRef } from 'react';

const listStyles = {
  height: 400,
  border: '1px solid #212121',
  overflow: 'auto',
};

export default class MessageFeed extends Component {
  listRef = createRef();

  getSnapshotBeforeUpdate(prevProps) {
    // scrollHeight - полная высота контента включая тот который не виден
    // scrollTop - высота невидимого контента сверху
    // offsetHeight - высота элемента
    const { items } = this.props;

    if (prevProps.items !== items) {
      const { scrollHeight, scrollTop, offsetHeight } = this.listRef.current;
      const distanceFromBottom = scrollHeight - (scrollTop + offsetHeight);

      return { shouldScroll: distanceFromBottom < 150 };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: ', snapshot);
    if (snapshot && snapshot.shouldScroll) {
      const listRef = this.listRef.current;
      listRef.scrollTop = listRef.scrollHeight;
    }
  }

  render() {
    const { items } = this.props;
    return (
      <ul ref={this.listRef} style={listStyles}>
        {items.map(item => (
          <li key={item.id}>
            <p>{item.text}</p>
            <p>
              <b>Created at:</b> {new Date(item.createdAt).toLocaleString()}
            </p>
            <hr />
          </li>
        ))}
      </ul>
    );
  }
}
