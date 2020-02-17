import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

import { Colxx } from "Components/CustomBootstrap";

import { connect } from "react-redux";
import { registerUser } from "Redux/actions";

class RegisterLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  onUserRegister() {
    if (this.state.email !== "" && this.state.password !== "") {
      // This is for adding user to Firebase. Commented out for demo purpose.  
      this.props.registerUser(this.state, this.props.history);
      // this.props.history.push("/");
    }
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  componentDidMount() {
    document.body.classList.add("background");
  }
  componentWillUnmount() {
    document.body.classList.remove("background");
  }
  render() {
    return (
      <Fragment>
        
        <main>
          <div className="container">
            <Row className="h-100">
              <Colxx xxs="12" md="10" className="mx-auto my-auto">
                <Card className="auth-card">
                  <div className="position-relative image-side ">
                    <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
                    <p className="black">
                      Please use this form to register. <br />
                      If you are a member, please{" "}
                      <NavLink to={`/login`} className="black">
                        login
                      </NavLink>
                      .
                    </p>
                  </div>
                  <div className="form-side">
                    <NavLink to={`/`} className="white">
                     {/* <span className="logo-single" />*/}
                    </NavLink>
                    <CardTitle className="mb-4">
                      <IntlMessages id="user.register" />
                    </CardTitle>
                    <Form>
                      <Label className="form-group has-float-label mb-4">
                        <Input type="name" onChange={this.handleNameChange} />
                        <IntlMessages id="user.fullname" />
                      </Label>
                      <Label className="form-group has-float-label mb-4">
                        <Input type="email"  onChange={this.handleEmailChange} />
                        <IntlMessages id="user.email" />
                      </Label>
                      <Label className="form-group has-float-label mb-4">
                        <Input type="password"  onChange={this.handlePasswordChange}  />
                        <IntlMessages
                          id="user.password"
                          defaultValue={this.state.password}
                        />
                      </Label>
                      <div className="d-flex justify-content-end align-items-center">
                        <Button
                          color="primary"
                          className="btn-shadow"
                          size="lg"
                          onClick={() => this.onUserRegister()}
                        >
                          <IntlMessages id="user.register-button" />
                        </Button>
                      </div>
                    </Form>
                  </div>
                </Card>
              </Colxx>
            </Row>
          </div>
        </main>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(RegisterLayout);
