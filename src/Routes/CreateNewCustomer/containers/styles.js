const styles = {
  flexParent: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignContent: 'flex-start',
  },
  flexChild: {
    boxSizing: 'border-box',
    '@media (max-width: 767px)': {
      flex: '0 0 100%',
    },
    flex: '0 0 50%',
  },
};

export default styles;
