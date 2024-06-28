import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { app } from "../core/firebase";
import "./css/emailPasswordAuth.css";



const auth = getAuth(app);
const EmailPasswordAuth = () => {
  //password validation
  const [validated, setValidated] = useState(false);
  const [forgetPass, setForgetPass] = useState("");

  //for successfully register
  const [successful, setSuccessful] = useState("");

  //if user already registered or not?
  const [registered, setRegistered] = useState(false);

  //if password got error
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePassBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleRegisteredChange = (event) => {
    setRegistered(event.target.checked);
  };

  const handlePasswordReset = (event) => {
    sendPasswordResetEmail(auth, email, password).then(() => {
      setForgetPass("Reset Password Link Send in Your Email");
    });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("Update name");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //for send a verification mail
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log("Email Verifications Send");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSubmit = (event) => {
    // console.log("email:", email, "password: ", password);
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();

      //when we click submit button its goto fire base, return use for to prevent it before go to the firebase
      return;
    }
    //password validation
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      //for invalid password
      setError("Password should contain at-least one special character");
      return;
    }

    setValidated(true);
    //for valid password
    setError("");
    //for successfully registration
    setSuccessful("");

    //condition
    if (registered) {
      console.log(email, password);
      //if already registered so login
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);

           window.location.href = '/homepage';

        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      //for successfully registration
      // new registration
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setUserName("");
          setEmail("");
          setPassword("");
          verifyEmail();
          setSuccessful("Successfully Register. Please Check Your Email for the verification link.");
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    }

    event.preventDefault();
  };

  return (
    <div className="registration mx-auto w-50 text-start mt-5">
      <div
        style={{
          fontFamily:
            "Comic Sans MS,Lato, Helvetica, Gotham, Comic Sans, cursive",
          margin: "1rem 30% 1rem 30%",
        }}
      >
        <h2 className="text-primary">
          {" "}
          {registered ? "Login" : "Registration"}
        </h2>
      </div>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {!registered && (
          <div
            style={{
              textAlign: "left",
              position: "center",
              margin: "1rem 30% 1rem 30%",
              fontWeight: "bold",
              fontFamily:
                "Comic Sans MS, Lato, Helvetica, Gotham, Comic Sans, cursive",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name: </Form.Label>
              <div>
                <Form.Control
                  onBlur={handleNameBlur}
                  type="text"
                  placeholder="Enter name"
                  required
                />
              </div>

              {/* <Form.Control.Feedback type="invalid">
              Please provided your name
            </Form.Control.Feedback> */}
            </Form.Group>
          </div>
        )}

        <div
          style={{
            textAlign: "left",
            margin: "1rem 30% 1rem 30%",
            fontWeight: "bold",
            fontFamily:
              "Comic Sans MS,Lato, Helvetica, Gotham, Comic Sans, cursive",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address: </Form.Label>
            <div>
              <Form.Control
                onBlur={handleEmailBlur}
                type="email"
                placeholder="Enter email"
                required
              />
            </div>

            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
            {/* <Form.Control.Feedback type="invalid">
            Please provided a valid email
          </Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password: (Contain at least one special character)</Form.Label>
            <div>
              <Form.Control
                onBlur={handlePassBlur}
                type="password"
                placeholder="Password"
                required
              />
            </div>

            {/* <Form.Text className="text-muted">Put a Strong Password</Form.Text> */}
            {/* <Form.Control.Feedback type="invalid">
            Please provided a valid password
          </Form.Control.Feedback> */}
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <div style={{ fontFamily: "Comic Sans,Lato, Helvetica, Gotham" }}>
            <Form.Check
              onChange={handleRegisteredChange}
              type="checkbox"
              label="Already Registered?"
            />
          </div>

          <Button onClick={handlePasswordReset} variant="link">
            Forget Password?
          </Button>
        </Form.Group>
        <div
          style={{
            color: "red",
            fontFamily: "Comic Sans,Lato, Helvetica, Gotham",
          }}
        >
          <p className="text-danger">{error}</p>
        </div>
        <Button variant="primary" type="submit">
          {registered ? "Login" : "Register"}
        </Button>
      </Form>
      <p className="pt-3">
        <b>{successful}</b>
        <b>{forgetPass}</b>
      </p>
    </div>
  );
};

export default EmailPasswordAuth;
