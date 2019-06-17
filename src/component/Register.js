import React, { Component } from 'react';
import './form.css'
import { Row,Col,Form,Button } from 'react-bootstrap';




class Register extends Component {
    constructor(){
        super();
    this.state={
        name:(''),pass:(''),pass1:(''),phone:(''),mail:(''),number:(''),file:('')
    }
    
    }
  render() {
    return (
     
   



 <div id="form">
 <Row style={{marginRight:0}} id="formrow" >
     <Col xs={12}id='col'  >
    

     
     <Form>
     
               
                  
     
     <Form.Group>
    
    <Form.Label id='name'></Form.Label> 
    <Form.Control type="text" name="first" placeholder=" Name" id="text" required  value={this.state.name} onChange={(e)=>{
  this.setState({name:e.target.value})
    }} />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label></Form.Label>
    <Form.Control type="email" placeholder="Enter email"  name="mail"  value={this.state.mail} onChange={(e)=>{
  this.setState({mail:e.target.value})
    }}/>
    <Form.Text className="text-muted">
     
    </Form.Text>

  </Form.Group>
  <Form.Group>
    
    <Form.Label id='name'></Form.Label> 
    <Form.Control type="tel" name="phone" placeholder=" Phone" id="text" required  value={this.state.phone} onChange={(e)=>{
  this.setState({phone:e.target.value})
    }}/>
  </Form.Group> 
  <Form.Group controlId="formBasicPassword">
    <Form.Label></Form.Label>
    <Form.Control type="password" placeholder="Password" name="pass" value={this.state.pass} onChange={(e)=>{
  this.setState({pass:e.target.value})
    }} />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label></Form.Label>
    <Form.Control type="password" placeholder="Admin Password" name="pass1"  value={this.state.pass1} onChange={(e)=>{
  this.setState({pass1:e.target.value})
    }}/>
  </Form.Group>
  <Form.Group>
    
    <Form.Label id='name'></Form.Label> 
    <Form.Control type="number" name="num" placeholder=" Number of table" id="text" required  value={this.state.number} onChange={(e)=>{
  this.setState({number:e.target.value})
    }} />
  </Form.Group>
  <Form.Group>
    
    <Form.Label id='name'></Form.Label> 
    <Form.Control type="file" name="file"id="text" required  value={this.state.file} onChange={(e)=>{
  this.setState({file:e.target.value})
    }} />
  </Form.Group>
  
  <div id='b1'>
  
<Button variant="outline-info" id="bb" value='submit' name="send"> Send </Button>
  </div>
  </Form>
</Col>
</Row> 
</div>
    

    
    



    );
  }
}

export default Register;
