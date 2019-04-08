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
import { Add } from "@material-ui/icons";

export default class SectionTaskEnter extends Component {
  render() {
    const { handleText, task, handleAddButton } = this.props;
    return (
      <div>
        {/* Task Card */}
        <Card>
          <CardHeader title="Schedule Your Daily Task" />
          <CardContent>
            <Grid container spacing={8} alignItems="flex-end">
              {/* TaskField and Add Button */}
              <Grid item xs={12}>
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item xs={12} md={11}>
                    <TextField
                      fullWidth
                      name="task"
                      id="input-task"
                      label="Enter Your Task Here"
                      variant="outlined"
                      value={task}
                      onChange={e => handleText("task", e)}
                    />
                  </Grid>

                  {/* addButton */}
                  <Grid item xs={12} md={1}>
                    <Button
                      fullWidth
                      variant="contained"
                      style={{
                        padding: 15,
                        background: "linear-gradient(60deg, #ab47bc, #8e24aa)"
                      }}
                      onClick={() => handleAddButton()}
                    >
                      <Add style={{ color: "white" }} />
                      <span style={{ color: "white" }}>Add</span>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}
