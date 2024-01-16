import AdminHeader from "../component/adminHeader/page"
import AdminFooter from "../component/adminFooter/page"
export default function AdminLayout({ children }) { 
    return (
        <section>
            <AdminHeader/>
            {children}
            <AdminFooter/>
        </section>
    )
}