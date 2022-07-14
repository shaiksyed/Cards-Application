import { Component } from "react";
import Header from "../Header";
import Card from "../card";
import { data } from "../constants";
import { BsSearch } from "react-icons/bs";
import {BiFilter} from "react-icons/bi";
import Modal from "../Modal";
import './index.css'

class Home extends Component {
    state = {
        showSearchIcon :false,
        filterPopUpOpened : false,
        filteredData: data,
        popUpOpened: false,
    }
    onSearchFilter = (e) => {
        let value = e.target.value;
        if (value === ''){
            this.setState({filteredData: data});
        } else {
            let newData = data.filter(x => {
                if (x.name.toLowerCase().includes(value.toLowerCase())) {
                    return x;
                }   
            });
            console.log(newData);
            this.setState({filteredData: newData});
        }
    }
    onSearch = () => {
        this.setState({showSearchIcon: true});
    }
    onClickFilterButton = () => {
        this.setState({popUpOpened:true, filteredData:data, showSearchIcon: false})
    }
    onClosePopup = () =>{
        this.setState({popUpOpened:false})
    }
    filterDataFromModal = (data) => {
        let newData = [];
        const {filteredData} = this.state;
        if (data.onSubscriptionSelected) {
            filteredData.map(x => {
                if (x.card_type === 'Subscription') {
                newData.push(x);
                }   
            });
        }
        if (data.onBurnerSelected) {
            filteredData.map(x => {
                if (x.card_type === 'Burner') {
                newData.push(x);
                }   
            });
        }
        if (data.selectedCardholder !== ''){
            let datanew = newData.length !== 0 ? newData : filteredData;
            datanew.map(x => {
                if (x.card_holder.toLowerCase().includes(data.selectedCardholder.toLowerCase())) {
                    newData.push(x);
                }   
            });
        }
        console.log(newData);
        this.setState({filteredData: newData});
    }
    render() {
        const {filteredData, popUpOpened, showSearchIcon} = this.state;
        let cardHolders =[];
        data.map(x => {
            cardHolders.push(x.card_holder);
        });
    return(
        <div>
        <Header />
        <div className="filter-section">
            {showSearchIcon ? 
            <input type={'search'} className= 'search' placeholder="Search here" onChange={this.onSearchFilter}/> : <BsSearch  onClick={this.onSearch} className='search-icon'/>}
            <button className="filter-button" onClick={this.onClickFilterButton}>
                <BiFilter  className='filter-icon'/>
                Filter
            </button>
        </div>
            {filteredData.length > 0 ? 
            filteredData.map(x => {
                return <Card data ={x}/>
            }) : <h1 className="no-data">No data found</h1>}
        {popUpOpened && <div className="modal"> 
            <Modal 
            onClosePopup = {this.onClosePopup} 
            cardHolders={cardHolders}
            filterDataFromModal = {this.filterDataFromModal}
            /> 
        </div>}
        </div>
    )
    }
}

export default Home