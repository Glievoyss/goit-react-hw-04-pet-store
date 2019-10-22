/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import pets from '../../../pets.json';
import styles from './styles.module.css';

export default class PetPage extends Component {
  state = {
    petInfo: {},
  };

  componentDidMount() {
    const { match } = this.props;
    const selectId = match.params.idPet;
    const petInfo = pets.find(pet => pet.id === selectId);
    if (petInfo != null) {
      this.setState({ petInfo });
    }
  }

  buttonReturn = () => {
    this.props.history.push('/pets');
  };

  render() {
    const { petInfo } = this.state;
    const { name, age, gender, color, breed, description, image } = petInfo;
    return (
      <>
        <div className={styles.wraper}>
          <button
            className={styles.buttReturn}
            type="button"
            onClick={() => this.buttonReturn()}
          >
            RETURN
          </button>

          <h2> All about {name} </h2>
          <div className={styles.photoInfo}>
            <img className={styles.imgPet} src={image} alt={image} />
            <div className={styles.pettext}>
              <p>Age: {age} </p>
              <p>Gender: {gender} </p>
              <p>Color: {color} </p>
              <p>Breed: {breed} </p>
            </div>
          </div>
          <p>Description: {description} </p>
        </div>
      </>
    );
  }
}
