import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import { fetchCompanies } from '../actions/index';

//http://www.material-ui.com/#/components/raised-button
//https://docs.google.com/presentation/d/1Pf_JHGNQZdYRmI2-0Ml-X1qKB8hvCtubv0uwK7S2O9Q/edit#slide=id.g252963e52a_0_3
//https://bitbucket.org/business-directory/all/src/11f89ad14f42de5727cfd6aa1a893237f787893c/dashboard/src/containers/Directory.js?at=master&fileviewer=file-view-default

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { lastUpdate: '' };
  }

  componentWillMount() {
    this.props.fetchCompanies();
  }

  selectCompany(key) {
    this.props.history.push(`/portfolio/company/${key}`);
  }

  renderList() {
    let companies = this.props.companies;
    let newCompanies = [];
    let raws = [];
    let index = 0;
    while (companies.length) newCompanies.push(companies.splice(0, 6));
    newCompanies.forEach((companyRow) => {
      let cells = [];
      companyRow.forEach((company) => {
        cells.push(this.createCard(company))
      });
      raws.push(<div key={index++} className="row">{cells}</div>)
    });
    return raws;
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

  render() {
    return (
      <div style={styles.container}>
        <RaisedButton label="Add a new company" primary href="/company" />
        <br /><br />
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


export default connect(mapStateToProps, { fetchCompanies })(Home);

const styles = {
  container: {
    width: '100%',
    height: '100%',
    margin: '5%',
  },
};

