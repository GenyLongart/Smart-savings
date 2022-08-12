import { useState } from 'react'
import CloseBtn from '../img/cerrar.svg'
import Message from './Message'

const Modal = ({setModal, animateModal, setAnimateModal, registerSpending}) => {
    const [message, setMessage] = useState('')

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')


    const hideModal = () => {
       
        setAnimateModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault()

        if([name, amount, category].includes('')){
            setMessage('Todos los campos son obligatorios')

            setTimeout(() => {
                setMessage('')
            }, 2000);
            return
        }

        registerSpending({name, amount, category})
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

        <form 
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}
        >
            <legend>Nuevo Gasto</legend>

            {message && <Message tipo= 'error'>{message}</Message>}

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
                value = {amount}
                onChange = { e => setAmount(Number(e.target.value))}
                />
            </div>

            <div className='campo'>
                <label htmlFor='categoria'>Categoría</label>

                <select
                id = 'categoria'
                value = {category}
                onChange = { e => setCategory(e.target.value)}
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