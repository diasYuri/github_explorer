import React, { useState, useRef, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';

import logo from '../../assets/github.svg';

import { Title, Form, Repositories, Error } from './style';

interface Repo {
  full_name: string;
  owner: {
    avatar_url: string;
    login: string;
  };
  description: string | null;
}

export const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const refInput = useRef<HTMLInputElement>(null);

  const [repos, setRepos] = useState<Repo[]>(() => {
    const storageRepos = localStorage.getItem('@GithubExplores:repositories');

    if (storageRepos) {
      return JSON.parse(storageRepos);
    } else {
      return [];
    }
  });

  async function handleAddRepo(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (refInput?.current?.value === '') {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get(`/repos/${refInput?.current?.value}`);
      const repo: Repo = response.data;

      setRepos([...repos, repo]);
      setInputError('');
      refInput.current!.value = '';
    } catch (err) {
      setInputError('Repositório não encontrado');
    }
  }

  useEffect(() => {
    localStorage.setItem('@GithubExplores:repositories', JSON.stringify(repos));
  }, [repos]);

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Dashboard</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepo}>
        <input
          ref={refInput}
          type="text"
          placeholder="Digite o nome do repositório do github"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repos.map(repo => {
          return (
            <Link key={repo.full_name} to={`/repository/${repo.full_name}`}>
              <img src={repo.owner.avatar_url} alt={repo.owner.login} />
              <div>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          );
        })}
      </Repositories>
    </>
  );
};
