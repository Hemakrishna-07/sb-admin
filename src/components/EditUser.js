import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useParams,useNavigate} from 'react-router-dom'

function EditUser(props) {

    let params = useParams()
    console.log(params)
    let navigate = useNavigate()

    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [batch,setBatch] = useState("")
    let [phone,setPhone] = useState("")

    useEffect(()=>{
        if(params.id<props.data.users.length)
        {
            setName(props.data.users[params.id].name)
            setEmail(props.data.users[params.id].email)
            setBatch(props.data.users[params.id].batch)
            setPhone(props.data.users[params.id].phone)
        }
        else
        {
            navigate('/dashboard')
        }
    },[navigate,params.id,props.data.users])

    let handleSubmit = ()=>{
    let newData = {name,email,batch,phone}
    //take a deep clone of the state
    let data = [...props.data.users]
    //replace the data to the new clone
    data.splice(params.id,1,newData)
    //update the state with the new clone
    props.data.setUsers(data)
    navigate('/dashboard')
    }

  return <>
    <Form className='mx-auto col-10'>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Batch</Form.Label>
    <Form.Control type="text" placeholder="Enter Batch" value={batch} onChange={(e)=>setBatch(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Phone-No</Form.Label>
    <Form.Control type="number" placeholder="Enter Phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
    </Form.Group>

    <Button variant="primary" type="submit" onClick={()=>handleSubmit()}>
    Submit
    </Button>
    </Form>
  </>
}

export default EditUser