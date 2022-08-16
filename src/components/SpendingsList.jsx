import Spending from "./Spending"

const SpendingsList = ({
  spendings, 
  setEditSpending, 
  deletingSpending, 
  filter, 
  filteredSpendings}) => {
  return (
    <div className='listado-gastos contenedor'>
        

        {
          filter ? (
            <>
              <h2>{filteredSpendings.length ? 'Gastos' : 'No hay gastos en esta categoría'}</h2>
                {filteredSpendings.map( spending => (
                <Spending 
                    key = {spending.id}
                    spending = {spending}
                    setEditSpending = {setEditSpending}
                    deletingSpending = {deletingSpending}
                />
              
            ))}
        </>

          ) : (
            <>
                <h2>{spendings.length ? 'Gastos' : 'No hay gastos aún'}</h2>
                {spendings.map( spending => (
                  <Spending 
                      key = {spending.id}
                      spending = {spending}
                      setEditSpending = {setEditSpending}
                      deletingSpending = {deletingSpending}
                  />
              ))}
          </>
          )
        }
    </div>
  )
}

export default SpendingsList