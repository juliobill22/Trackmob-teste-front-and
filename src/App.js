
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { render } from "react-dom";
import MediaQuery from "react-responsive";
import ReactModal from "react-modal";

import ReactDOM from 'react-dom';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

class FormModal extends Component{
   render(){
      const { text, onRequestClose } = this.props;
      return (
         <Modal
            onRequestClose={onRequestClose}
            effect={Effect.Newspaper}>
            {text}
			
            <button onClick={ModalManager.close}>Fechar</button>
         </Modal>
      );
   }
}

class ListaCarros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
	this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleModal(event){
     const sValue = event.target.value;
     ModalManager.open(<FormModal text={sValue} onRequestClose={() => true}/>);
  }  
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Lista de carros
          <ul value={this.state.value} onClick={this.handleChange.bind(this), this.handleModal.bind(this)}>
            <li value="1">Celta</li>
            <li value="2">Corsa Pickup</li>
            <li value="3">Maverick</li>
            <li value="4">Ferrari</li>
			<li value="5">Opala</li>
			<li value="6">Fusca</li>
          </ul>
        </label>
      </form>
    );
  }
}

export default ListaCarros;