const size = 200;

const styles = {
  previewContainer: {
    textAlign: 'center',
    display: 'table-cell',
    '&:hover': {
      '& $image': {
        transform: 'scale(1.1)',
        transition: '.3s ease-in-out',
      },
    },
  },
  imageContainer: {
    width: size,
    height: size,
    background: '#fff',
    overflow: 'hidden',
  },
  image: {
    width: size,
    height: size,
    // -webkit-transform: 'scale(1)',
    transform: 'scale(1)',
    // -webkit-transition: .3s ease-in-out,
    transition: '.3s ease-in-out',
    zIndex: -1,
  },
  overlay: {
    // paddingTop: '110px',
    position: 'relative',
    width: size,
    height: size,
    top: -size,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    // -webkit-transition: .3s ease-in-out,
    transition: '.3s ease-in-out',
    zIndex: 999,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      // -webkit-transition: .3s ease-in-out,
      transition: '.3s ease-in-out',
      '& $button': {
        opacity: 1,
        // -webkit-transition: .2s ease-in-out,
        transition: '.2s ease-in-out',
      },
    },
  },
  button: {
    opacity: 0,
    fontSize: 10,
    color: '#fff',
    position: 'relative',
    outline: 'none',
    top: size / 2 - 14,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 20,
    padding: '8px 10px',
    border: 'solid 2px #fff',
    // -webkit-transition: .2s ease-in-out,
    transition: '.2s ease-in-out',
    '&:hover': {
      backgroundColor: '#1a86f6',
      border: 'solid 2px #1a86f6',
      // -webkit-transition: .2s ease-in-out,
      transition: '.2s ease-in-out',
    },
  },
  previewName: {
    position: 'relative',
    width: size,
    top: -size,
    fontSize: 14,
    fontWeight: 700,
  },
};

export default styles;
