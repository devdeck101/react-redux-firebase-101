import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container" style={{ backgroundColor: '#381254', color: '#fff', paddingTop: '20px', margin: '20px auto' }}>

        <div className="row">
          <div className="col-3 text-center">
            <figure class="figure">
              <img src={require('./redux.png')} style={{ width: '100px' }} class="figure-img" alt="Redux." />
            </figure>
          </div>
          <div className="col-6 text-center">
            <h2 style={{ float: 'center', paddingTop: '5px' }}>Developer Deck 101</h2>
            <h2>React | Redux | Firebase</h2>
          </div>
          <div className="col-3 text-center">
            <figure class="figure">
              <img src={require('./firebase.png')} style={{ width: '100px' }} class="figure-img" alt="Firebase." />
            </figure>
          </div>
        </div>
        <div className="row" style={{ padding: '40px', backgroundColor: '#9373AA' }}>
          <div className="container col-md-12">
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="validationDefault01">First name</label>
                  <input type="text" className="form-control" id="validationDefault01" placeholder="First name" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="validationDefault02">Last name</label>
                  <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" required />
                </div>
              </div>
              <div className="row">

                <div className="col-md-12 mb-3">
                  <label for="validationDefault04">Bio</label>
                  <textarea className="form-control" rows="2" id="validationDefault04" placeholder="Bio" required />
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
                <tr>
                  <th scope="row">1</th>
                  <td>Louis</td>
                  <td>Vuitton</td>
                  <td>A French fashion designer and businessman.</td>
                  <td><button type="button" className="btn btn-info btn-sm">Edit</button></td>
                  <td><button type="button" className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Neymar</td>
                  <td>Júnior</td>
                  <td>A football player.</td>
                  <td><button type="button" className="btn btn-info btn-sm">Edit</button></td>
                  <td><button type="button" className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Félix</td>
                  <td>Khoury</td>
                  <td>Funny character: Famous phrase: "Eu não tenho vocação para a pobreza”</td>
                  <td><button type="button" className="btn btn-info btn-sm">Edit  </button></td>
                  <td><button type="button" className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
              </tbody>
            </table>


          </div>
        </div>
      </div>
    );
  }
}

export default App;
