import NewBudget from "./NewBudget"
import BudgetControl from "./BudgetControl"
const Header = ({budget, setBudget, validBudget, setValidBudget, spendings, setSpendings}) => {
  return (
    <header>
        <h1>Planificador de Gatos</h1>

        {validBudget ? (
            <BudgetControl 
            spendings = {spendings}
            setSpendings = {setSpendings}
            budget = {budget}
            setBudget = {setBudget}
            setValidBudget = {setValidBudget}
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