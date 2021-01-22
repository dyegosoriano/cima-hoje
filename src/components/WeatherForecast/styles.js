import styled from 'styled-components'
import { List } from '@material-ui/core'

export const Container = styled(List)`
  width: 100%;
  max-height: 350px;

  overflow: auto;

  img {
    width: 64px;
    height: 64px;
  }
`
