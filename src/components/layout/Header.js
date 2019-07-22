import React from 'react';

class Header extends React.Component {

  handleChange = (e) => {
    this.props.handleSearch(e.target.value);
  };

  clearInput = (e) => {
    document.getElementById('searchInput').value = '';
    this.props.handleSearch('');
  }

  render() {
    return (
      <header>
        <div className="header clear-fix">
          <h1>TODO List</h1>
          <div className="search-field">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" id="searchInput" placeholder="SEARCH" onChange={this.handleChange} />
            <button onClick={this.clearInput}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </header >
    )
  }
}

export default Header;