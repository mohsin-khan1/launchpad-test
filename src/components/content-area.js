import React from "react";
import {
  selectRepoIssues,
  selectRepoCommits,
  selectRepoName,
} from "../redux/repos/repos.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";

class ContentArea extends React.Component {
  constructor() {
    super();
    this.state = {
      issue_tab: "block",
      commits_tab: "none",
    };
  }
  render() {
    const { repoIssues, repoCommits, repoName } = this.props;

    const toggleContent = (e) => {
      const val = e.target.value;

      if (val === "0") {
        this.setState({
          issue_tab: "block",
          commits_tab: "none",
        });
      } else {
        this.setState({
          issue_tab: "none",
          commits_tab: "block",
        });
      }
    };
    return (
      <div>
        <summary>
          <div>
            <select onChange={toggleContent} className="select">
              <option value={"0"}>Repo Issues</option>
              <option value={"1"}>Repo Commits</option>
            </select>
          </div>
        </summary>
        <article style={{ display: this.state.issue_tab }}>
          <h2 className="heading">{repoName} issues</h2>
          <div className="tab-content">
            <div id="label1" data-tab-content className="active">
              {repoIssues.length
                ? repoIssues.map((issue, i) => (
                    <div className="w-items" key={i}>
                      <div className="w-items-info">
                        <i className="fa fa-exclamation"></i>

                        <h4>
                          {issue.title.length < 20
                            ? issue.title
                            : issue.title.substring(0, 57) + "..."}
                        </h4>
                      </div>
                      <p>
                        <b>#{issue.number}</b> opened on{" "}
                        <b>{moment(issue.created_at).format("LLLL")}</b> by{" "}
                        <b>{issue.user.login}</b>
                      </p>
                    </div>
                  ))
                : "No record Found"}
            </div>
          </div>
        </article>
        <article style={{ display: this.state.commits_tab }}>
          <h2 className="heading">{repoName} commits</h2>
          <div className="tab-content">
            <div id="label1" data-tab-content className="active">
              {repoCommits.length
                ? repoCommits.map((commit, i) => (
                    <div className="w-items" key={i}>
                      <div className="w-items-info">
                        <i className="fa fa-exclamation"></i>
                        <h4>
                          {commit.commit.message.length < 20
                            ? commit.commit.message
                            : commit.commit.message.substring(0, 57) + "..."}
                        </h4>
                      </div>
                      <p>
                        <b>{commit.commit.author.name}</b> committed on{" "}
                        <b>
                          {moment(commit.commit.author.date).format("LLLL")}
                        </b>
                      </p>
                    </div>
                  ))
                : "No record Found"}
            </div>
          </div>
        </article>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  repoIssues: selectRepoIssues,
  repoCommits: selectRepoCommits,
  repoName: selectRepoName,
});

export default connect(mapStateToProps, null)(ContentArea);
