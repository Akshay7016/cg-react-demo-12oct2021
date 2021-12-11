import { useHistory } from "react-router";

const Logout = () => {

    // eslint-disable-next-line
    const history = useHistory();
    sessionStorage.setItem('isUserLoggedIn', false);
    sessionStorage.clear();
    alert("Logged out successfully...");
    window.location.assign('/home');
    // history.push("/login");
    return null;

}
export default Logout;