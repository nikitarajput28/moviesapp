// why we use here class component => bcoz in future genre either increase or decrease hote hai toh class component dynamically adjust krr degga.
import React from "react"; 

class Category extends React.Component{
    state={
        allGenre: ["Action", "Comedy", "Romance","Thriller", "Horror"],
    }; 

    // componentDidMount => means render function call hote hi UI visible hoga aur automatically this function called and 
    // this method is one time data format method(means in complete lifetime ek hi baar call hota whether state change or not)
    componentDidMount(){
        // API call(msg send =>get)
        fetch("/genre").then(function(res){
            return res.json()
        }).then((json)=>{
            this.setState({allGenre:json})
        })
    }

    render(){
        return(
            <ul class="list-group">
                <li class="list-group-item" key="allgenre" onClick={()=>{
                    this.props.receiveCurrGenre("All Genre");
                }}>
                            All Genres</li>

                {this.state.allGenre.map((element) => {
                    return (
                        <li class="list-group-item" key={element._id}
                        onClick={()=>{
                            this.props.receiveCurrGenre(element.name);
                        }}
                        >
                            {element.name}</li>
                    );
                })}
            </ul>
        );
    }
}
export default Category;