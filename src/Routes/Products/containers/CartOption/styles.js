import { teal300, pink300 } from '../../../../global/colors';

const styles = {
  buttonAdd: {
    backgroundColor: '#ffffff00',
    color: teal300,
    border: 'none',
    borderRadius: '5px',
    padding: 6,
    width: '8em',
    cursor: 'pointer',
    outline: 'none',
    '&:hover': {
      backgroundColor: teal300,
      color: '#fff',
      transition: '.2s ease-in-out',
    },
  },
  buttonRemove: {
    backgroundColor: '#ffffff00',
    color: pink300,
    border: 'none',
    borderRadius: '5px',
    padding: 6,
    width: '8em',
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
