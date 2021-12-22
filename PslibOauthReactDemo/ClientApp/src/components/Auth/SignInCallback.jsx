import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../providers/AuthProvider";

export const SignInCallback = props => {
    const [{ userManager }] = useAuthContext();
    let navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const signResult = await userManager.signinRedirectCallback();
            console.log(signResult.profile);
            navigate("/");
        })();
    }, [userManager]);
    return null;
}

export default SignInCallback;