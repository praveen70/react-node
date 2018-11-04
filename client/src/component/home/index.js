import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message, Layout } from 'antd';
import { Card, Col, Row } from 'antd';

const FormItem = Form.Item;
const { Header, Content, Footer, Sider } = Layout;



class Home extends React.Component{

    nextPage=(event)=>{
       
        this.props.history.push('/registerStudent')
    }

    takeAttendacePage=()=>{
      this.props.history.push('/takeAttendace')
    }
    Viewattendace=()=>{
      this.props.history.push('/Viewattendace')
    }
 
    render(){
        return(
          <div>
       
            
            <div style={{ background: '#ECECEC', padding: '30px'}}>
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Register Student" bordered={false}><a onClick={event=> this.nextPage(event)}>Register Student</a></Card>
                </Col>
                <Col span={8}>
                  <Card title="Take Attendace" bordered={false}><a onClick={event=> this.takeAttendacePage(event)}>Take Attendace</a></Card>
                </Col>
                <Col span={8}>
                  <Card title="View Attendace" bordered={false}><a onClick={event=> this.Viewattendace(event)}>View Attendace</a></Card>
                </Col>
              </Row>
            </div>
                    
        </div>  
  

        )
    }
}

export default Home;