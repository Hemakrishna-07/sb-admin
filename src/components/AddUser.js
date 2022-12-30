import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'

function AddUser(props) {

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [batch,setBatch] = useState("")
  let [phone,setPhone] = useState("")
  let navigate = useNavigate()
  let handleSubmit = ()=>{
    let newData = {name,email,batch,phone}
    //take a deep clone of the state
    let data = [...props.data.users]
    //push the data to the new clone
    data.push(newData)
    //update the state with the new clone
    props.data.setUsers(data)
    navigate('/dashboard')
  }

  return <>
  <Form className='mx-auto col-10'>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone-No</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone number" onChange={(e)=>setPhone(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
  </>
}

export default AddUser