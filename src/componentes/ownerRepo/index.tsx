"use client"
import Image from "next/image"
import { useState } from "react";


interface OwnerRepoProps {
    avatar_url: string;
    name: string;
}

export const OwnerRepo = ({avatar_url, name}: OwnerRepoProps) => {

const [show, setShow] = useState(false);

    return(
        <div>
            {show && (
            <>
            <Image
            src={avatar_url}
            alt="Foto avatar do usuário"
            height={34}
            width={34}
            quality={100}
            style={{borderRadius: 5}}
            />
            <strong>Nome: {name}</strong>
            </>
            )}
            
            <button onClick={() => setShow(!show)} style={{height:34, width:100}}>{show ? "Ocultar nome" : "Mostrar nome"}</button>
        </div>
    )
}

