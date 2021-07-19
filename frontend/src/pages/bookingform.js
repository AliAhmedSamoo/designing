import React from 'react'
import 'antd/dist/antd.css';
import styled from "styled-components";
import {
  Form,
  Input,
  Button,
  Select,
  TreeSelect,
  Switch, 
  DatePicker, 
  Checkbox, 
} from 'antd';

const { RangePicker } = DatePicker;

const AppContainer = styled.div`
  
 background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
   background-Size: 20%;
   width:100%;
    height: 100%;
  display: flex;
   flex-direction: column;
   align-items: center;
  justify-content: center;
   //background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;

const Tag = styled.div`
  
 background-image: url(https://cdn.shopify.com/s/files/1/1999/7417/products/220431_800x.jpg?v=1583253325);
   background-Size: 20%;
   width:80%;
    height: 800px;
  display: flex;
   flex-direction: column;
   align-items: center;
  justify-content: center;
  // background: rgb(50,142,65);
  // background: linear-gradient(90deg, rgba(50,142,65,1) 4%, rgba(70,106,166,0.938813025210084) 100%, rgba(0,212,255,1) 100%);
`;




function bookingform() 
{
    return (
<>

<AppContainer>
<Tag>



<h2>Booking Form</h2>

<Form>
        
        
        
        <Form.Item >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item >
          <Input  placeholder="Phone"/>
        </Form.Item>
        <Form.Item >
          <Input placeholder="CNIC" />
        </Form.Item>
        <Form.Item >
          <Input placeholder="Address" />
        </Form.Item>
        <Form.Item >
          <Select placeholder="Select City">
            <Select.Option value="city1">Karachi</Select.Option>
            <Select.Option value="city2">Lahore</Select.Option>
            <Select.Option value="city3">Islamabad</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <TreeSelect placeholder="Select Car"
            treeData={[
              {
                title: 'Honda',
                value: '',
                children: [
                  {
                    title: 'Civic',
                    value: 'car1',
                  },
                ],
              },
              {
                title: 'Toyota',
                value: 'corolla',
                children: [
                  {
                    title: 'Corolla', 
                    value: 'car2',
                  },
                ],
              },  
            ]}
          />
        </Form.Item>
        <Form.Item >
        <RangePicker />
        </Form.Item>
        {/* </Form.Item>
        <Form.Item label="Car Tag">
          <InputNumber />
        </Form.Item> */}
        <Form.Item>
        <Checkbox>I agree to all the terms & conditions</Checkbox>
        
        </Form.Item>
        <Form.Item >
          <Button>Confirm Booking</Button>
        </Form.Item>
      </Form>
</Tag>

      </AppContainer>


</>


    )
    
}

export default bookingform
