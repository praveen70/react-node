import React from 'react'
import { Form, Icon, Input, Button, message} from 'antd';
import { DatePicker, Radio } from 'antd';
import { Row, Col } from 'antd';
import axios from 'axios'

const FormItem = Form.Item;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const inintialState = { 
    studentname:'',
    currentDate:'',
    classes:'',
    rollnumber: "",
    dob: '',
  
  
  }

class Register extends React.Component{
    state = {...inintialState}


    clearState =()=>{
        this.setState({...inintialState})
    }

    onChange= (event, date, dateString)=>{
        //console.log(date);
        this.setState({
            currentDate:date
        })
      }
      handleSizeChange = (e) => {
        this.setState({ dob: e.target.value });
      }

      handleChange=(event)=>{
        const { name, value } = event.target;
        //console.log(name, value);
        this.setState({[name]: value})
      }
            handleSubmit=(event)=>{
                const { studentname, currentDate, classes,rollnumber } =this.state
                axios.post('http://localhost:9008/student', {
                
                    StudentName: studentname,
                    StudentDOB: currentDate,
                    'Class': classes,
                    'RollNumber': rollnumber
                })
                .then(function (response) {
                    console.log(response);
                    message.info('Student Registered Successfully');
                })
                .catch(function (error) {
                    message.error("error in student registation. please contact administrator");
                    console.log(error);
                });
                console.log(this.state)
                
                this.clearState();
            }

    render(){
        const { studentname, classes,rollnumber } =this.state
        console.log(this.state.dob)
        console.log(this.state.currentDate)
        return(
            <div >
     
            <image src={{backgroundImage:'../image/background.jpg'}}></image>
           
              <Row>
              <Col span={12} offset={6}>
          
              <div className="login-form{" style={{display:"flex"}}>
              <div style={{margin:130}}>
             
      
            <Form className="login-form" style={{ width:400, backgroundColor:'white'}} > 
          <div style={{paddingTop:30}}>
            <strong><span className="login100-form-title p-b-51" style={{paddingLeft:80}}>
            <img style={{width:80}} src={require( '../image/student.jpeg')} alt="" />
                    Register 
                  </span></strong></div>
               <FormItem style={{paddingLeft:50, paddingTop:50}}> 
              <FormItem>
                
                  <Input className='input-sigin'
                  name='studentname'
                  value={studentname}
                  onChange={event => this.handleChange(event)}
                  placeholder="Student Name" />
              </FormItem>
              <FormItem>
               
              <div>
              
              {/* <Radio.Group value={dob} onChange={this.handleSizeChange}>
                    </Radio.Group>
      
                     <DatePicker size={dob} /> */}
                     <DatePicker onChange={this.onChange} />
      
        
                
            </div>
              </FormItem>
              <FormItem>
                
                <Input className='input-sigin'
                name='classes'
                value={classes}
                onChange={event => this.handleChange(event)}
                placeholder="Class" />
            </FormItem>
            <FormItem>
                
                <Input className='input-sigin'
                name='rollnumber'
                value={rollnumber}
                onChange={event => this.handleChange(event)}

                placeholder="Roll Number" />
            </FormItem>
              </FormItem>
            
              
               
                <FormItem style={{ paddingLeft:80}}>
                <Button type="primary" htmlType="submit" 
                className="login-form-button" style={{ width:210, paddingLeft:50}} 
               
               
                 onClick={event =>this.handleSubmit(event)}
                >
                <Icon type="login"/>
                  Submit
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


        )
    }
}

export default Register; 