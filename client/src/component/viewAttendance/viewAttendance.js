import React from 'react';
import { Card, Col, Row } from 'antd';
import axios from 'axios';
import { DatePicker, Radio,  Menu, Dropdown, Button, Form, Select,Icon, Table   } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const FormItem = Form.Item;
const Option = Select.Option;




class Viewattendace  extends React.Component{
  state={
    date:'',
    response:'',
    praveen:[],
    attendanceData:[]

  }

  onChange=(date, dateString)=>{
    let dates = date;
    this.setState({date:dateString});

  }


  handleSubmit=()=>{

    let res = this;
    let pra = this;
    axios.get(`http://localhost:9008/attendance/${this.state.date}`)
    .then(function (response) {
      console.log("respoze data::::",response.data);
      res.setState({attendanceData:response.data })

     for(let name of response.data){
      
       pra.setState({praveen:[{key:"a", value:1}, {key:"b", value:2}]})

     }
     
          
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }


    render(){
      const columns = [{
        title: 'Student ID',
        dataIndex: 'StudentID',
        key: 'StudentID',
      }, {
        title: 'AttendanceDate',
        dataIndex: 'AttendanceDate',
        key: 'AttendanceDate',
      }];
        console.log("Response Data::::s",this.state.response)
        return(
            <div style={{ background: '#ECECEC', padding: '30px', paddingLeft:"40%" , height:"100vh" }}>
      <Row gutter={16}>
    
      <Col span={8}>
        <Card title="View Attendance" bordered={false}>
        <FormItem>
        <DatePicker onChange={this.onChange} /> 

        </FormItem>
      
   
       <FormItem>

       </FormItem>
   
  

          <FormItem style={{ paddingLeft:50}}>
                <Button type="primary" htmlType="submit" 
                className="login-form-button" style={{ width:210, paddingLeft:"-16px"}} 
                onClick={event=>this.handleSubmit(event)}
               
               
                 
                >
                <Icon type="submit"/>
                  Submit
                </Button>
                </FormItem>
               
        
       <Table dataSource={this.state.attendanceData} columns={columns} />
        </Card>
      </Col>
    </Row>
  </div>

        );
    }
}

export default Viewattendace;