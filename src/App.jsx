import { useState, useEffect } from 'react'
import Header from './components/Header'
import NewSpendingIcon from './img/nuevo-gasto.svg'
import Modal from './components/Modal';
import { generatingId } from './helpers';
import SpendingsList from './components/SpendingsList';

function App() {
  
  const [budget, setBudget] = useState(0);
  const [validBudget, setValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [spendings, setSpendings] = useState([])

  const [editSpending, setEditSpending] = useState({})

  useEffect(() => {
      if(Object.keys(editSpending).length > 0){
        setModal(true)
    
        setTimeout(() => {
          setAnimateModal(true)
        }, 500);
      }
  }, [editSpending])

  const handleNewSpending = () => {
    setModal(true)
    setEditSpending({})

    setTimeout(() => {
      setAnimateModal(true)
    }, 500);

  }

  
  const registerSpending = (spending) => {
    console.log(spending)
    if(spending.id){
      const actualizedSpendings = spendings.map( spendingState => spendingState.id === 
        spending.id ? spending : spendingState)
        setSpendings(actualizedSpendings)
      //actualizar
    } else {
      spending.id = generatingId()
      spending.date = Date.now()
      setSpendings([...spendings, spending])
      //nuevo gasto
    }
        setAnimateModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
      spendings = {spendings}
      budget = {budget}
      setBudget = {setBudget}
      validBudget = {validBudget}
      setValidBudget = {setValidBudget}
      />

      {validBudget && (
        <>
        <main>
          <SpendingsList 
            setEditSpending = {setEditSpending}
            spendings = {spendings}
          />
        </main>
        <div className='nuevo-gasto'>
        <img 
        src = {NewSpendingIcon}
        alt = 'Icono nuevo gasto'
        onClick={handleNewSpending}
        />
      </div>
      </>
      )}

        { modal && <Modal 
                    setModal = {setModal}
                    animateModal = {animateModal}
                    setAnimateModal = {setAnimateModal}
                    registerSpending = {registerSpending}
                    editSpending = {editSpending}
                    />}
      
    </div>
  )
}

export default App
