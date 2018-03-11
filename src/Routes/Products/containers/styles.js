const styles = {
  flexParent: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignContent: 'flex-start',
  },
  flexChild: {
    boxSizing: 'border-box',
    '@media (min-width: 1024px)': {
      flex: '0 0 25%',
    },
    flex: '0 0 33%',
  },
};

export default styles;
