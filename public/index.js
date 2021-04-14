class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {total_amount:1000};
  }

  render(){
    return(
      <div>
            <h1>Lottery Application 2.0</h1>
            <div>
                <p>Total amount is : {this.state.total_amount}</p>
            </div>
            <form>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="amount"/>
                <button>Participate</button>
            </form>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
  <App />
  </div> ,
  document.getElementById('reactBinding')
);
