import React from 'react';
import { signout, isAuthenticated } from "../../../helpers/auth";
import { Link, withRouter } from "react-router-dom";
import { ROOT_URL } from "../../../config";

const ToggleLogInOut = ({ history }) => (
    <div>
        {isAuthenticated() ? (
            <Link to={ROOT_URL + "/"}
                onClick={() =>
                    signout(() => {
                        history.push("/");
                    })
                }
            >
                Logout
            </Link>
        ) : (
                <Link to={ROOT_URL + "/login"}>
                    Login
                </Link>
            )}
    </div>
)

export default withRouter(ToggleLogInOut);
