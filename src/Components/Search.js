import React, { Component } from "react";
import Table from "./Table";
import API from "../util/API2";

class Search extends Component {

    state = {
        resArray: [],
        searchTerm: "",
        filteredArray: [],
        sortFlag: false
    }

    getUsers = () => {
        // let resultArrayVar = API()
        // console.log(resultArrayVar)



        API.get100Users().then(res => {

            this.setState({ resArray: res.data.results })
        })
            .catch(err => console.log(err))
    };

    componentDidMount() {
        this.getUsers()

    }

    sortUsers = (arr, sortFlag) => {

        if (sortFlag) {
            this.setState({ sortFlag: !sortFlag })
            return arr.sort((a, b) => (a.name.first > b.name.first ? 1 : -1))
        } else {
            this.setState({ sortFlag: !sortFlag })
            return arr.sort((a, b) => (a.name.first < b.name.first ? 1 : -1))
        }

    }



    onChange = SyntheticBaseEvent => {
        let searchTerm = SyntheticBaseEvent.target.value.toLowerCase()
        console.log("this is the state " + this.state.searchTerm)
        this.setState({ searchTerm: searchTerm })


        let employees = this.state.resArray.filter(user => (

            user.name.first.toLowerCase().includes(searchTerm) ||
            user.name.last.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.phone.toLowerCase().includes(searchTerm) ||
            new Date(user.dob.date).toLocaleDateString().includes(searchTerm)


        ))

        this.setState({ filteredArray: employees })


    }







    render() {
        return (

            <div className="container-fluid">
                <div class="d-flex flex-row justify-content-center ">
                    <input onChange={this.onChange} className="col-sm-10 ml-md-3" type="text" id="filterSearch" placeholder="Search for names.."></input>
                </div>
                <hr />
                <Table{...this.state} sortUsers={this.sortUsers} />
            </div>


        )
    }
}

export default Search;
