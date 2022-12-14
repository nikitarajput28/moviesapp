import React from 'react';
import './App.css';
import Category from './components/Category';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Table from './components/Table';

class App extends React.Component {
  state = {
    noOfMovies: 0,
    searchString: "",
    currGenre: "All Genre"
  };

  receiveMovieData = (number) => {
     this.setState({noOfMovies: number});
  };

  receiveSearchParam = (param) => {
    this.setState({searchString: param});
 };

 receiveCurrGenre = (genre) => {
  this.setState({currGenre: genre});
};



  render(){
  return (
    <>

    <div className='row'>
      <div className='col-2 p-4'>
        <Category receiveCurrGenre={this.receiveCurrGenre}/>
      </div>
      <div className='col-10 p-4'>
      <div className='row'>
      <div className='col-3'>
      <Search 
        noOfMovies = {this.state.noOfMovies}
        receiveSearchParam={this.receiveSearchParam}
        />
      </div>
      <div className='row'>
        <div className='col-8'>
          <Table sendData = {this.receiveMovieData}
          searchString={this.state.searchString}
          currGenre={this.state.currGenre}/>
        </div>
      </div>
      </div>
      </div>
    </div>
    </>
    
  );
 }
}

export default App;
