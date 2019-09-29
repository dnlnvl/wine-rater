import React, { Component } from "react";
import "./add-wine.scss";
import store from "../../store";
import { withFirebase } from "../../firebase";
import { setWines, clearWines } from "../../actions/action";
import chicken from "../../images/chicken.png";
import crab from "../../images/crab.png";
import pizza from "../../images/pizza.png";
import pasta from "../../images/pasta.png";
import deer from "../../images/deer.svg";
import apetirif from "../../images/apetirif.png";
import pig from "../../images/pig.png";
import bull from "../../images/bull.png";
import cheese from "../../images/cheese.png";
// TODO: VALIDATOR

const INITIAL_STATE = {
  wineName: "",
  wineType: "RED",
  wineYear: "2002",
  sanderRating: 6.0,
  ineRating: 5.0,
  error: null,
};

class AddWineForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const {
      wineName,
      wineType,
      wineYear,
      ineRating,
      sanderRating,
    } = this.state;
    // TODO: HOOK UP WITH DISPATCH AND ACTION.
    this.props.firebase.storeWineToFirebase(
      wineName,
      wineType,
      wineYear,
      sanderRating,
      ineRating
    );
  }
  // TODO: ADD BOOTSTRAP-COLS.
  render() {
    const {
      wineName,
      wineType,
      wineYear,
      sanderRating,
      ineRating,
      error,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="add-wine-form">
          <div className="row">
            <div className="form-group col-sm-10 col-md-8">
              <label htmlFor="wineName">Navn</label>
              <input
                type="text"
                name="wineName"
                className="form-control"
                value={wineName}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group col-sm-10 col-md-4">
              <label htmlFor="wineType">Type</label>
              <select
                className="custom-select"
                name="wineType"
                onChange={this.onChange}
              >
                <option value="RED">Rød</option>
                <option value="WHITE">Hvit</option>
                <option value="ROSÉ">Rosé</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-10 col-md-6">
              <label htmlFor="wineYear">År</label>
              <input
                pattern="[0-9]{4}"
                title="Year"
                className="form-control"
                name="wineYear"
                value={wineYear}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group col-sm-10 col-md-6">
              <label htmlFor="wineYear">Region/Drue</label>
              <input
                pattern="[0-9]{4}"
                title="Year"
                className="form-control"
                name="wineYear"
                value={wineYear}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-10 col-md-6">
              <label htmlFor="sanderRating">Rating Sander</label>
              <input
                pattern="[0-9]"
                title="Rating"
                className="form-control"
                name="sanderRating"
                value={sanderRating}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group col-sm-10 col-md-6">
              <label htmlFor="ineRating">Rating Ine</label>
              <input
                pattern="[0-9]"
                title="Rating"
                className="form-control"
                name="ineRating"
                value={ineRating}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Passer til</label>
            <div className="row">
              <div className="col-sm-4">
                <label htmlFor="chicken">
                  <img src={chicken} className="image" />
                </label>
                <input
                  type="checkbox"
                  id="chicken"
                  className="form-control"
                  value="chicken"
                  onChange={this.onChange}
                />
              </div>
              <div className="col-sm-4">
                <label htmlFor="seafood">
                  <img src={crab} className="image" />
                </label>
                <input
                  type="checkbox"
                  id="seafood"
                  className="form-control"
                  value="seafood"
                  onChange={this.onChange}
                />
              </div>
              <div className="col-sm-4">
                <label htmlFor="pasta">
                  <img src={pasta} className="image" />
                </label>
                <input
                  type="checkbox"
                  id="pasta"
                  className="form-control"
                  value="pasta"
                  onChange={this.onChange}
                />
              </div>
              <div className="col-sm-4">
                <label htmlFor="pizza">
                  <img src={pizza} className="image" />
                </label>
                <input
                  type="checkbox"
                  id="pizza"
                  className="form-control"
                  value="pizza"
                  onChange={this.onChange}
                />
              </div>
              <div className="col-sm-4">
                <label htmlFor="apetirif">
                  <img src={apetirif} className="image" />
                </label>
                <input
                  type="checkbox"
                  id="apetirif"
                  className="form-control"
                  value="apetirif"
                  onChange={this.onChange}
                />
              </div>
              <div className="col-sm-4">
                <label htmlFor="deer">
                  <img src={deer} className="image" />
                </label>
                <input
                  type="checkbox"
                  id="deer"
                  className="form-control"
                  value="deer"
                  onChange={this.onChange}
                />
              </div>
              <div className="col-sm-4">
                <label htmlFor="bull">
                  <img src={bull} className="image" />
                </label>
                <input
                  type="checkbox"
                  id="bull"
                  className="form-control"
                  value="bull"
                  onChange={this.onChange}
                />
              </div>
              <div className="col-sm-4">
                <label htmlFor="pig">
                  <img src={pig} className="image" />
                </label>
                <input
                  type="checkbox"
                  id="pig"
                  className="form-control"
                  value="pig"
                  onChange={this.onChange}
                />
              </div>
              <div className="col-sm-4">
                <label htmlFor="cheese">
                  <img src={cheese} className="image" />
                </label>
                <input
                  type="checkbox"
                  id="cheese"
                  className="form-control"
                  value="cheese"
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="add-wine-button btn btn-primary">
            Registrer vin
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default withFirebase(AddWineForm);

// TODO: ADD VALIDATION FOR NUMBERS ETC.
// TODO: UPDATE WINEITEM-DATA IN PARENT
// TODO: SEPARATE OUT IMAGE-CHECKBOXES INTO COMPONENT.
