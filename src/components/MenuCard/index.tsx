import { Button, Card, Description, Name, Picture } from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
}

const MenuCard = ({ foto, nome, descricao }: Props) => {
  return (
    <Card>
      <Picture src={foto} alt={nome} />
      <Name>{nome}</Name>
      <Description>{descricao}</Description>
      <Button>Adicionar ao carrinho</Button>
    </Card>
  )
}

export default MenuCard
