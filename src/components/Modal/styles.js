import { blue300 } from '../../global/colors';

const styles = {
  modalContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    height: '80%',
  },
  img: {
    height: '100%',
    color: '#fff',
  },
  closeButton: {
    color: blue300,
    textAlign: 'center',
    fontSize: '1.2em',
    cursor: 'pointer',
  },
};

export default styles;
