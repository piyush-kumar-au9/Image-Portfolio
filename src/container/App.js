import React, {Component} from 'react';
import CardList from '../components/CardList/CardList';
import Search from '../components/Search/Search';
import Scroll from  '../components/Scroll';
import './App.css';

import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: "d8j45jNJlSUqCUidHqleAOl_QqHTNi7lCNH8WhElrfw",
  secretKey :"dmj-RNvq4JLySRNqGTAyXf_er7Fw9vrCzA2s7DrZf3w"
});

const initialState = {
  searchField: "",
  imageData : []
}

class App extends Component{
  constructor(){
    super()
    this.state = initialState
  }
	onInputChange = (event) => {
		this.setState({ searchField : event.target.value });
	}
  onSearchSubmit = (event) => {
    api.search
      .getPhotos({ query: this.state.searchField , perPage:15})
      .then(response => {
        this.setState({ imageData : response.response.results })
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }
  render(){
    return (
      <div className="tc main">
        <h1 className="center">Image Portfolio</h1> 
        <Search 
        searchChange = {this.onInputChange}
        searchSubmit = {this.onSearchSubmit}  
        />
        <div className="pa4"></div>
        {
        this.state.imageData.length ? 
        <Scroll>
          <CardList imageData = {this.state.imageData} />
        </Scroll>

        :<h2>Search Image</h2>
        }

      </div>

    );
  }
}

export default App;
