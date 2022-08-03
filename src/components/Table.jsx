import React from "react"; 

class Table extends React.Component{
    state={
        allMovies: [],
        currPage:1,
    };

    componentDidMount(){
        fetch("/movies").then(function(res){
            return res.json()
        }).then((json)=>{
            this.setState({allMovies:json});

            this.props.sendData(json.length);
        })
    }

    render(){
        let moviesToDisplay = [];

        if(this.props.currGenre != "All Genre"){
            moviesToDisplay =  this.state.allMovies.filter((element)=>{
                return element.genre.name == this.props.currGenre;
            });
        }else{
            moviesToDisplay = this.state.allMovies;
        }
        if(this.props.searchString){
            let strToCompare = this.props.searchString.toLowerCase();

            moviesToDisplay =  moviesToDisplay.filter((element)=>{
                return element.title.toLowerCase().includes(strToCompare)
            })
        }
        let noofpages = Math.ceil(moviesToDisplay.length/5);
        // why we need array here bcoz we can't use this array with help of for loop in lower nav tag so, we made here an imaginary array and apply map function on this array in nav tag lower.
        let arr = [];
        for(let i=1; i<=noofpages; i++){
            arr.push(i);
        }

        let start = (this.state.currPage - 1)*5;
        let end = this.state.currPage*5-1;

        moviesToDisplay = moviesToDisplay.slice(
            start,
            Math.min(end, moviesToDisplay.length-1)+1
        );

        return(
            <div>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

    {
        moviesToDisplay.map((element) => {
            return(
            <tr key={(element._id)}>
                <td>{element.title}</td>
                <td>{element.genre.name}</td>
                <td>{element.numberInStock}</td>
                <td>{element.dailyRentalRate}</td>
                <td
                onClick={() => {
                    let allMovies = this.state.allMovies;
                    let index = allMovies.findIndex((e) => e._id == element._id);
                    allMovies[index].liked 
                    ? allMovies[index].liked = false 
                    : allMovies[index].liked = true;
                    this.setState({allMovies: allMovies});
                }}>
                    {element.liked ? "Liked!" : "Like"}
                    </td>
                <td>
                    {/* delete using id and after removing state => update render function means noOfPages, moviesToDisplay etc */}
                <button type="button" class="btn btn-danger"
                onClick={() => {
                    let allMovies = this.state.allMovies;
                    allMovies = allMovies.filter((el) => {
                        return el._id != element._id;
                    });
                    this.props.sendData(allMovies.length);
                    
                    this.setState({allMovies: allMovies});

                }}>
                    Delete</button>
                </td>
              </tr>
            );
        })
    }

  </tbody>
</table>

<nav>
  <ul class="pagination">
    <li class="page-item"
    onClick={() => {
        let currPage = this.state.currPage;
        currPage--;
        if(currPage < 1) currPage = 1;
        this.setState({currPage: currPage});
    }}
    >
        <a class="page-link" href="#">Previous</a></li>
    {
        arr.map((element)=>{
            return(
                <li class="page-item"
                onClick={() => {
                    this.setState({currPage: element});
                }}
                >
                    <a class="page-link" href="#">
                        {element}
                        </a></li>
            );
        })
    }
    <li class="page-item"
    onClick={() => {
        let currPage = this.state.currPage;
        currPage++;
        if(currPage > noofpages) currPage = noofpages;
        this.setState({currPage: currPage});
    }}>
        <a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

            </div>
            
            
        );
    }
}
export default Table;