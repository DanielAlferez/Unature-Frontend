import { Navigate, Outlet, useLocation } from "react-router-dom"

const RequireAuth = () => {
    const id = localStorage.getItem("id")
    const location = useLocation()
    
    return (
        id == 0
            ? <Outlet />
            : <Navigate to={`/comunidad/perfil/${id}`} state={{ from: location }} replace />
    )
}
export default RequireAuth