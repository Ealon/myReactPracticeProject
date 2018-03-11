import { blue600, blue800, pink300 } from '../../global/colors';

const styles = {
  itemContainer: {
    padding: '10px 10px 20px 10px',
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
    cursor: 'pointer',
  },
  chineseName: {
    color: '#000',
    marginTop: 5,
  },
  productName: {
    textAlign: 'center',
    color: '#444',
  },
  cart: {
    color: blue800,
    cursor: 'pointer',
    '&:hover': {
      color: pink300,
    },
  },
};

export default styles;
