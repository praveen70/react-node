import React from 'react';
import { Card, Col, Row } from 'antd';
import axios from 'axios';
import { DatePicker, Radio,  Menu, Dropdown, Button, Form, Select,Icon   } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const FormItem = Form.Item;
const Option = Select.Option;


const inintialState = { 
    studentNames:"",
    data:'',
    date:'',
    dropdown:'',
    StudentID:''

  
  }

class Takeattendace  extends React.Component{
    state = {...inintialState};
    
      

      onChange=(dateString, date)=> {
          this.setState({ date:date})
        
      }

      dropDownChange=(event)=>{
          const{ name, value } = event.target;
          console.log(name.value);
      }


    clearState =()=>{
        this.setState({...inintialState})
    }

      componentDidMount(){
          let currentdata = this;
          let id= this;
          var listData =[];
          var ID = [];
        axios.get('http://localhost:9008/student')
        .then(function (response) {
             for(let data of response.data){
                 ID.push(data.id)
                 
                 id.setState({StudentID: ID})
                  //console.log(ID)
                   listData.push(data.StudentName)
                   //console.log(listData)
                   currentdata.setState({data:listData});

            }

        })
        .catch(function (error) {
            console.log(error);
        });
        }


        handleChange=(label, id)=> {
          // console.log(label , id.key)
          // console.log(`selected ${label}`);
            this.setState({ StudentID:id.key})
          }


          handleSubmit=()=>{

              const { date,  StudentID} = this.state;
              
              
            //   let object ={
            //       date,
            //       dropdown,
            //       StudentID
            //   }
              axios.post('http://localhost:9008/attendance', {
               
                StudentID:StudentID,
                AttendanceDate:date
               
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            //   console.log(object)
          }

    render(){
             

        return(
            <div style={{ background: '#ECECEC', padding: '30px', paddingLeft:"40%" , height:"100vh" }}>
      <Row gutter={16}>
    
      <Col span={8}>
        <Card title="Take Attendance" bordered={false}>
        <FormItem>
        <DatePicker onChange={this.onChange} />

        </FormItem>
      
   
       <FormItem>

    <Select defaultValue="NON SELECTED" style={{ width: 300 }} onChange={this.handleChange}>
      <Option value="jack">NON SELECTED</Option>
      { this.state.data && this.state.data.map( (item,index) => {
        
        return <Option  key={index} value={item}>{ item}</Option>

        } ) }
      
    </Select>
       </FormItem>
   
  

          <FormItem style={{ paddingLeft:50}}>
                <Button type="primary" htmlType="submit" 
                className="login-form-button" style={{ width:210, paddingLeft:"-16px"}} 
               
               
                 onClick={event =>this.handleSubmit(event)}
                >
                <Icon type="submit"/>
                  Submit
                </Button>
                </FormItem>
        </Card>
      </Col>
    </Row>
  </div>

        );
    }
}

export default Takeattendace;