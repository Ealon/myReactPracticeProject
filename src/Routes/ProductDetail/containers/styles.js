import { pink200, pink400 } from '../../../global/colors';

const styles = {
  flexParent: {
    padding: '20px 0 0 0',
    display: 'flex',
    flexFlow: 'row wrap',
    alignContent: 'flex-start',
  },
  flexChild: {
    boxSizing: 'border-box',
    '@media (min-width: 1024px)': {
      flex: '0 0 33%',
    },
    flex: '0 0 50%',
  },
  deleteButton: {
    color: pink400,
    cursor: 'pointer',
    padding: 8,
    '&:hover': {
      color: pink200,
    },
  },
};

export default styles;
