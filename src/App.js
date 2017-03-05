import React, { Component } from "react";
import IssueAdd from "./add";
import IssueTable from "./table";
import IssueFilter from "./filter";

export default class IssueList extends Component {
  constructor() {
    super();
    this.state = { issues: [] };
    // setTimeout(this.createTestIssue.bind(this), 3000);
  }

  componentDidMount() {
    this.loadData();
  }
  loadData() {
    setTimeout(
      () => {
        this.setState({ issues: issues });
      },
      2000
    );
  }

  // createIssue(newIssue) {
  //   const newIssues = this.state.issues.slice();
  //   newIssue.id = this.state.issues.length + 1;
  //   newIssues.push(newIssue);
  //   this.setState({ issues: newIssues });
  // }
  // createTestIssue() {
  //   this.createIssue({
  //     id: 3,
  //     status: "New",
  //     owner: "Pieta",
  //     created: new Date(),
  //     title: "Completion date should be optional"
  //   });
  // }
  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <IssueTable issues={this.state.issues} />
        <IssueAdd />
      </div>
    );
  }
}

const issues = [
  {
    id: 1,
    status: "Open",
    owner: "Ravan",
    created: new Date("2016-08-15"),
    effort: 5,
    completionDate: undefined,
    title: "Error in console when clicking Add"
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Eddie",
    created: new Date("2016-08-16"),
    effort: 14,
    completionDate: new Date("2016-08-30"),
    title: "Missing bottom border on panel"
  }
];
