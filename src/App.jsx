import { useState, useEffect } from 'react'
import Header from './components/Header'
import NewSpendingIcon from './img/nuevo-gasto.svg'
import Modal from './components/Modal';
import { generatingId } from './helpers';
import SpendingsList from './components/SpendingsList';
import Filters from './components/Filters';

function App() {
  
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [validBudget, setValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [spendings, setSpendings] = useState(
    localStorage.getItem('spendings') ? JSON.parse(localStorage.getItem('spendings')) : []
  )
  const [editSpending, setEditSpending] = useState({})
  const [filter, setFilter] = useState('')
  const [filteredSpendings, setFilteredSpendings] = useState([])

  useEffect(() => {
      if(Object.keys(editSpending).length > 0){
        setModal(true)
    
        setTimeout(() => {
          setAnimateModal(true)
        }, 500);
      }
  }, [editSpending])
    
  useEffect(() => {
      localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  useEffect(() => {
      localStorage.setItem('spendings', JSON.stringify(spendings) ?? [])
  }, [spendings])

  useEffect(() => {
      if(filter){
        const filteredSpendings = spendings.filter( spending => spending.category === filter)
        setFilteredSpendings(filteredSpendings)
      }
  }, [filter])

  useEffect(() => {
      const lsBudget = Number(localStorage.getItem('budget')) ?? 0;

      if(lsBudget > 0){
        setValidBudget(true)
      }
  }, [])

  const handleNewSpending = () => {
    setModal(true)
    setEditSpending({})

    setTimeout(() => {
      setAnimateModal(true)
    }, 500);

  }

  
  const registerSpending = (spending) => {
   
    if(spending.id){
      const actualizedSpendings = spendings.map( spendingState => spendingState.id === 
        spending.id ? spending : spendingState)
        setSpendings(actualizedSpendings)
      
    } else {
      spending.id = generatingId()
      spending.date = Date.now()
      setSpendings([...spendings, spending])
      setEditSpending({})
    }
        setAnimateModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
  }

  const deletingSpending = id => {
    const actualizedSpendings = spendings.filter( spending => spending.id !== id)
    setSpendings(actualizedSpendings)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
      spendings = {spendings}
      setSpendings = {setSpendings}
      budget = {budget}
      setBudget = {setBudget}
      validBudget = {validBudget}
      setValidBudget = {setValidBudget}
      />

      {validBudget && (
        <>
        <main>
          <Filters 
          filter = {filter}
          setFilter = {setFilter}
          />
          <SpendingsList 
            setEditSpending = {setEditSpending}
            spendings = {spendings}
            deletingSpending = {deletingSpending}
            filter = {filter}
            filteredSpendings = {filteredSpendings}
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
                    setEditSpending = {setEditSpending}
                    />}
      
    </div>
  )
}

export default App
