import { render } from "@testing-library/react";
import { Component } from "react";
import "./index.css";

class Modal extends Component {
 state = {
    onSubscriptionSelected : false,
    onBurnerSelected : false,
    selectedCardholder: ''
 }

 closetoggleModal = () => {
    const {onClosePopup} = this.props;
    this.setState({
        onSubscriptionSelected : false,
        onBurnerSelected : false,
        selectedCardholder: ''
    })
    onClosePopup();
  };
  onChangeSubscription = (e) => {
    this.setState({onSubscriptionSelected : !this.state.onSubscriptionSelected})
  }
  onChangeBurner = (e) => {
    this.setState({onBurnerSelected : !this.state.onBurnerSelected})
  }

 applyFilters =() => {
    const {filterDataFromModal, onClosePopup} = this.props;
    filterDataFromModal(this.state);
    onClosePopup()
  }
selectedFilter =(e) => {
    this.setState({selectedCardholder : e.target.value})
  }
  render() {
    console.log(this.state);
    const {cardHolders} =this.props;

  return (
    <>
        <div className="modal">
          <div onClick={this.closetoggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="header">Filters</h2>
            <p>Type</p>
            <div className="fliters">
                <label><input type="checkbox" onChange={this.onChangeSubscription}/> Subscription</label>
                <label><input type="checkbox" onChange={this.onChangeBurner}/> Burner</label>
            </div>
            <h2>Cardholder</h2>
            <select className="drop-down" onChange={this.selectedFilter} value={this.state.selectedCardholder}>
                {cardHolders.map(x => <option value={x}>{x}</option>)}
            </select>
            <div className="fliters">
                <button className="button button-red" onClick={this.applyFilters}>Apply</button>
                <button onClick={this.closetoggleModal} className="button button-grey">Clear</button>
            </div>
          </div>
        </div>
    </>
  )
  }
}

export default Modal