import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.props.protectedTest();
  }

  renderContent() {
    if(this.props.content) {
      return (
        <p>{this.props.content}</p>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

/* subscribe component to specific state updates from Redux store. */
function mapStateToProps(state) {
  return { content: state.auth.content };
}

export default connect(mapStateToProps, actions)(Dashboard);
