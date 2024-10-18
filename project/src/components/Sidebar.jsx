import { slide as Menu } from 'react-burger-menu';
import '../Sidebar.css';

export default function Sidebar() {
    return(
        <Menu>
            <a className="menu-item" href="/">
                <img src="assets/Personal_Logo_2.png" alt="Orange Hexagon with black border containing a white L and a black R pushed together where the first leg of the R is the long side of the L"/>
            </a>

            <a className="menu-item" href="/">
                Home
            </a>
        </Menu>
    );
}