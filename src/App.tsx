
import PriceList, {PriceItem }from './components/PriceList'
import ViewTab,{AaticeTab} from './components/ViewTab'
const item:PriceItem[] = [
  {
    id: 1,
    title: "test",
    price: 200,
    date: "2023-04-01",
    category: {
      id: 1,
      name: "test",
      type: "out",
      iconName: "bi-airplane-engines-fill"
    }
  },
  {
    id: 2   ,
    title: "test",
    price: 200,
    date: "2023-04-01",
    category: {
      id: 1,
      name: "test",
      type: "out",
      iconName: "bi-airplane-engines-fill"
    }
  }
]





function App() {

  const onDeleteItem = (item:PriceItem) => {
      console.log(item)
  }

  const onModifyItem = (item:PriceItem) => {
    console.log(item)
  }



  return (
    <>
      <PriceList items={item} onDeleteItem={onDeleteItem} onModifyItem={onModifyItem}></PriceList>
      <ViewTab onTabChange={(view : AaticeTab) => {console.log(view)}}></ViewTab>
    </>
  )
}

export default App
