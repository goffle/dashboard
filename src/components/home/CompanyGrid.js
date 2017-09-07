import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

import { fetchCompanies } from '../../actions/index';

class CompanyGrid extends Component {

  componentWillMount() {
    this.props.fetchCompanies();
  }

  selectCompany(key) {
    this.props.history.push(`/company/${key}`);
  }
  createCard(company) {
    return (
      <div key={company.key} className="col-md-2" style={{ marginBottom: '32px', cursor: 'pointer' }} onClick={() => this.selectCompany(company.key)} >
        <Card >
          <CardTitle title={company.name} subtitle={company.website} />
          <CardMedia >
            <img src="https://unsplash.it/200/100" />
          </CardMedia>
          <CardText>
            {company.description}
          </CardText>
        </Card>
      </div >
    );
  }
  renderList() {
    const companies = this.props.companies;
    if (companies.length === 0) {
      return (<CircularProgress size={60} thickness={7} />);
    }
    const newCompanies = [];
    const raws = [];
    let rowIndex = 0;
    while (companies.length) newCompanies.push(companies.splice(0, 6));
    newCompanies.forEach((companyRow) => {
      const cells = [];
      companyRow.forEach((company) => {
        cells.push(this.createCard(company));
      });
      raws.push(<div key={rowIndex++} className="row">{cells}</div>)
    });
    return raws;
  }
  render() {
    return (
      <div style={styles.container}>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ companies }) => {
  const array = Object.keys(companies).map((key) => {
    const obj = Object.assign(companies[key], { key });
    return obj;
  });
  return { companies: array };
};


export default connect(mapStateToProps, { fetchCompanies })(CompanyGrid);

const styles = {
  container: {
    width: '100%',
    height: '100%',
    margin: '5%',
  },
  button: {
    margin: 20,
  },
};

