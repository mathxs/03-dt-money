import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from '../../assets/logo-ignite.svg';

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logo} alt="" />
          
          <NewTransactionButton>
            Nova transação
          </NewTransactionButton>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}