import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -100%)',
    border                : '1px solid #ccc',
    borderRadius          : '4px',
    padding               : '0px',

  }
};

class SettleBill extends React.Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.sbModalIsOpen}
          contentLabel="SettleBillModal"
          style={customStyles}
          onRequestClose={this.props.closeSBModal}
          >

        <div>Hellsdfasdfasfso</div>
        <button onClick={() => this.props.closeSBModal()}>Cancel</button>
      </Modal>
    </div>
    );
  }
}

export default SettleBill;
