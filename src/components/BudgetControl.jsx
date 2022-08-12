import React from 'react'

const BudgetControl = ({budget}) => {

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
                <span>Disponible: </span> { formattingAmount(0) }
            </p>

            <p>
                <span>Gastado: </span> { formattingAmount(0) }
            </p>
        </div>
    </div>
  )
}

export default BudgetControl