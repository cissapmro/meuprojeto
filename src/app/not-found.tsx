import Link from "next/link"

export const NotFound = () => {
return(
    <div>
        <h2>Página não encontrada!</h2>
        <p>Parece que esta página que você está tentando acessar não existe!</p>
        <Link href="/">
        Voltar para a página
        </Link>
    </div>
)
}
export default NotFound;