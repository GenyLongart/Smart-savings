import NewBudget from "./NewBudget"
import BudgetControl from "./BudgetControl"
const Header = ({budget, setBudget, validBudget, setValidBudget}) => {
  return (
    <header>
        <h1>Planificador de Gatos</h1>

        {validBudget ? (
            <BudgetControl 
            budget = {budget}
            />
        ) : (
        <NewBudget 
            budget = {budget}
            setBudget = {setBudget}
            setValidBudget = {setValidBudget}
            />
        )}
        
        </header>
  )
}

export default Header