export const metadata = {
    title: 'Painel do site',
    description: 'Ete é o painel demonstrativo do site'
}

export const DashboardLayout = ({children}: {children: React.ReactNode}) => {

    return(
        <div>
            <h1>Header do Dashboard</h1>
            {children}
        </div>
    )
}
export default DashboardLayout;