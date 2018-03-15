import { pink400 } from '../../../global/colors';

const styles = {
  flexParent: {
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
};

export default styles;
