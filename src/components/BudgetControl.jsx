import {useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({budget, spendings, setBudget, setSpendings, setValidBudget}) => {

    const [percentage, setPercentage] = useState(0)
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
        const totalSpent = spendings.reduce((total, spending) => spending.amount + total, 0)
        const totalAvailable = budget - totalSpent

         // Calculating used percentage

        const newPercentage = ((( budget - totalAvailable) / budget) * 100).toFixed(2);
        
        setAvailable(totalAvailable)
        setSpent(totalSpent)
        
        setTimeout(() => {
            setPercentage(newPercentage)
        }, 1000);
    }, [spendings])

   

    const formattingAmount = (amount) => {
         return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        const confirmation = confirm('¿Deseas reiniciar la app?')

        if(confirmation){
            setSpendings([])
            setBudget(0)
            setValidBudget(false)
        } 
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar 
                styles = {buildStyles({
                    pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
                })}
                value = {percentage}
                text = {`${percentage}% Gastado`}
            />
        </div>

        <div className='contenido-presupuesto'>
            <button
            className='reset-app'
            type='button'
            onClick={handleResetApp}
            >
                Resetear App
            </button>
            <p>
                <span>Presupuesto: </span> { formattingAmount(budget) }
            </p>

            <p className={`${available < 0 ? 'negativo' : ''}`}>
                <span>Disponible: </span> { formattingAmount(available) }
            </p>

            <p>
                <span>Gastado: </span> { formattingAmount(spent) }
            </p>
        </div>
    </div>
  )
}

export default BudgetControl