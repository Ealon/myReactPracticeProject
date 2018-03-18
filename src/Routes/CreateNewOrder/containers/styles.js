import { pink400, pink300, teal300 } from '../../../global/colors';

const styles = {
  flexParent: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignContent: 'flex-start',
  },
  flexChild: {
    boxSizing: 'border-box',
    flex: '0 0 33%',
    '@media (max-width: 767px)': {
      flex: '0 0 100%',
    },
  },
  previewImg: {
    width: '60%',
    margin: '0 auto',
    maxWidth: '200px',
  },
  summary: {
    '& h4': {
      color: pink400,
    },
    boxSizing: 'border-box',
    textAlign: 'right',
    flex: '0 0 100%',
    padding: '0 10%',
  },
  img: {
    width: '60%',
    height: 0,
    margin: '0 auto',
    paddingBottom: '60%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  buttonSave: {
    backgroundColor: '#ffffff00',
    color: teal300,
    border: 'none',
    borderRadius: '9px',
    padding: 6,
    // width: '8em',
    cursor: 'pointer',
    marginRight: 5,
    outline: 'none',
    fontSize: '1em',
    transition: '.1s ease-in-out',
    '&:hover': {
      backgroundColor: teal300,
      color: '#fff',
      // color: '#69F0AE',
    },
  },
  buttonRemove: {
    backgroundColor: '#ffffff00',
    color: pink300,
    border: 'none',
    borderRadius: '9px',
    padding: 6,
    marginLeft: 5,
    fontSize: '1em',
    // width: '8em',
    cursor: 'pointer',
    outline: 'none',
    transition: '.1s ease-in-out',
    '&:hover': {
      backgroundColor: pink300,
      color: '#fff',
      // transition: '.5s ease-in-out',
    },
  },
};

export default styles;
