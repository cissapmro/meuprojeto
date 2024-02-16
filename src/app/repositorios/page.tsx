"use client"
import { useState, useEffect } from 'react'
import Loading from '@/componentes/loading';

interface DataProps{
  id: number;
  name: string;
  full_name: string;
  owner:{
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  }
}

export default function Repositorios(){
  const [repos, setRepos] = useState<DataProps[]>([])

  //ciclo de vida do componente.
  useEffect(() => {
    const getData = () => {
      fetch('https://api.github.com/users/devfraga/repos')
      .then( response => response.json() )
      .then((data: DataProps[]) => {

        setTimeout(() => {
          setRepos(data);
          //console.log(repos);
        }, 1000 )

      })
    }

    getData();
  }, [])

  return (
    <div>
      <h1>Página repositórios</h1>

      {repos.length > 0 ? (
        repos.map((item) => (
          <div key={item.id}>
            <strong>Repositório: </strong> <a>{item.name}</a>
            <br />
            <br />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}