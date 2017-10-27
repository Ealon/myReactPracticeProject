const width = '90%';
const top = -1;

const styles = {
  textInputContainer: {
    width,
    height: '6em',
    margin: '0 auto',
  },
  title: {
    padding: '0 1.5em 0 0',
    fontWeight: 700,
  },
  input: {
    outline: 'none',
    border: 'none !important',
    fontSize: '1em',
    width: '90% !important',
    padding: '5px 0 5px 1px',
    '&:focus ~ $underline2': {
      transition: 'width ease 0.3s',
      width,
    },
  },
  underline: {
    height: 1,
    width,
    backgroundColor: '#aaa',
    position: 'relative',
    top: top + 1,
    left: 0,
  },
  underline2: {
    height: 2,
    width: 0,
    backgroundColor: '#1E88E5',
    transition: 'width ease 0.3s',
    position: 'relative',
    top,
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
  },
};

export default styles;
