import styled from 'styled-components'

export type PropsStyle = {
  $variant: 'restaurantList' | 'menuList'
}

export const Container = styled.div`
  padding: 80px 0;
`

export const List = styled.ul<PropsStyle>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$variant === 'restaurantList' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: ${(props) =>
    props.$variant === 'restaurantList' ? '80px' : '32px'};
  row-gap: ${(props) =>
    props.$variant === 'restaurantList' ? '48px' : '32px'};
`
