import React,{Component} from 'react';
import Search from './components/Search';
import List from './components/List';
// import axios from 'axios'

export default class App extends Component{

    render(){
        
        return(
            <div className="container">
                <Search/>
                <List/>
            </div>
        )
    }
}


