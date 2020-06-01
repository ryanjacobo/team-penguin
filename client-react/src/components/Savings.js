import React from 'react'; 
import axios from 'axios'; 
import '../transaction.min.css'; 


class Savings extends React.Component {
    constructor(props) {
        super(props); 
        this.state ={
            transactions: [],            
        }
    }

    componentDidMount() {
        this.getSavings(); 
    };

    
    getSavings = () => {
        let url = "http://localhost:3001/transactions/savings"; 
        axios.get(url)
            .then(response => this.setState({ transactions: response.data})); 
    }; 


    render() {
        const amounts = this.state.transactions.map(transaction => transaction.amount);
        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
        return(
            <div>
                <h1>${total}</h1>
            </div>
        )
    }
}

export default Savings; 