import { useInput } from '../hooks/useInput'
import axios from 'axios'
export default function Home() {
  const CardNumber = useInput('')
  const Amount = useInput('')
  const ExpirationDate = useInput('')
  const CW = useInput('')

  async function send() {
    console.log(CardNumber.value)
    console.log(Amount.value)
    console.log(ExpirationDate.value)
    console.log(CW.value)

    axios
      .post('http://localhost:5000/create', {
        CardNumber: CardNumber.value,
        Amount: Amount.value,
        ExpirationDate: ExpirationDate.value,
        CW: CW.value,
      })
      .then((response) =>
        alert(
          `{Amount:${response.data.Amount};RequestId:${response.data.RequestId}}`
        )
      )
      .catch((e) => alert('Something wrong!'))
  }

  return (
    <div>
      <input maxLength={16} {...CardNumber} placeholder="CardNumber" />
      <input maxLength={40} {...Amount} placeholder="Amount" />
      <input maxLength={3} {...CW} placeholder="CW" />
      <input
        maxLength={3}
        {...ExpirationDate}
        placeholder="ExpirationDate"
        type="date"
        min="2018-01-01"
        max="2025-12-31"
      />
      <button type="button" onClick={send}>
        send
      </button>
    </div>
  )
}
