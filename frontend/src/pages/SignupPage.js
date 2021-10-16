import FormFooter from '../components/FormFooter';
import FormHeader from '../components/FormHeader';
import SignupForm from '../components/SignupForm';


const SignupPage = () => {
  return (
    <div className="common">
      <FormHeader title="Sign Up"/>
      <SignupForm />
      <FormFooter acc="Already have an account?" link="/login" linkmsg="Sign In"/>
    </div>
  );
};

export default SignupPage;
