import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from './styles';
import hasValue from '../../../global/functions';

// -----component class----------------
class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

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
    return (
      <div className={this.props.classes.textInputContainer}>
        <div className={this.props.classes.title}>
          {this.props.title}
        </div>
        <input
          type="text"
          className={this.props.classes.input}
          placeholder={this.props.placeholder ? this.props.placeholder : `Please input ${this.props.title.toLowerCase()} ...`}
          onChange={this.onChangeHandler}
          defaultValue={this.props.defaultValue?this.props.defaultValue : ""}
          ref={node => this.input = node}
        />
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

export default injectSheet(styles)(TextInput);

