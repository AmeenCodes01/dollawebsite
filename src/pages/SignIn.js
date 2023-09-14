import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SignInElements";
import ScrollToTop from "../components/ScrollToTop";
function SignIn() {
  return (
    <>
      <ScrollToTop />
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel> Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel> Password</FormLabel>
              <FormInput type="password" required />
              <FormButton>Continue</FormButton>
              <Text>Forgot Pass</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignIn;
