import React, { Component } from 'react';
import injectSheet from 'react-jss';
import axios from 'axios';
import TextInput from '../../../containers/TextInput';
import ButtonLink from '../../../components/ButtonLink';
import Button from '../../../components/Button';
import CircleLoader from '../../../components/CircleLoader';
import { blue500 } from '../../../global/colors';
import { SERVER_PATH } from '../../../global/const';
import styles from './styles';

class CreateNewCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      englishName: '',
      chineseName: '',
      phone: '',
      address: '',
    };
  }

  handleChange = name => val => {
    this.setState({
      [name]: val,
    });
  }
  
  postNewCustomer = () => {
    //eslint-disable-next-line
    if (confirm('Are you sure you want to save this customer into the database?')) {
      this.setState({ fetching: true });
      const self = this;
      const newCustomerInfo = {
        englishName: this.state.englishName,
        chineseName: this.state.chineseName,
        phone: this.state.phone,
        address: this.state.address,
      }

      axios.post(`${SERVER_PATH}/createNewCustomer`,
        newCustomerInfo
      )
      .then(function (response) {
        console.log(response);
        alert(response.data.msg);
        if (response.data.status === 'success') {
          self.setState({ fetching: false });
        } else {
          self.setState({ fetching: false });
        }
      })
      .catch(function (error) {
        console.log(error);
        self.setState({ fetching: false });    
      });
    } else {
      // alert('no');
    }
  }

  render() {
    return (
      <div style={{
        width: '80%', margin: '50px auto',
        }}
      >
        <div style={{ textAlign: 'center', padding: '10px 0 50px 0' }} >
          Customer Information
        </div>
        <div className={this.props.classes.flexParent} >
          <div className={this.props.classes.flexChild} >
            <TextInput
              title="Name"
              placeholder=""
              function={this.handleChange('chineseName')}
            />
          </div>
          <div className={this.props.classes.flexChild} >  
            <TextInput
              title="English / Pinyin"
              placeholder="input something"
              function={this.handleChange('englishName')}
            />
          </div>
          <div className={this.props.classes.flexChild} >
            <TextInput
              title="Phone"
              placeholder="input something"
              function={this.handleChange('phone')}
              />
          </div>
          <div className={this.props.classes.flexChild} >
            <TextInput
              title="Address"
              placeholder="input something"
              function={this.handleChange('address')}
              />
          </div>
        </div>
        {
          this.state.fetching ?
            <CircleLoader size={24} color={blue500} />
            : null
        }
        <div style={{ textAlign: 'center' }}>
          <Button func={this.postNewCustomer}>create</Button>
          <ButtonLink link="/customers">cancel</ButtonLink>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(CreateNewCustomer);

