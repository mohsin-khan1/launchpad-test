import React from "react";
import {
  selectRepoForkCount,
  selectRepoStarCount,
  selectRepoWatchCount,
} from "../redux/repos/repos.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

class Header extends React.Component {
  render() {
    const { repoWatch, repoStars, repoFork } = this.props;
    return (
      <div>
        <header>
          <h1>DASHBOARD</h1>
          <ul>
            <li>
              <a href="https://www.google.com">
                <i class="fas fa-eye"></i> Watch{" "}
                {Math.abs(repoWatch) > 999
                  ? Math.sign(repoWatch) *
                      (Math.abs(repoWatch) / 1000).toFixed(1) +
                    "k"
                  : Math.sign(repoWatch) * Math.abs(repoWatch)}
              </a>
            </li>
            <li>
              <a href="https://www.google.com">
                <i class="far fa-star"></i> Start{" "}
                {Math.abs(repoStars) > 999
                  ? Math.sign(repoStars) *
                      (Math.abs(repoStars) / 1000).toFixed(1) +
                    "k"
                  : Math.sign(repoStars) * Math.abs(repoStars)}
              </a>
            </li>
            <li>
              <a href="https://www.google.com">
                <i class="fas fa-code-branch"></i> Fork{" "}
                {Math.abs(repoFork) > 999
                  ? Math.sign(repoFork) *
                      (Math.abs(repoFork) / 1000).toFixed(1) +
                    "k"
                  : Math.sign(repoFork) * Math.abs(repoFork)}
              </a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  repoWatch: selectRepoWatchCount,
  repoStars: selectRepoStarCount,
  repoFork: selectRepoForkCount,
});

export default connect(mapStateToProps, null)(Header);
