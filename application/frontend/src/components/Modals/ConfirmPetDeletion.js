import React from 'react'

import styles from './ConfirmPetDeletion.module.css'

import Modal from './Modal'

function ConfirmPetDeletion({display,onClose,selectedPet}) {

    return (
        <Modal display={display} onClose={onClose}>
            <div className={styles['delete-pet-container']}>
                <div className={styles['delete-pet-header']}>Are you Sure?</div>
                <div className={styles['delete-pet-body']}>Delete {selectedPet.pet_name} from your account?</div>
                {/* <button className={styles['delete-pet-cancel-button']}>Cancel</button> */}
                <button className={styles['delete-pet-confirm-button']}>Delete</button>
            </div>
        </Modal>
    )
}

export default ConfirmPetDeletion