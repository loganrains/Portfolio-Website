import { slide as Menu } from 'react-burger-menu';
import '../Sidebar.css';

export default function Sidebar() {
    return(
        <Menu>
            
            <a className="menu-item" href="/">
                Home
            </a>
        </Menu>
    );
}