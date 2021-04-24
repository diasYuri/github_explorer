import React from 'react'
//import {FiChevronRight} from 'react-icons/fi'

import logo from '../../assets/github.svg'

import {Title, Form} from "./style"

export const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer"/>
    <Title>Dashboard</Title>
    <Form>
      <input type="text" placeholder="Digite o nome do repositório do github"/>
      <button type="submit">Pesquisar</button>
    </Form>
  </>
)
