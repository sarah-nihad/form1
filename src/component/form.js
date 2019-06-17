import React, { Component } from 'react';
import './form.css'
import { Row,Col,Form,Button } from 'react-bootstrap';




class Contact extends Component {
  render() {
    return (
     
   
<div id ='main'>
<Row style={{marginRight:0}}><Col id='log'>
<div className='im'>
     <img src={require('./logo1.png')} id="im" />
    
     <p id='p1'>Shift Now To Next</p>
     </div>

 </Col></Row>

 <div id="form">
 <Row style={{marginRight:0}} id="formrow" >


 <Col xs={12}  md={6} id='col2'  >
   

     
   <Form>
   
             
      <div>          
   <p id='name'>:  الاسم الثلاثي</p> 
   <Form.Group>
  
  
  <Form.Control type="text" name="first" placeholder="" id="text" required />
  <Form.Text className="text-muted">
  
  </Form.Text>
</Form.Group></div>
<div>
<p id='name' > : الجنس </p>
<Form.Group controlId="exampleForm.ControlSelect1">
  
  <Form.Control as="select" id="text" name="gender" required >
  <option></option>
    <option>ذكر </option>
    <option>أنثى</option>
   
  </Form.Control>
</Form.Group></div>
<div>
<p id='name'> : تاريخ الميلاد</p> 
<Form.Group> 
  <Form.Control type="Date" name="birth" placeholder="" id="text" required />
  <Form.Text className="text-muted">
  
  </Form.Text>
</Form.Group>
</div>
<div>
<p id='name'>:  رقم الموبايل</p> 
<Form.Group>
  <Form.Control type="tel"  name="phone" placeholder="" id="text" required />
  <Form.Text className="text-muted">
  
  </Form.Text>
</Form.Group>
</div>



     

</Form>
</Col>
 <Col xs={12} md={6}id='col1'  >
<div>
 <p id='name'  > : عنوان السكن  </p>
 <Form.Group controlId="exampleForm.ControlSelect1">
    
    <Form.Control as="select" id="text" name="home"  required >
    <option></option>
    <option> اليرموك</option>
    <option> المنصور</option>
    <option> القادسية</option>
    <option> الحارثية</option>
    <option> حي الجامعة</option>
    <option> العامرية</option>
    <option> البياع</option>
    <option> السيدية</option>
    <option> حي العامل</option>
    <option> الاعلام</option>
    <option> الدورة</option>
    <option> الكاظمية</option>
    <option> الحرية</option>
    <option> العطيفية</option>
    <option> الاعظمية</option>
    <option>حي الجهاد</option>
    <option> الكرادة</option>
    <option> الجادرية</option>
    <option>حي العدل</option>
    <option> زيونة</option>
    <option> شارع فلسطين</option>
    <option> حي الخضراء</option>
    <option> الغزالية</option>
    <option> بغداد الجديدة</option>
    <option> باب المعظم</option>
    <option> الزعفرانية</option>
     
    </Form.Control>
  </Form.Group></div>
  <div>
  <p id='name' > : المرحلة الدراسية </p>
 <Form.Group controlId="exampleForm.ControlSelect1">
    
    <Form.Control as="select" id="text" name="school" required >
    <option></option>
      <option>اول متوسط </option>
      <option>ثاني متوسط</option>
      <option> ثالث متوسط</option>
      <option> رابع اعدادي</option>
      <option> خامس اعدادي</option>
      <option> سادس اعدادي</option>
     
    </Form.Control>
  </Form.Group></div>
  <div>
  <p id='name' > : مهتم بـ  </p>
    <Form.Group controlId="exampleForm.ControlSelect1">
      
      <Form.Control as="select" id="text" name="interests" required >
      <option></option>
        <option>البرمجة </option>
        <option>التصميم</option>
       
      </Form.Control>
    </Form.Group> </div>
    <div>
    <p id='name' >: الهوايات</p>
    <Form.Group controlId="exampleForm.ControlTextarea1">
   
     
      <Form.Control as="textarea" rows="2" name="hobbies" id="text"/>
    </Form.Group></div>
  
    <div id='b1'>
    
  <Button variant="outline-info" id="bb" value='submit' name="send"> ارسال </Button>
    </div>
  
       
       <Form></Form> </Col>




</Row> 
</div>
    
</div>
    
    



    );
  }
}

export default Contact;
