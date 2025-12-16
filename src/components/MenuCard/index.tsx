import { Button, Card, Description, Name, Picture } from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
  onClick: () => void
}

const MenuCard = ({ foto, nome, descricao, onClick }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 166) {
      return descricao.slice(0, 163) + '...'
    }
  }

  return (
    <Card>
      <Picture src={foto} alt={nome} />
      <Name>{nome}</Name>
      <Description>{getDescricao(descricao)}</Description>
      <Button onClick={onClick}>Mais detalhes</Button>
    </Card>
  )
}

export default MenuCard
