import Link from "next/link"
import styles from "@/componentes/header/header.module.css";

export const Header = () => {

    return(
        <header className={styles.header}>
            <Link href="/">
                Home
            </Link>
            <br />
            <Link href="/contatos">
                Contatos
            </Link>
            <br />
            <Link href="/repositorios">
                Repositórios
            </Link>
            <br />
            <Link href="/dashboard">
                Painel
            </Link>
            <hr />
            <br />
        </header>
    )
}