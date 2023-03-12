const AdminLayout = ({children}) =>{
    return(
        <>
        <p>Управление</p>
            {children}
        <p>Заказы</p>
        </>
    )
}
export default AdminLayout;