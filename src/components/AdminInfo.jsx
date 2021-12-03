import adminImage from "../images/admin.jpg";
import '../styles/AdminInfo.scss';
import AdminPersonalInfo from './AdminPersonalInfo'
const AdminInfo = () => {
    return (
        <header className="admin-info-container">
            <img className="admin-info-img-item" src={adminImage} alt="" />
            <AdminPersonalInfo />
        </header>
    )
}
export default AdminInfo;