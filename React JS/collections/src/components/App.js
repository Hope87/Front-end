import React, { Component } from 'react';
import TaskEditor from './TaskEditor/TaskEditor';
import TaskList from './TaskList/TaskList';
import TaskFilter from './TaskFilter/TaskFilter';
import Modal from './Modal/Modal';
import Legend from './Legend/Legend';
import Priority from '../utils/Priority';
import * as TaskApi from '../services/task-api';

const containerStyles = {
  maxWidth: 1200,
  minWidth: 800,
  marginLeft: 'auto',
  marginRight: 'auto',
};

const headerStyles = { display: 'flex', justifyContent: 'space-between' };

const LegendOptions = [
  { priority: Priority.LOW, color: '#4caf50' },
  { priority: Priority.NORMAL, color: '#2196f3' },
  { priority: Priority.HIGH, color: '#f44336' },
];

const filterTasks = (tasks, filter) => {
  return tasks.filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    tasks: [],
    filter: '',
    isCreating: false,
    isEditing: false,
    selectedTaskId: null,
  };

  /**
   * Get tasks
   */
  componentDidMount() {
    TaskApi.fetchTasks().then(tasks => {
      this.setState({ tasks });
    });
  }

  /**
   * Delete tasks
   */
  deleteTask = id => {
    TaskApi.deleteTask(id).then(() => {
      this.setState(state => ({
        tasks: state.tasks.filter(task => task.id !== id),
      }));
    });
  };

  /**
   * Create task
   */
  addTask = task => {
    const taskToAdd = {
      ...task,
      completed: false,
    };

    TaskApi.postTask(taskToAdd).then(addedTask => {
      this.setState(state => ({
        tasks: [...state.tasks, addedTask],
      }));
    });

    this.closeCreateTaskModal();
  };

  /**
   * Update task
   */
  updateCompleted = id => {
    const findedTask = this.state.tasks.find(t => t.id === id);

    TaskApi.updateTask(id, {
      completed: !findedTask.completed,
    }).then(updatedTask => {
      this.setState(state => ({
        tasks: state.tasks.map(task => (task.id === id ? updatedTask : task)),
      }));
    });
  };

  updateTask = ({ text, priority }) => {
    TaskApi.updateTask(this.state.selectedTaskId, {
      text,
      priority,
    }).then(updatedTask => {
      this.setState(
        state => ({
          tasks: state.tasks.map(task =>
            task.id === state.selectedTaskId ? updatedTask : task,
          ),
        }),
        this.closeEditTaskModal,
      );
    });
  };

  /**
   * Open modal
   */

  openEditTaskModal = id => {
    this.setState({
      isEditing: true,
      selectedTaskId: id,
    });
  };

  openCreateTaskModal = () => {
    this.setState({ isCreating: true });
  };

  /**
   * Close modal
   */

  closeCreateTaskModal = () => {
    this.setState({ isCreating: false });
  };

  closeEditTaskModal = () => {
    this.setState({
      isEditing: false,
      selectedTaskId: null,
    });
  };

  /**
   * Filter tasks
   */
  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { tasks, filter, isCreating, isEditing, selectedTaskId } = this.state;

    const filteredTasks = filterTasks(tasks, filter);
    const taskInEdit = tasks.find(task => task.id === selectedTaskId);

    return (
      <div style={containerStyles}>
        <header style={headerStyles}>
          <button
            type="button"
            onClick={this.openCreateTaskModal}
            style={{ marginBottom: '10px' }}
          >
            Add task
          </button>
          <Legend items={LegendOptions} />
        </header>
        <TaskFilter value={filter} onChangeFilter={this.changeFilter} />
        <TaskList
          items={filteredTasks}
          onDeleteTask={this.deleteTask}
          onUpdateCompleted={this.updateCompleted}
          onEditTask={this.openEditTaskModal}
        />

        {isCreating && (
          <Modal onClose={this.closeCreateTaskModal}>
            <TaskEditor
              onSave={this.addTask}
              onCancel={this.closeCreateTaskModal}
            />
          </Modal>
        )}
        {isEditing && (
          <Modal onClose={this.closeEditTaskModal}>
            <TaskEditor
              onSave={this.updateTask}
              onCancel={this.closeEditTaskModal}
              text={taskInEdit.text}
              priority={taskInEdit.priority}
            />
          </Modal>
        )}
      </div>
    );
  }
}
