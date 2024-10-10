import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000</PriceHighlight>
              </td>
              <td> Venda </td>
              <td>15/03/2021</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td>
                <PriceHighlight variant="outcome">-R$ 12.000</PriceHighlight>
              </td>
              <td> Venda </td>
              <td>15/03/2021</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000</PriceHighlight>
              </td>
              <td> Venda </td>
              <td>15/03/2021</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td>
                <PriceHighlight variant="outcome">-R$ 12.000</PriceHighlight>
              </td>
              <td> Venda </td>
              <td>15/03/2021</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
