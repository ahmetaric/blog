// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Avatar from "@mui/material/Avatar";
// import { FaLock } from "react-icons/fa";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";

// const LoginPage = () => {
//   return (
//     <Container maxWidth="sm" sx={{ mt: "10rem", textAlign: "center" }}>
//       <Avatar
//         sx={{
//           backgroundColor: "primary.main",
//           m: "auto",
//           width: 60,
//           height: 60,
//         }}
//         sizes="100px"
//       >
//         <FaLock size="40" />
//       </Avatar>
//       <Typography variant="h4" align="center" mb={4} color="primary.dark">
//         Login
//       </Typography>

//       <Formik
//         initialValues={{ fullName: "", email: "", password: "" }}
//         validationSchema={Yup.object().shape({
//           fullName: Yup.string()
//             .max(20, "fullname 20 veya daha az karakter olmalıdır")
//             .required("Lutfen fullname kismini bos birakmayiniz"),

//           email: Yup.string()
//             .email("Lutfen gecerli email adresini giriniz.")
//             .required("Lutfen email kismini bos birakmayiniz"),
//           password: Yup.string()
//             .min(8, "Sifre en az 8 karakter icermelidir")
//             .max(16, "Sifre en fazla 16 karakter icermelidir.")
//             .required("Lutfen password kismini bos birakmayiniz")
//             .matches(/\d+/, "Sifre rakam icermelidir")
//             .matches(/[a-z]+/, "Sifre kucuk harf icermelidir")
//             .matches(/[A-Z]+/, "Sifre buyuk harf icermelidir")
//             .matches(
//               /[!,?{}><%&$#£+-.]+/,
//               "Sifreniz ozel karakter icermelidir"
//             ),
//         })}
//         onSubmit={(values, actions) => {
//           alert(`fullName: ${values.fullName}
//             email: ${values.email}
//             password: ${values.password}
//           `);
//           actions.resetForm();
//           actions.setSubmitting(false);
//         }}
//       >
//         {({ values, handleChange, errors, touched, handleBlur }) => (
//           <Form>
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <TextField
//                 label="Full Name"
//                 name="fullName"
//                 id="fullName"
//                 type="text"
//                 variant="outlined"
//                 value={values.fullName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 helperText={touched.fullName && errors.fullName}
//                 error={touched.fullName && Boolean(errors.fullName)}
//               />
//               <TextField
//                 label="Email"
//                 name="email"
//                 id="email"
//                 type="email"
//                 variant="outlined"
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 helperText={touched.email && errors.email}
//                 error={touched.email && Boolean(errors.email)}
//               />
//               <TextField
//                 label="password"
//                 name="password"
//                 id="password"
//                 type="password"
//                 variant="outlined"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 helperText={touched.password && errors.password}
//                 error={touched.password && Boolean(errors.password)}
//               />
//               <Button type="submit" variant="contained" size="large">
//                 Submit
//               </Button>
//             </Box>
//           </Form>
//         )}
//       </Formik>
//     </Container>
//   );
// };

// export default LoginPage;
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import blog from "../assets/blok.png";
import {signIn, signUpProvider} from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const theme = createTheme();

export default function SignIn({email,setEmail}) {
   
   const [password, setPassword] = useState();
   const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email,password,navigate);
  };

  const handleProviderLogin = ()=>{
    signUpProvider(navigate)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xxl"
        style={{
          backgroundImage: "url(https://picsum.photos/1600/900)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          paddingTop: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.61)",
            borderRadius: "10px",
            maxheight: "650px",
            width: "450px",
            marginBottom: "10px",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            sizes="100px"
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "primary.dark",
                height: "250px",
                width: "250px",
              }}
            >
              <img src={blog} alt={blog} />
            </Avatar>
            <Typography component="h1" variant="h5">
              ── LOGIN ──
            </Typography>
            <Box
              component="form"
              onSubmit={handleLogin}
              noValidate
              sx={{ m: 1, display: "flex", flexDirection: "column", gap: "2" }}
            >
              <TextField
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ width: "350px" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 1 }}
                onClick={handleProviderLogin}
              >
                WITH GOOGLE
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
