import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Painel do site",
    description: "Painel do meuprojeto",
    keywords: ['Meu Projeto', 'Next Js', 'Curso da Udemy'],
    openGraph: {
      images: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      title: "Imagem do google"
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true
      }
    }
  };
  

export const DashboardLayout = ({children}: {children: React.ReactNode}) => {

    return(
        <div>
            <h1>Header do Dashboard</h1>
            {children}
        </div>
    )
}
export default DashboardLayout;