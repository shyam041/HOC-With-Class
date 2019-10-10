import React from 'react';

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;
const withAmount = (currencyComponents)=>{
    return (class Amount extends React.Component{
      state={
        amount:0
      }
      onIncrement = ()=>{
        this.setState({amount:this.state.amount+1})
      }
      onDecrement = ()=>{
        this.setState((state)=>{
          return {amount:state.amount-1}
        })
      }
      render(){
        return(
            <div>
              <span>US Dollar: {this.state.amount} </span>
              <button type='button' onClick={this.onIncrement}>+</button>
              <button type='button' onClick={this.onDecrement}>-</button>
              {currencyComponents.map((CurrencyComponent,index)=>(
                <CurrencyComponent amount={this.state.amount} key={index}/>
              ))}  
            </div>
        )
      }
    });
}



function App() {
  const CurrenciesWithAmount = withAmount([Euro, Pound]);
  //console.log(CurrenciesWithAmount)
  return (
    <div>
      <h3>Currency Convertor</h3>
      <CurrenciesWithAmount/>
    </div>
    )
}

export default App;
