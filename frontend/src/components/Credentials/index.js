import React from "react";
import Login from "./Login";
import {Route} from "react-router-dom";
import ValidationSeeker from "./ValidationSeeker";
import Registration from "./Registration";
import CodeSent from "./CodeSent";
import RegistrationSuccess from "./RegistrationSuccess"
import CreateBaseUser from "./CreateBaseUser";
import CreateSeekerProfile from "./CreateSeekerProfile";

const Credentials = (props) => {
    return (
        <>
            <Route path="/auth/login" exact component={Login}/>
            <Route path="/auth/signup" exact component={Registration}/>
            <Route path="/auth/signup/sent" exact component={CodeSent}/>
            <Route path="/auth/signup/validation/" exact component={CreateBaseUser}/>
            <Route path="/auth/signup/donor-profile/" exact component={CreateDonorProfile}/>
            <Route path="/auth/signup/seeker-profile/" exact component={CreateSeekerProfile}/>
            <Route path="/auth/signup/validation/seeker" exact component={ValidationSeeker}/>
            <Route path="/auth/signup/validation/donor" exact component={ValidationSeeker}/>
            <Route path="/auth/signup/completed" exact component={RegistrationSuccess}/>
            {/*<Route path="/auth/signup/validation" exact component={Verification}/>*/}
        </>
    )
};

export default Credentials;
