import { useRequireAuth } from "./Auth/useRequireAuth";

const Protected = props => {
    useRequireAuth();
    return (
        <div className="text-center">
            <h1>Protected page</h1>
        </div>
    );
}

export default Protected;