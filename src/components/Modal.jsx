import { useState, useEffect } from 'react'
import CloseBtn from '../img/cerrar.svg'
import Message from './Message'

const Modal = ({
    setModal, 
    animateModal, 
    setAnimateModal, 
    registerSpending, 
    editSpending,
setEditSpending}) => {

    const [message, setMessage] = useState('')

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [id, setId] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        if(Object.keys(editSpending).length > 0){
           setName(editSpending.name)
           setAmount(editSpending.amount)
           setCategory(editSpending.category)
           setId(editSpending.id)
           setDate(editSpending.date)
        }
    }, [])


    const hideModal = () => {
       
        setAnimateModal(false)
        setEditSpending({})
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

        registerSpending({name, amount, category, id, date})
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
            <legend>{editSpending.name ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

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
                <label htmlFor='category'>Categoría</label>

                <select
                id = 'category'
                value = {category}
                onChange = { e => setCategory(e.target.value)}
                >
                    <option value = ''>--Seleccione--</option>
                    <option value = 'Ahorro'>Ahorro</option>
                    <option value = 'Comida'>Comida</option>
                    <option value = 'Casa'>Casa</option>
                    <option value = 'Varios'>Varios</option>
                    <option value = 'Ocio'>Ocio</option>
                    <option value = 'Salud'>Salud</option>
                    <option value = 'Suscripciones'>Suscripciones</option>

                </select>  
            </div>

            <input 
                type = 'submit'
                value = {editSpending.name ? 'Guardar Cambios' : 'Añadir Gasto'}
            />
        </form>
    </div>
  )
}

export default Modal