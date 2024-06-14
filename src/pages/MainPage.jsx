
import { useDispatch, useSelector } from 'react-redux'

function MainPage() {

  const date = useSelector((state ) => state.card.product)
  
  const dispatch = useDispatch()
  console.log(date)
  const buyClick = (e) => {
  dispatch({
    type: "INCREASE" ,
    paylaod:e
  })
  }


  return (
    <div>
      {date.map((e, index) => <div key={index}><div>{e.name}</div><button onClick={() =>buyClick(e)}>buy</button></div>)}
    </div>
  )
}

export default MainPage