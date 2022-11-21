import {GoFlame, GoSync} from 'react-icons/go';
import {FaSyncAlt} from 'react-icons/fa';
import ProgressBar from '../ProgressBar';
import './index.css';

const Card = (props) => {
    const {
        name,
        budget_name,
        spent,
        availble_to_spend,
        card_type,
        expire, 
        card_holder
    } =props.data;
    console.log('shaik')
    return (
        <div className="card-container" style={{
            boxShadow: '1px 2px 9px #808080',
          }}>
            <div className="card-top-section">
                <div className="cardname-deatils">
                    <h1 className='card-name'>{name}</h1>
                    <div className='list-container'>
                    <p className='card-holder'>{card_holder}</p>
                    <p className='grey-circle'></p>
                    <p className='card-holder'>{budget_name}</p>
                    </div>
                </div>
                <div className='icon-section' >
                   {card_type === 'Subscription' ?
                    <GoSync color='red' style={{ boxShadow: '1px 1px 9px #808080'}} className='icon'/> :
                    <GoFlame color='red' style={{ boxShadow: '1px 1px 9px #808080'}} className='icon'/>
                    }
                </div>
            </div>
            <div className='card-top-section'>
            <p className="budget-name">{card_type}</p>
            <p className='expire'> Expire: {expire}</p>
            </div>
            <ProgressBar spent={spent.value} available = {availble_to_spend.value}/>
            <div className='card-top-section'>
                <div className='list-container'>
                <p className='circle'></p>
                <p className='card-datail'>Spent</p>
                </div>
                <p className='card-datail'>{spent.value} {spent.currency}</p>
            </div>
            <div className='card-top-section'>
            <div className='list-container'>
                <p className='circle circle-color'></p>
                <p className='card-datail'>Available to Spend</p>
                </div>
                <p className='card-datail'>{availble_to_spend.value} {availble_to_spend.currency}</p>
            </div>

        </div>
    )
};

export default Card