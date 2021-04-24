import React, { useState, useRef, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';

import logo from '../../assets/github.svg';

import { Title, Form, Repositories } from './style';

interface Repo {
  full_name: string;
  owner: {
    avatar_url: string;
    login: string;
  };
  description: string | null;
}

export const Dashboard: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const refInput = useRef<HTMLInputElement>(null);

  async function handleAddRepo(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (refInput?.current?.value == '' || refInput?.current?.value == null) {
      return;
    }
    const response = await api.get(`/repos/${refInput?.current?.value}`);
    const repo: Repo = response.data;

    setRepos([...repos, repo]);
    refInput.current.value = '';
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Dashboard</Title>
      <Form onSubmit={handleAddRepo}>
        <input
          ref={refInput}
          type="text"
          placeholder="Digite o nome do repositório do github"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repos.map(repo => {
          return (
            <a key={repo.full_name} href="/repository">
              <img src={repo.owner.avatar_url} alt={repo.owner.login} />
              <div>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          );
        })}
      </Repositories>
    </>
  );
};
