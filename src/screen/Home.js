import React, { Component } from "react";
import {
  TextField,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  CardHeader
} from "@material-ui/core";

import SectionTaskEnter from "../view/Home/SectionTaskEnter";
import SectionTaskList from "../view/Home/SectionTaskList";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as fetchActions from "../redux/action/fetchAction";
import * as uploadActions from "../redux/action/uploadAction";

class Home extends Component {
  state = {
    task: "",
    list: [],
    editable: []
  };

  async componentDidMount() {
    const { fetchAction, authDetail } = this.props;
    await fetchAction.fetchTask(authDetail.user);
    // await this.filterData();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.taskList !== this.props.taskList) {
      let { taskList } = this.props;
      let { list, editable } = this.state;
      list = [];
      editable = [];

      for (let pushID in taskList) {
        list.push({ pushID, taskData: taskList[pushID] });
        editable.push({ allow: false });
      }

      this.setState({
        list,
        editable
      });
    }
  };

  handleText = (name, e, index = 0) => {
    const value = e.target.value;

    switch (name) {
      case "task":
        this.setState({
          task: value
        });
        break;

      case "textArea":
        let { list } = this.state;
        list[index].taskData = value;
        this.setState({
          list
        });
      default:
        break;
    }
  };

  handleAddButton = async () => {
    const { uploadAction, authDetail } = this.props;
    await uploadAction.addTask(this.state.task, authDetail.user);
    this.setState({
      task: ""
    });
  };

  handleEditButton = async index => {
    this.state.editable[index].allow = true;
    this.setState({
      editable: this.state.editable
    });
  };

  handleUpdateButton = async (item, index) => {
    const { uploadAction, authDetail } = this.props;
    const { editable } = this.state;

    await uploadAction.updateTask(item.pushID, item.taskData, authDetail.user);
    editable[index].allow = false;

    this.setState({
      editable
    });
  };

  render() {
    console.log(this.state.list);
    return (
      <div style={{ padding: 10 }}>
        {/* Task Card */}
        <SectionTaskEnter
          handleText={this.handleText}
          task={this.state.task}
          handleAddButton={this.handleAddButton}
        />
        <SectionTaskList
          data={this.state.list}
          handleEditButton={this.handleEditButton}
          handleText={this.handleText}
          editable={this.state.editable}
          handleUpdateButton={this.handleUpdateButton}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    taskList: state.fetchReducer.taskList,
    authDetail: state.authReducer
  };
};
const maptDispatchToProps = dispatch => {
  return {
    uploadAction: bindActionCreators(uploadActions, dispatch),
    fetchAction: bindActionCreators(fetchActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  maptDispatchToProps
)(Home);
