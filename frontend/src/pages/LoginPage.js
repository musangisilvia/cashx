import "../styles/LoginPage.css";
import FormHeader from "../components/FormHeader";
import LoginForm from "../components/LoginForm";
import FormFooter from "../components/FormFooter";

const LoginPage = () => {
  return (
    <div className="common loginpage">
      <FormHeader />
      <LoginForm />
      <FormFooter />
    </div>
  );
};

export default LoginPage;
