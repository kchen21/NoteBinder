module.exports = {
  overlay: {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(238, 238, 238, 0.75)'
  },
  content: {
    position        : 'fixed',
    top             : '50%',
    left            : '50%',
    right           : 'auto',
    bottom          : 'auto',
    transform       : 'translate(-50%, -50%)',
    width           : '320px',
    maxWidth        : '90vw',
    backgroundColor : '#fff',
    border          : '1px solid #000',
    borderRadius    : '4px',
    outline         : 'none',
    padding         : '20px'
  }
};