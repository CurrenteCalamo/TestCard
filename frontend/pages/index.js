import { useInput } from '../hooks/useInput'
import axios from 'axios'
export default function Home() {
  const CardNumber = useInput('')
  const Amount = useInput('')
  const ExpirationDate = useInput('')
  const CVV = useInput('')

  async function send() {
    console.log(CardNumber.value)
    console.log(Amount.value)
    console.log(ExpirationDate.value)

    if (CVV.value && CardNumber.value && Amount.value && ExpirationDate) {
      axios
        .post('http://localhost:5000/create', {
          CardNumber: CardNumber.value,
          Amount: Amount.value,
          ExpirationDate: ExpirationDate.value,
          CVV: CVV.value,
        })
        .then((response) =>
          alert(
            `{Amount:${response.data.Amount};RequestId:${response.data.RequestId}}`
          )
        )
        .catch((e) => alert('Something wrong!'))
    } else {
      alert('something wrong')
    }
  }

  return (
    <div>
      <input maxLength={16} {...CardNumber} placeholder="CardNumber" />
      <input maxLength={10} {...Amount} placeholder="Amount" />
      <input maxLength={3} {...CVV} placeholder="CVV" />
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
