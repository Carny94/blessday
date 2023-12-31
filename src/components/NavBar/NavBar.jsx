import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        //Delegate to users-service
        userService.logOut();
        //Update state will also
        setUser(null);
    }
    return (
        <nav>
            <Link to= "/">Home</Link>
            &nbsp; | &nbsp;
            <Link to= "/journal/new" >Write Your Thoughts</Link>
            &nbsp; | &nbsp;
            <Link to= "/journal/journalSaved">Saved Entries</Link>
            &nbsp;&nbsp;
            {/* delete scriptur link. for viewing purose only */}
            {/* <Link to="/scripture">scripture</Link> */}
            &nbsp;&nbsp;
            <span>Hi Beautiful, {user.name} </span>
            &nbsp;&nbsp;
            <Link to=""onClick={handleLogOut}>Logout</Link>

        </nav>
    );
}