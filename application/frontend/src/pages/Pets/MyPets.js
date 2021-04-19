import {useState} from 'react'

import styles from './MyPets.module.css'

import AddIcon from '../../images/Created Icons/Add.svg'
function MyPets() {

    const [myPets,setMyPets] = useState([
    {
        pet_id: 1,
        pet_name: 'Max',
        pet_prof_pic: 'https://csc648groupproject.s3-us-west-2.amazonaws.com/MaxPic.jpg'
    },
    {
        pet_id: 2,
        pet_name: 'Juju',
        pet_prof_pic: 'https://csc648groupproject.s3-us-west-2.amazonaws.com/JujuPic.jpg'
    },
    {
        pet_id: 3,
        pet_name: 'Mimi',
        pet_prof_pic: 'https://csc648groupproject.s3-us-west-2.amazonaws.com/MimiPic.jpg'
    },
    {
        pet_id: 4,
        pet_name: 'Max',
        pet_prof_pic: 'https://csc648groupproject.s3-us-west-2.amazonaws.com/MaxPic.jpg'
    },
    {
        pet_id: 5,
        pet_name: 'Juju',
        pet_prof_pic: 'https://csc648groupproject.s3-us-west-2.amazonaws.com/JujuPic.jpg'
    },
    {
        pet_id: 6,
        pet_name: 'Mimi',
        pet_prof_pic: 'https://csc648groupproject.s3-us-west-2.amazonaws.com/MimiPic.jpg'
    },
    {
        pet_id: 7,
        pet_name: 'Max',
        pet_prof_pic: 'https://csc648groupproject.s3-us-west-2.amazonaws.com/MaxPic.jpg'
    },
    {
        pet_id: 8,
        pet_name: 'Juju',
        pet_prof_pic: 'https://csc648groupproject.s3-us-west-2.amazonaws.com/JujuPic.jpg'
    },
    {
        pet_id: 9,
        pet_name: 'Mimi',
        pet_prof_pic: 'https://csc648groupproject.s3-us-west-2.amazonaws.com/MimiPic.jpg'
    },
    ])

    return (
        <>
        <div className={styles['my-pets-header']}>
            My Pets
        </div>
        <div className={styles['my-pets-container']}>
            <div className={styles['my-pets-container-add-pet']}>
                <img className={styles['my-pets-container-add-pet-icon']} src={AddIcon}/>
                <div className={styles['my-pets-container-add-pet-text']}>Add a Pet</div>
            </div>
            {myPets && myPets.map((pet) =>(
                <div className={styles['my-pets-container-pet']}>
                    <img className={styles['my-pets-container-pet-pic']} src={pet.pet_prof_pic}/>
                    <div className={styles['my-pets-container-pet-name']}>{pet.pet_name}</div>
                </div>
            ))}
        </div>
        </>
    )
}

export default MyPets