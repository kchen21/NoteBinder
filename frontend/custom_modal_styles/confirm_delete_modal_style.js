module.exports = {
  overlay: {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position                   : 'absolute',
    top                        : '100px',
    left                       : '100px',
    right                      : '100px',
    bottom                     : '100px',
    backgroundColor            : '#eee',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    opacity                    : '0',
    transition                 : 'opacity 1s'
  }
};
