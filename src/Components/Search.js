import React, { Component } from "react";
import Table from "./Table";
import API from "../util/API2";

class Search extends Component {

    state = {
        resArray: [],
        searchTerm: "",
        filteredArray: []
    }

    getUsers = () => {
        // let resultArrayVar = API()
        // console.log(resultArrayVar)



        API.get100Users().then(res => {
            // console.log(res)
            this.setState({ resArray: res.data.results })
        })
            .catch(err => console.log(err))
    };

    componentDidMount() {
        this.getUsers()

    }

    onChange = SyntheticBaseEvent => {
        let searchTerm = SyntheticBaseEvent.target.value.toLowerCase()
        console.log("this is the state " + this.state.searchTerm)
        this.setState({ searchTerm: searchTerm })


        // if (searchTerm !== "") {
        let employees = this.state.resArray.filter(user => (

            user.name.first.toLowerCase().includes(searchTerm) ||
            user.name.last.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.phone.toLowerCase().includes(searchTerm) ||
            new Date(user.dob.date).toLocaleDateString().includes(searchTerm)


        ))

        this.setState({ filteredArray: employees })


    }



    /* <button onClick={this.onSubmit} type="button" class="btn btn-info"></button>, */



    render() {
        return ([
            <input onChange={this.onChange} className="ml-md-3" type="text" id="myInput" placeholder="Search for names.."></input>, <hr />, <Table{...this.state} />]
        )
    }
}

export default Search;
