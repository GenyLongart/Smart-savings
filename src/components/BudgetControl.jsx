import {useState, useEffect} from 'react'

const BudgetControl = ({budget, spendings}) => {

    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
        const totalSpent = spendings.reduce((total, spending) => spending.amount + total, 0)
        const totalAvailable = budget - totalSpent
        setAvailable(totalAvailable)
        setSpent(totalSpent)
    }, [spendings])

    const formattingAmount = (amount) => {
         return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Gráfica aquí</p>
        </div>

        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span> { formattingAmount(budget) }
            </p>

            <p>
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