import React, { Component } from 'react';
import injectSheet from 'react-jss';
import axios from 'axios';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import 'react-table/react-table.css';
import ButtonLink from '../../../components/ButtonLink';
import { SERVER_PATH } from '../../../global/const';
import styles from './styles';

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }

  /* eslint-disable func-names */
  /* eslint-disable prefer-arrow-callback */
  componentWillMount() {
    const self = this;
    axios.get(`${SERVER_PATH}/customers`)
      .then(function (response) {
        console.log(response);
        if (response.data.status === 'success') {
          self.setState({ customers: response.data.customers });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  /* eslint-enable */

  render() {
    return (
      <div style={{ width: '90%', margin: '20px auto' }} >
        <div style={{ textAlign: 'right', paddingBottom: 40 }}>
          <ButtonLink link="/customers/new">+ new customer</ButtonLink>
        </div>
        {
          this.state.customers &&
          <ReactTable
            data={this.state.customers}
            noDataText="Oops! No matching data found."
            columns={[
              {
                Header: 'Name',
                // accessor: 'chineseName',
                maxWidth: 120,
                style: { paddingLeft: '1em' },
                Cell: row => (
                  // eslint-disable-next-line
                  <Link to={`/customer/${row.original._id}`}>
                    {row.original.chineseName}
                  </Link>
                  // row.row.status ?
                  //   <div className='account-active'>Yes</div>
                  //   : <div className='account-deactive'>No</div>
                ),
              },
              {
                Header: 'English Name / pinyin',
                accessor: 'englishName',
                maxWidth: 200,
                style: { paddingLeft: '1em' },
              },
              {
                Header: 'Phone',
                accessor: 'phone',
                maxWidth: 220,
                style: { paddingLeft: '1em' },
              },
              {
                Header: 'Address',
                accessor: 'address',
                style: { paddingLeft: '1em' },
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
            filterable
            showPageSizeOptions={false}
          />
        }
      </div>
    );
  }
}

export default injectSheet(styles)(Customers);
