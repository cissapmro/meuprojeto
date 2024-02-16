interface PageDetailProps {
    params: {
        id: string;
    }
}
const getData = async(id: string) => {
    console.log('id:' +id);
    const resolve = await fetch('https://api.github.com/users/devfraga/repos');
    return resolve.json();
}

//Mostra o id que está na url
export const RepositorioId = async({params}: PageDetailProps) => {

    //pega os dados do servidor e passa o id da url
    const data = await getData(params.id)

    return(
        <div>
            <p>Página com id {params.id}</p>
            
        </div>
    )
}
export default RepositorioId;