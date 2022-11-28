import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '@luma-fe-workspace/redux';
import {
  LoginHeader,
  LoginContainer,
  LoginWrapper,
  Form,
  Input,
  Button,
} from './Login.styles';

export const Login = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const { values, handleChange, handleBlur, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      onSubmit: (vals) => {
        login({
          username: vals.username,
          password: vals.password,
        })
          .then((res) => {
            if ('data' in res) {
              Cookies.set('user_token', res.data.access_token, {
                path: '',
                sameSite: 'strict',
                secure: true,
              });
            }
          })
          .then(() => {
            navigate('/dashboard');
          });
      },
    });

  return (
    <LoginWrapper>
      <LoginContainer>
        <LoginHeader>Sign In</LoginHeader>
        <Form onSubmit={handleSubmit}>
          <Input
            name="username"
            placeholder="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />

          <Input
            name="password"
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <Button type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </Form>
      </LoginContainer>
    </LoginWrapper>
  );
};
