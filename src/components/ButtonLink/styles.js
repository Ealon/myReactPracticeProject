const hoverColor = '#F06292';

const styles = {
  buttonLink: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 2,
    color: '#1976D2',
    borderRadius: '20px',
    padding: '8px 10px',
    border: 'solid 2px #1976D2',
    '-webkit-transition': '.3s ease-in-out',
    backgroundColor: '#fff',
    transition: '.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      color: hoverColor,
      border: `solid 2px ${hoverColor}`,
      '-webkit-transition': '.3s ease-in-out',
      transition: '.3s ease-in-out',
    },
  },
};

export default styles;
