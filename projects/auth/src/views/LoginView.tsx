import {
  Box,
  Button,
  Container,
  Card,
  TextField,
  CardContent,
} from "@mui/material";
import { Formik } from "formik";
import { object, string } from "yup";
import { loginHelper } from "../helpers/authHelper";
import { IUser } from "../types/UserType";

interface IFormValues {
  username: string;
  password: string;
}

const Login = () => {
  const getInitialState = (): IFormValues => {
    return {
      username: "",
      password: "",
    };
  };

  const loginSchema = () => {
    return {
      username: string().required(),
      password: string().required(),
    };
  };

  return (
    <Container maxWidth="sm">
      <Box
        display={"flex"}
        style={{ minHeight: "100vh" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Card>
          <CardContent style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
            <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
              TODO Digital Solutions
            </h2>
            <Formik
              initialValues={getInitialState()}
              validationSchema={object(loginSchema())}
              onSubmit={(values: IFormValues, { setErrors }) => {
                const { username, password } = values;
                if (username === "admin" && password === "12345") {
                  const user: IUser = {
                    email: "admin@email.com",
                    username: "admin",
                  };
                  loginHelper(user);
                } else {
                  setErrors({ password: "username or password incorrect" });
                }
              }}
            >
              {({ values, errors, touched, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "1rem" }}>
                    <TextField
                      error={!!errors.username}
                      helperText={errors.username}
                      fullWidth
                      variant="filled"
                      placeholder="Username"
                      name="username"
                      onChange={handleChange}
                      value={values.username}
                    ></TextField>
                  </div>
                  <div style={{ marginBottom: "2rem" }}>
                    <TextField
                      error={!!errors.password}
                      helperText={errors.password}
                      fullWidth
                      variant="filled"
                      placeholder="Password"
                      onChange={handleChange}
                      value={values.password}
                      type="password"
                      name="password"
                    ></TextField>
                  </div>
                  <Button type="submit" variant="contained" fullWidth>
                    Login
                  </Button>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;
