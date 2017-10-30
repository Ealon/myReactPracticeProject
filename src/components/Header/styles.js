const maxWidth = 860;

const styles = {
  header: {
    backgroundColor: '#000',
    fontWeight: 300,
    fontFamily: 'lato, sans-serif',
    textAlign: 'center',
    // borderBottom: '2px solid #efefef',
    '& a': {
      position: 'relative',
      display: 'inline-block',
      padding: '20px 10px',
      outline: 'none',
      textDecoration: 'none !important',
      textTransform: 'uppercase',
      letterSpacing: 2,
      color: '#eee',
      fontSize: 14,
      width: 150,
      textShadow: '0 0 1px rgba(255, 255, 255, 0.3)',
      '&:before': {
        display: 'inline-block',
        opacity: 0,
        transition: 'transform 0.3s, opacity 0.2s',
        marginRight: 5,
        content: '"-"',
        transform: 'translate(15px)',
      },
      '&:after': {
        display: 'inline-block',
        opacity: 0,
        transition: 'transform 0.3s, opacity 0.2s',
        marginLeft: 5,
        content: '"-"',
        transform: 'translate(-15px)',
      },
      '&.route--active, &:hover': {
        fontWeight: 500,
        letterSpacing: 3,
        color: '#64B5F6',
        // /* background-color: #222, */
        transitionDuration: '0.2s',
      },
      '&:hover:before, &:hover:after': {
        opacity: 1,
        '-webkit-transform': 'translate(0px)',
        '-moz-transform': 'translate(0px)',
        transform: 'translate(0px)',
      },
    },
  },
  [`@media (max-width: ${maxWidth}px)`]: { // important usage
    header: {
      '& a': {
        fontSize: 12,
        width: 120,
      },
    },
  },
};

export default styles;
