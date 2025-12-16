import styled from 'styled-components'
import { colors, TextDescription, Title } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.div`
  padding: 80px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.pretoOpaco};
  }
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  background-color: ${colors.laranja};
  color: ${colors.branca};
  padding: 32px;

  div {
    margin-left: 24px;
  }
`

export const Close = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const Name = styled(Title)`
  font-size: 18px;
  margin-top: 0;
`

export const Text = styled(TextDescription)`
  padding: 16px 0;

  span {
    padding-top: 24px;
    display: block;
  }
`

export const Button = styled(ButtonContainer)`
  background-color: ${colors.bege};
  color: ${colors.laranja};
  padding: 4px auto;
`
