import React from 'react'
import {FiChevronRight} from 'react-icons/fi'

import logo from '../../assets/github.svg'

import {Title, Form, Repositories} from "./style"

export const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer"/>
    <Title>Dashboard</Title>
    <Form>
      <input type="text" placeholder="Digite o nome do repositório do github"/>
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="/repository">
        <img src="" alt="" />
        <div>
          <strong>

          </strong>
          <p>

          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
)
