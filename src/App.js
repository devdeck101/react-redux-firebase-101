import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addPerson } from './actions/peopleActions';

class App extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);//bind the right this to the function
    this.handleDelete = this.handleDelete.bind(this);//bind the right this to the function
    this.handleEdit = this.handleEdit.bind(this);//bind the right this to the function
  }


  /**
   * This method return the list view of the page
   * from the array of the props passed to <app people={initialState.people} />
   */
  listPeople() {
    return (
      //map function iterates for each item in the list
      this.props.people.map(person => {
        return (
          <tr key={person.id}>
            <th scope="row">{person.id}</th>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.bio}</td>
            <td><button type="button" className="btn btn-info btn-sm" onClick={() => this.handleEdit(person.id)}>Edit</button></td>
            <td><button type="button" className="btn btn-danger btn-sm" onClick={() => this.handleDelete(person.id)}>Delete</button></td>
          </tr>
        )
      })
    )
  }

  /**
   * This method handles the save button
   * ADD_PERSON
   * @param {Form event} e 
   */
  handleSubmit(e){
    e.preventDefault();
    let person = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      bio: this.refs.bio.value
    }
    console.log(person);
    this.props.addPerson(person);
    e.target.reset();
    console.log('Submit event captured.')
  }

  /**
   * This method handles the delete button
   * REMOVE_PERSON
   * @param {Person.id} id 
   */
  handleDelete(id) {
    console.log(id)
    console.log('Delete captured ', id);
  }

  /**
   * This method handles the edit button
   * EDIT_PERSON
   * SELECT_PERSON
   * @param {Person.id} id 
   */
  handleEdit(id) {
    console.log('Edit captured ', id);
  }



  render() {
    return (
      <div className="container" style={{ backgroundColor: '#381254', color: '#fff', paddingTop: '20px', margin: '20px auto' }}>

        <div className="row">
          <div className="col-3 text-center">
            <figure className="figure">
              <img src={require('./redux.png')} style={{ width: '100px' }} className="figure-img" alt="Redux." />
            </figure>
          </div>
          <div className="col-6 text-center">
            <h2 style={{ float: 'center', paddingTop: '5px' }}>Developer Deck 101</h2>
            <h2>React | Redux | Firebase</h2>
          </div>
          <div className="col-3 text-center">
            <figure className="figure">
              <img src={require('./firebase.png')} style={{ width: '100px' }} className="figure-img" alt="Firebase." />
            </figure>
          </div>
        </div>
        <div className="row" style={{ padding: '40px', backgroundColor: '#9373AA' }}>
          <div className="container col-md-12">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationDefault01">First name</label>
                  <input type="text" ref="firstName" className="form-control" id="validationDefault01" placeholder="First name"  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationDefault02">Last name</label>
                  <input type="text" ref="lastName" className="form-control" id="validationDefault02" placeholder="Last name"  />
                </div>
              </div>
              <div className="row">

                <div className="col-md-12 mb-3">
                  <label htmlFor="validationDefault04">Bio</label>
                  <textarea ref="bio" className="form-control" rows="2" id="validationDefault04" placeholder="Bio"  />
                  <div className="invalid-feedback">
                    Please provide a bio.
                  </div>
                </div>

              </div>
              <button className="btn btn-primary btn-save" style={{ float: 'right' }} type="submit">Save</button>
            </form>
          </div>
        </div>
        <div className="row" style={{ padding: '40px', backgroundColor: '#714a8d' }}>
          <div className="container col-md-12">

            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Bio</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* This call generate the table lines for all People */}
                {
                  this.listPeople()
                }
              </tbody>
            </table>


          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, pwnProps) => {
  return {
    people: state.people
    //array of people will be available as props (this.props.people)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPerson: person => dispatch(addPerson(person))
    //addPerson will be available as props (this.props.addPerson)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
