import { useState } from 'react'
import Header from './components/Header'
import NewSpendingIcon from './img/nuevo-gasto.svg'
import Modal from './components/Modal';

function App() {
  
  const [budget, setBudget] = useState(0);
  const [validBudget, setValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const handleNewSpending = () => {
    setModal(true)

    setTimeout(() => {
      setAnimateModal(true)
    }, 500);

  }

  

  return (
    <div>
      <Header 
      budget = {budget}
      setBudget = {setBudget}
      validBudget = {validBudget}
      setValidBudget = {setValidBudget}
      />

      {validBudget && (
        <div className='nuevo-gasto'>
        <img 
        src = {NewSpendingIcon}
        alt = 'Icono nuevo gasto'
        onClick={handleNewSpending}
        />
      </div>
      )}

        { modal && <Modal 
                    setModal = {setModal}
                    animateModal = {animateModal}
                    setAnimateModal = {setAnimateModal}
                    />}
      
    </div>
  )
}

export default App
