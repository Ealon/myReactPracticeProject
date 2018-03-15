import React, { Component } from 'react';
import Select from 'react-select';
import './StyledSelect.scss';

class StyledSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      optionValue: null,
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(val) {
    this.setState({optionValue: val, error: false});
    this.props.setOutterState && this.props.setOutterState(val);
  }

  componentDidMount() {
    this.props.defaultValue && this.setState({optionValue: this.props.defaultValue});
  }
  
  getValue() {
    return this.state.optionValue
  }

  isInputNotEmpty() {
    return this.state.optionValue?true:false;
  }

  setError() {
    this.setState({error: true});
  }

  setValue(val) {
    this.setState({optionValue: val});
  }

  focus(){
    document.querySelector('.Select-input input').focus();
  }

  render() {
    let options = this.props.options;
    return (
      <div className="StyledSelect-container">
        <div className="StyledSelect-title">{this.props.title ? this.props.title : null}</div>
        <Select
          simpleValue
          multi={false}
          placeholder={this.props.placeholder ? this.props.placeholder : null}
          value={this.state.optionValue}
          options={options}
          onChange={this.handleSelectChange}
        />
        <div className="StyledSelect-underline"></div>
        <div className="StyledSelect-underline2"></div>
        {this.state.error?<div className="StyledSelect-underline-error"></div>:<div className="StyledSelect-underline2"></div>}
        {this.state.error?<div className="StyledSelect-error"> * This field is required.</div>:null}
      </div>
    );
  }
}

export default StyledSelect;
