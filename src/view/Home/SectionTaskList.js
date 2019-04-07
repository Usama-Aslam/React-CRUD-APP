import React, { Component } from "react";
import {
  TextField,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardHeader
} from "@material-ui/core";

import "./SectionTaskList.css";

export default class SectionTodoList extends Component {
  render() {
    console.log("editable", this.props.editable);
    const {
      handleEditButton,
      handleText,
      editable,
      handleUpdateButton
    } = this.props;
    return (
      <div style={{ marginTop: 10 }}>
        <Grid container spacing={16} alignItems="flex-end">
          {this.props.data.map((item, index) => {
            return (
              <Grid item xs={12} md={3}>
                <Card className="card">
                  <CardContent className="card-content">
                    <Grid container alignItems="flex-end">
                      <Grid item xs={12} md={12} style={{ textAlign: "left" }}>
                        <textarea
                          id={`textField${index}`}
                          disabled={!this.props.editable[index].allow}
                          style={{
                            border: `${
                              this.props.editable[index].allow ? "grey" : "none"
                            }`,
                            background: `${
                              this.props.editable[index].allow
                                ? "#e2e2e2"
                                : "none"
                            }`,
                            width: "100%",
                            height: "100%",
                            minHeight: 90,
                            fontFamily: "arial"
                          }}
                          value={item.taskData}
                          onChange={e => handleText("textArea", e, index)}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    {!this.props.editable[index].allow ? (
                      <Grid
                        container
                        md={12}
                        spacing={8}
                        alignItems="flex-end"
                        style={{ paddingLeft: 2 }}
                      >
                        <Grid item xs={6} md={6}>
                          <Button
                            fullWidth
                            variant="contained"
                            style={{ background: "green" }}
                            onClick={() => {
                              handleEditButton(index);
                            }}
                          >
                            <span style={{ color: "white" }}>EDIT</span>
                          </Button>
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <Button
                            fullWidth
                            variant="contained"
                            style={{ background: "orange" }}
                          >
                            <span style={{ color: "white" }}>DELETE</span>
                          </Button>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid item xs={6} md={12}>
                        <Button
                          fullWidth
                          variant="contained"
                          style={{ background: "orange" }}
                          onClick={() => handleUpdateButton(item, index)}
                        >
                          <span style={{ color: "white" }}>UPDATE</span>
                        </Button>
                      </Grid>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
// export default connect(null, uploadActions)(SectionTaskList)
