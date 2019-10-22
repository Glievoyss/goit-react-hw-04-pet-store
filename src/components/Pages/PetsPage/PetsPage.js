import React from 'react';
import { Link } from 'react-router-dom';
import pets from '../../../pets.json';
import styles from './styles.module.css';

const PetsPage = () => (
  <>
    <div className={styles.wrap}>
      <h2>Available pets</h2>

      <ul className={styles.listPets}>
        {pets.map(pet => (
          <li className={styles.petCard} key={pet.id}>
            <Link
              to={{
                pathname: `pets/${pet.id}`,
                state: { from: 'pets' },
              }}
            >
              <img
                className={styles.photoPet}
                src={pet.image}
                alt={pet.description}
              />
              <h3 className={styles.title}>{pet.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default PetsPage;
