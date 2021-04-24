import React from 'react'

import logo from '../../assets/github.svg'

import {Title} from "./style"

export const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer"/>
    <Title>Dashboard</Title>
  </>
)
