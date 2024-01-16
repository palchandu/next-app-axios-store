"use client"
import "../css/dashboard.css"
import Link from "next/link"
import { useRouter } from "next/navigation"
const AdminHeader = () => {
  const id = 2
  const router = useRouter();
  return (
    <div className="menu-list">
      <h2>Hello</h2>
      <ul className="menu">
        <li className="link"><Link href="/admin/dashboard">Dashboard</Link></li>
        <li className="link"><Link href={`/admin/profile/${id}`}>Profile</Link></li>
        <li className="link"><Link href="/admin/setting">Setting</Link></li>
        <li className="link"><button className="btn" onClick={()=>{ router.push('/admin/dashboard')}}>Navigate to Dashboard</button></li>
      </ul>
    </div>
  )
}

export default AdminHeader