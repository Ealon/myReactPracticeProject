import { blue600, pink300, teal300 } from '../../global/colors';

const styles = {
  itemContainer: {
    padding: '10px 10px 20px 10px',
    border: '1px solid #eee',
    textAlign: 'center',
    '& svg': {
      verticalAlign: 'sub !important',
    },
    '& a': {
      textDecoration: 'none !important',
      color: blue600,
    },
    '& a:hover': {
      color: pink300,
    },
  },
  imgContainer: {
    width: '50%',
    margin: '0 auto',
  },
  img: {
    width: '100%',
    maxHeight: '100px',
    cursor: 'pointer',
  },
  previewImg: {
    width: '100%',
    height: 0,
    paddingBottom: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  chineseName: {
    color: '#000',
    marginTop: 5,
  },
  productName: {
    textAlign: 'center',
    color: '#444',
  },
  checkMarkContainer: {
    width: '85%',
    position: 'relative',
    top: '-28px',
    textAlign: 'right',
    marginBottom: '-28px',
    height: '28px',
    transition: '.2s ease-in-out',
  },
  buttonAdd: {
    backgroundColor: '#ffffff00',
    color: teal300,
    border: 'none',
    borderRadius: '5px',
    padding: 6,
    // width: '8em',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '0.9em',
    '&:hover': {
      // backgroundColor: teal300,
      // color: '#fff',
      color: '#69F0AE',
      transition: '.2s ease-in-out',
    },
  },
  buttonRemove: {
    backgroundColor: '#ffffff00',
    color: pink300,
    border: 'none',
    borderRadius: '5px',
    padding: 6,
    fontSize: '0.7em',
    // width: '8em',
    cursor: 'pointer',
    outline: 'none',
    '&:hover': {
      backgroundColor: pink300,
      color: '#fff',
      transition: '.2s ease-in-out',
    },
  },
};

export default styles;
