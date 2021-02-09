import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenuLinks } from "../redux/repos/repos.selectors";
import { fetchRepoData } from "../redux/repos/repo.actions";
class SideBar extends React.Component {
  componentDidMount() {}

  render() {
    const { menuLinks, fetchRepoData } = this.props;
    return (
      <div>
        <div className="sidebar">
          <h2>LOGO</h2>
          <ul>
            {menuLinks.length
              ? menuLinks.map((link, i) => (
                  <li key={i}>
                    <a onClick={() => fetchRepoData(link.url)}>
                      <i className={link.icon}></i>
                      {link.title}
                    </a>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  menuLinks: selectMenuLinks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRepoData: (url) => dispatch(fetchRepoData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
