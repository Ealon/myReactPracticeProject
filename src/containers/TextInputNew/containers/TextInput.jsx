import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from './styles';
import PropTypes from 'prop-types';
import { hasValue } from '../../../global/functions';

// -----component class----------------
class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps != this.props) {
  //     return true;
  //   }
  // }
  
  // -----component functions----------------
  onChangeHandler = (e) => {
    if (hasValue(e.target.value)) {
      this.setState({
        error: false,
      });
    }
    this.props.function && (this.props.function(e.target.value));
  }

  setError() {
    this.setState({
      error: true,
    });
  }

  getValue() {
    return this.input.value;
  }

  setValue(val) {
    this.input.value = val;
  }

  isInputNotEmpty() {
    return hasValue(this.input.value);
  }

  focus() {
    this.input.focus();
  }


  // -----component view----------------
  render() {
    console.warn(this.props);
    return (
      <div className={this.props.classes.textInputContainer}>
        <input
          type="text"
          className={this.props.classes.input}
          placeholder={this.props.placeholder ? this.props.placeholder : `Please input ${this.props.title.toLowerCase()} ...`}
          onChange={this.onChangeHandler}
          defaultValue={this.props.defaultValue?this.props.defaultValue : ""}
          ref={node => this.input = node}
        />
        <div className={this.props.classes.title}>
          {this.props.title}
        </div>
        <div className={this.props.classes.underline} />
        {
          this.state.error?
            <div className={this.props.classes.underlineError} />
          :
            <div className={this.props.classes.underline2} />
        }
        {
          this.state.error ?
            <div className={this.props.classes.error}> * This field is required.</div>
            : null
        }
      </div>
    );
  }
}

TextInput.PropTypes = {
  title: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

export default injectSheet(styles)(TextInput);

