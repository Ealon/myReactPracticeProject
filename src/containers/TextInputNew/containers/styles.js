import { blue500, pink500 } from '../../../global/colors';

const width = '90%';
const top = -1;

const styles = {
  textInputContainer: {
    width,
    // height: '6em',
    margin: '0 auto',
  },
  title: {
    padding: '0 1.5em 0 0',
    fontWeight: 700,
    color: '#000',
    transition: 'width ease 0.3s',
    position: 'relative',
    top: '-3em',
  },
  input: {
    outline: 'none',
    border: 'none !important',
    fontSize: '1em',
    width: '90% !important',
    padding: '25px 0 5px 1px',
    '&:focus ~ $title': {
      color: '#1E88E5',
    },
    '&:focus ~ $underline2': {
      width,
    },
    '&::-webkit-input-placeholder':
    { /* Chrome/Opera/Safari */
      color: '#ccc',
      fontWeight: 100,
    },
    '&::-moz-placeholder':
    { /* Firefox 19+ */
      color: '#ccc',
      fontWeight: 100,
    },
    '&:-ms-input-placeholder':
    { /* IE 10+ */
      color: '#ccc',
      fontWeight: 100,
    },
    '&:-moz-placeholder':
    { /* Firefox 18- */
      color: '#ccc',
      fontWeight: 100,
    },
  },
  underline: {
    height: 1,
    width,
    backgroundColor: '#aaa',
    position: 'relative',
    top: '-1em',
    left: 0,
  },
  underline2: {
    height: 2,
    width: 0,
    backgroundColor: '#1E88E5',
    transition: 'width ease 0.3s',
    position: 'relative',
    top: '-1em',
    left: 0,
  },
  underlineError: {
    height: 2,
    width,
    backgroundColor: '#F06292',
    transition: 'width ease 0.3s',
    position: 'relative',
    top,
    left: 0,
  },
  error: {
    color: '#FF4081',
    padding: '3px 0 5px 0',
  },
};

export default styles;
