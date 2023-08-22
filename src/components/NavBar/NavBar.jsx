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
            <Link to= "/journal/new" >How Are You Feeling</Link>
            &nbsp; | &nbsp;
            <Link to= "/journal/:journalSaved">Your Saved Journal</Link>
            &nbsp;&nbsp;
            <span>Hi Beautiful, {user.name} </span>
            &nbsp;&nbsp;
            <Link to=""onClick={handleLogOut}>Have A Better Day</Link>

        </nav>
    );
}