import Header from "../components/Header";
import RecruiterSignup from "../components/RecruiterSignup";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <RecruiterSignup />
        </>
    )
}