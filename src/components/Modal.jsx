import { useState } from 'react'
import CloseBtn from '../img/cerrar.svg'
const Modal = ({setModal, animateModal, setAnimateModal}) => {

    const [name, setName] = useState('')

    const hideModal = () => {
       
        setAnimateModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }
  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img 
            src = {CloseBtn}
            alt = 'Cerrar modal'
            onClick={hideModal}
            />
        </div>

        <form className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>

            <div className='campo'>
                <label htmlFor='name'>Nombre Gasto</label>
                <input 
                id = 'name'
                type= 'text'
                placeholder = 'Añade el nombre de tu gasto'
                value = {name}
                onChange = { e => setName(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor='amount'>Monto</label>
                <input 
                id = 'amount'
                type= 'number'
                placeholder = 'Añade el monto de tu gasto'
                />
            </div>

            <div className='campo'>
                <label htmlFor='categoria'>Categoría</label>

                <select
                id = 'categoria'
                >
                    <option value = ''>--Seleccione--</option>
                    <option value = 'savings'>Ahorro</option>
                    <option value = 'food'>Comida</option>
                    <option value = 'house'>Casa</option>
                    <option value = 'several'>Varios</option>
                    <option value = 'leisure'>Ocio</option>
                    <option value = 'health'>Salud</option>
                    <option value = 'suscriptions'>Suscripciones</option>

                </select>  
            </div>

            <input 
                type = 'submit'
                value = 'Añadir Gasto'
            />
        </form>
    </div>
  )
}

export default Modal