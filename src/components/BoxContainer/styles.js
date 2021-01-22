import styled from 'styled-components'
import { Box } from '@material-ui/core'

export const Container = styled(Box)`
  width: 1000px;
  max-width: 100%;
  height: 600px;
  margin: 0 auto;

  background-color: #fff;
  color: #01579b;

  display: grid;
  grid-template-columns: 1fr 1fr;

  -webkit-box-shadow: -1px 6px 14px -3px rgba(92, 92, 92, 1);
  -moz-box-shadow: -1px 6px 14px -3px rgba(92, 92, 92, 1);
  box-shadow: -1px 6px 14px -3px rgba(92, 92, 92, 1);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
    height: 100vh;
  }
`
