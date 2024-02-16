import { OwnerRepo } from "@/componentes/ownerRepo";

interface dataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
  }
}

const delayFetch = async(url: string, delay: number) => {
  await new Promise(resolve => setTimeout(resolve, delay));
  const response = await fetch(url, {next: {revalidate: 120}});
  return response.json();
}

const getData = async() => {
  const data = await delayFetch('https://api.github.com/users/devfraga/repos', 0);
  return data;
}

export default async function Home() {
 
/*const getData = async() => {
  const response = await fetch('https://api.github.com/users/devfraga/repos');
  return response.json();
}*/

const data: dataProps[] = await getData();
//console.log(data);

  return (
    <main>
      <h1>Página da Home</h1>
      <span>Bem vindo a página da Home</span>
      <br />
      <h2>Lista de repositórios</h2>
      {data.map((item) => (
        <div>
          <strong>Repositório:</strong>
          <a>{item.name}</a>
          <br />
          <OwnerRepo 
         avatar_url={item.owner.avatar_url}
         name={item.name}
          />
          <br />
        </div>
      ))}
    </main>
  );
}
