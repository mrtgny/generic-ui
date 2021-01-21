import {useEffect} from "react";
import {useHistory} from "@reactivers/hooks";

const Redirect = (props) => {
    const {mode, redirectURL: _redirectURL} = props;
    const history = useHistory();
    const redirectURL = _redirectURL || "/";
    useEffect(() => {
        if (mode === "replace") {
            window.location.href = redirectURL;
        } else {
            history.push(redirectURL);
        }
    }, [mode, history, redirectURL])
    return null
}

export default Redirect;
