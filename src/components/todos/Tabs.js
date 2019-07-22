import React from 'react';

class Tabs extends React.Component {

  render() {
    return (
      <ul className="tabs clear-fix">
        <li onClick={this.props.handleTabs} className={!this.props.state.starredOnly && !this.props.state.completed && !this.props.state.remaining ? 'active' : ''}>All</li>
        <li onClick={this.props.handleTabs} className={this.props.state.starredOnly ? 'active' : ''}>Important</li>
        <li onClick={this.props.handleTabs} className={this.props.state.completed ? 'active' : ''}>Completed</li>
        <li onClick={this.props.handleTabs} className={this.props.state.remaining ? 'active' : ''}>Remaining</li>
      </ul>
    );
  }
}

export default Tabs;