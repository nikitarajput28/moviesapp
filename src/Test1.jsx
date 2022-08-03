// import React from 'react'

// function Test1() {
//   return (
//     <h1>Test1</h1>
//   )
// }

// export default Test1
// function Search(props){
//   return(
//       <div>
//           <p>Showing {this.props.noOfMovies} movies from database</p>
//           <button type="button" class="btn btn-primary mb-4">New</button>

//           <div class="input-group mb-3">
// <input type="text" 
// class="form-control" 
// placeholder="Search..."
// onChange={(el) => {
// props.receiveSearchParam(el.currentTarget.value);
// }} />
// </div>
//       </div>
//   );
// }
// export default Search;


// import React from 'react';
// import './App.css';
// import Category from './components/Category';
// import Navbar from './components/Navbar';
// import Search from './components/Search';
// import Table from './components/Table';

// class App extends React.Component {
//   state = {
//     noOfMovies: 0,
//     seachString: "",
//   };

//   receiveMovieData = (number) => {
//      this.setState({noOfMovies: number});
//   };

//   receiveSeachParam = (param) => {
//     this.setState({seachString: param});
//  };

//   render(){
//   return (
//     <>
//     <Navbar/>

//     <div className='row'>
//       <div className='col-2 p-4'>
//         <Category/>
//       </div>
//       <div className='col-10 p-4'>
//       <div className='row'>
//       <div className='col-3'>
      //   <Search 
      //   noOfMovies = {this.state.noOfMovies}
      //   receiveSeachParam={this.receiveSeachParam}
      //   />
      // </div>
      // <div className='row'>
      //   <div className='col-8'>
      //     <Table sendData = {this.receiveMovieData}
      //     seachString={this.state.seachString}/>
      //   </div>
//       </div>
//       </div>
//       </div>
//     </div>
//     </>
    
//   );
//  }
// }

// export default App;
// import React from "react"; 

// class Table extends React.Component{
//     state={
//         allMovies: [],
//         currPage:1,
//     };

//     componentDidMount(){
//         fetch("/movies").then(function(res){
//             return res.json()
//         }).then((json)=>{
//             this.setState({allMovies:json});

//             this.props.sendData(json.length);
//         })
//     }

//     render(){
//         let moviesToDisplay = [];
//         if(this.state.search){
//             let strToCompare = this.props.search.toLowerCase();
//             let moviesInState = this.props.allMovies;
//             for(let i=0; i< moviesInState.length; i++){
//                 if(moviesInState[i].title.toLowerCase().includes(strToCompare)){
//                     moviesToDisplay.push(moviesInState[i]);
//                 }
//             }
//         }else{
//             moviesToDisplay = this.state.allMovies
//         }
//         let noofpages = Math.ceil(this.state.allMovies.length/5);
//         // why we need array here bcoz we can't use this array with help of for loop in lower nav tag so, we made here an imaginary array and apply map function on this array in nav tag lower.
//         let arr = [];
//         for(let i=1; i<=noofpages; i++){
//             arr.push(i);
//         }

//         let start = (this.state.currPage - 1)*5;
//         let end = this.state.currPage*5-1;

//         moviesToDisplay = this.state.allMovies.slice(
//             start,
//             Math.min(end, this.state.allMovies.length-1)+1
//         );

//         return(
//             <div>
//                 <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Title</th>
//       <th scope="col">Genre</th>
//       <th scope="col">Stock</th>
//       <th scope="col">Rate</th>
//       <th scope="col"></th>
//       <th scope="col"></th>
//     </tr>
//   </thead>
//   <tbody>

//     {
//         moviesToDisplay.map((element) => {
//             return(
//             <tr key={(element._id)}>
//                 <td>{element.title}</td>
//                 <td>{element.genre.name}</td>
//                 <td>{element.numberInStock}</td>
//                 <td>{element.dailyRentalRate}</td>
//                 <td
//                 onClick={() => {
//                     let allMovies = this.state.allMovies;
//                     let index = allMovies.findIndex((e) => e._id == element._id);
//                     allMovies[index].liked 
//                     ? allMovies[index].liked = false 
//                     : allMovies[index].liked = true;
//                     this.setState({allMovies: allMovies});
//                 }}>
//                     {element.liked ? "Liked!" : "Like"}
//                     </td>
//                 <td>
//                     {/* delete using id and after removing state => update render function means noOfPages, moviesToDisplay etc */}
//                 <button type="button" class="btn btn-danger"
//                 onClick={() => {
//                     let allMovies = this.state.allMovies;
//                     allMovies = allMovies.filter((el) => {
//                         return el._id != element._id;
//                     });
//                     this.props.sendData(allMovies.length);
                    
//                     this.setState({allMovies: allMovies});

//                 }}>
//                     Delete</button>
//                 </td>
//               </tr>
//             );
//         })
//     }

//   </tbody>
// </table>

// <nav>
//   <ul class="pagination">
//     <li class="page-item"
//     onClick={() => {
//         let currPage = this.state.currPage;
//         currPage--;
//         if(currPage < 1) currPage = 1;
//         this.setState({currPage: currPage});
//     }}
//     >
//         <a class="page-link" href="#">Previous</a></li>
//     {
//         arr.map((element)=>{
//             return(
//                 <li class="page-item"
//                 onClick={() => {
//                     this.setState({currPage: element});
//                 }}
//                 >
//                     <a class="page-link" href="#">
//                         {element}
//                         </a></li>
//             );
//         })
//     }
//     <li class="page-item"
//     onClick={() => {
//         let currPage = this.state.currPage;
//         currPage++;
//         if(currPage > noofpages) currPage = noofpages;
//         this.setState({currPage: currPage});
//     }}>
//         <a class="page-link" href="#">Next</a></li>
//   </ul>
// </nav>

//             </div>
            
            
//         );
//     }
// }
// export default Table;