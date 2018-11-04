import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
 import './index.css'
import React from 'react';
import { Row, Col } from 'antd';
// import {Animated} from "react-animated-css";
import logo from '../image/student.jpeg'
import { withRouter } from 'react-router'
import axios from 'axios';



const FormItem = Form.Item;

const inintialState = {
  username:'',
  password:'',
  message:'Sucessfuly Logged In ',
  loading: false


}


class Login extends React.Component {
 state = {...inintialState}

  handleChange = (event) =>{
    const { name, value } = event.target;
    
    this.setState({[name]: value})
  };
  
  componentDidMount(){
    axios.get('http://localhost:9008/student')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("this.state", this.state)
    let {username, password } = this.state;
    if(username === 'admin' && password === 'admin'){
      this.props.history.push('/home')
    }
 
    
  }

  validateForm =()=>{
    const  { username,password } = this.state;
    const isInvalid = !username ||  password ;
    return isInvalid;
 }

  render() {
    const { username, password } = this.state;
  
    return (
      <div >
     
      <image src={{backgroundImage:'../image/background.jpg'}}></image>
     
        <Row>
        <Col span={12} offset={6}>
    
        <div className="login-form{" style={{display:"flex"}}>
        <div style={{margin:130}}>
       

      <Form className="login-form" style={{ width:400, backgroundColor:'white'}} onSubmit={event =>this.handleSubmit(event)}> 
    <div style={{paddingTop:30}}>
      <strong><span className="login100-form-title p-b-51" style={{paddingLeft:80}}>
      <img style={{width:80}} src={require( '../image/student.jpeg')} alt="" />
              Signin
            </span></strong></div>
         <FormItem style={{paddingLeft:50, paddingTop:50}}> 
        <FormItem>
          
            <Input className='input-sigin' name='username'
            value={username}
            onChange={event => this.handleChange(event)}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            placeholder="Username" />
        </FormItem>
        <FormItem>
         
            <Input className='input-sigin' 
            name='password'
            value={password}
            onChange={event => this.handleChange(event)}
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            type="password" placeholder="Password" />
        
        </FormItem>
        </FormItem>
        <FormItem>
        
            <Checkbox className='checkBox' style={{float:"left"}}>Remember me</Checkbox>
        </FormItem>
         
          <FormItem style={{ paddingLeft:80}}>
          <Button type="primary" htmlType="submit" 
          className="login-form-button" style={{ width:210, paddingLeft:50}} 
         
         
          // onClick={event =>this.handleSubmit(event, signinUser)}
          >
          <Icon type="login"/>
            Sign in
          </Button>
          <FormItem>
          {/* {error && <Result
              type="error"
              title="Error"
              description={error.message}
              actions={<Button size="large" type="primary">OK</Button>}
            />} */}
    
                </FormItem>
          </FormItem>
    
      </Form>
    
      </div>
      </div>
      </Col>
      </Row>
   
     
      </div>
    );
  }
}

export default withRouter(Login);