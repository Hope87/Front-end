import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TaskEditor.module.css';
import PrioritySelector from '../PrioritySelector/PrioritySelector';
import Priority from '../../utils/Priority';

const options = Object.values(Priority);

export default class TaskEditor extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    text: PropTypes.string,
    priority: PropTypes.string,
  };

  static defaultProps = {
    text: '',
    priority: Priority.NORMAL,
  };

  state = {
    text: this.props.text,
    priority: this.props.priority,
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave({ ...this.state });

    this.reset();
  };

  reset() {
    this.setState({
      text: '',
      priority: Priority.NORMAL,
    });
  }

  render() {
    const { text, priority } = this.state;
    const { onCancel } = this.props;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
          placeholder="Enter task content..."
        />
        <label className={styles.label}>
          Select task priority:
          <PrioritySelector
            options={options}
            value={priority}
            onChange={this.handleChange}
          />
        </label>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
