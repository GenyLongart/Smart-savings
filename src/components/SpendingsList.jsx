import Spending from "./Spending"

const SpendingsList = ({spendings, setEditSpending}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{spendings.length ? 'Gastos' : 'No hay gastos aún'}</h2>

        {spendings.map( spending => (
            <Spending 
                key = {spending.id}
                spending = {spending}
                setEditSpending = {setEditSpending}
            />
        ))}
    </div>
  )
}

export default SpendingsList