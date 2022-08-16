import { formatDate } from "../helpers"
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import SavingsIcon from '../img/icono_ahorro.svg'
import FoodIcon from '../img/icono_comida.svg'
import SpendingsIcon from '../img/icono_gastos.svg'
import HouseIcon from '../img/icono_casa.svg'
import LeisureIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import SuscriptionsIcon from '../img/icono_suscripciones.svg'

const iconsDictionary = {
    Ahorro: SavingsIcon,
    Comida: FoodIcon,
    Ocio: LeisureIcon,
    Casa: HouseIcon,
    Varios: SpendingsIcon,
    Salud: HealthIcon,
    Suscripciones: SuscriptionsIcon
}

const Spending = ({spending, setEditSpending, deletingSpending}) => {

    const {category, name, amount, id, date} = spending

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setEditSpending(spending)}>
                Editar
            </SwipeAction>
        </LeadingActions>
        )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
            destructive = {true}
            onClick={() => deletingSpending(id)}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

  return (
    <SwipeableList>
        <SwipeableListItem
        leadingActions = {leadingActions()}
        trailingActions = {trailingActions()}
        >
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <img 
                src = {iconsDictionary[category]}
            />
            <div className='descripcion-gasto'>
                <p className='categoria'>{category}</p>
                <p className='nombre-gasto'>{name}</p>
                <p className="fecha-gasto">
                    Agregado el: {''}
                    <span>{formatDate(date)}</span>
                </p>
            </div>
        </div>
        <p className="cantidad-gasto">${amount}</p>
    </div>
    </SwipeableListItem>
    </SwipeableList>
  )
}

export default Spending