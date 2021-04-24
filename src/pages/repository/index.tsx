import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from "react-icons/fi";

import logo from "../../assets/github.svg"
import { Header } from './style';

interface RepositoryParams {
  repository: string;
}

export const Repository: React.FC = () => {
  //const { params } = useRouteMatch<RepositoryParams>();

  return (
    <Header>
      <img src={logo} alt="Github Explorer" />
      <Link to="/dashboard">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>
  )
};
