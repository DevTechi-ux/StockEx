import ActiveTradeList from '../../components/Admin/Trade/ActiveTradeListCards.tsx'
import AddScript from '../../components/Admin/Trade/AddScript.tsx'
import ActiveTrades from '../../components/Admin/Trade/ActiveTrades.tsx'
const Trade = () => {
  return (
    <div>
      <ActiveTradeList />
      <AddScript />
      <ActiveTrades />    
    </div>
  )
}

export default Trade
