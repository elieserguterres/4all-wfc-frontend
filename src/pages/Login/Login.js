import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.css";

const Login = (props) => {
  return (
    <div className="divLogin bg-gradient-success">
      <div className="divLoginContainer container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-12 col-md-6 login-bg-login-image"></div>
                  <div className="col-12 col-md-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          4all workflow de recursos!
                        </h1>
                      </div>

                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>

                        <a
                          href="index.html"
                          className="btn btn-success btn-user btn-block"
                        >
                          <FontAwesomeIcon icon={["fas", "check"]} /> Login
                        </a>
                      </form>

                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Esqueceu a senha?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
