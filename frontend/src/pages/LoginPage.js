import "../styles/LoginPage.css";
import FormHeader from "../components/FormHeader";
import LoginForm from "../components/LoginForm";
import FormFooter from "../components/FormFooter";

const LoginPage = () => {
  return (
    <div className="common loginpage">
      <FormHeader title="Sign In"/>
      <LoginForm />
      <FormFooter acc="New to CashX?" link="/signup" linkmsg="Create an Account"/>
    </div>
  );
};

export default LoginPage;
