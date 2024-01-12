import React,{useContext, useState,useEffect} from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import {dataContext} from '../hooks/Context'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modals from './Modals';
const Edit = () => {
  let navi=useNavigate();
  
  const {data,setData}=useContext(dataContext)

    const {id}=useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [model, setModel] = useState(false);


    useEffect(() => {
      const temp = data.filter(i => i.id === id);  
      if (temp.length > 0) {
        setTitle(temp[0].noteTitle);
        setDescription(temp[0].noteBody);
      }
    }, [id]);

    const update=()=>{
      if(title!==''&& description!==''){
        let tempData=data.map(i=>i.id===id?{...i,noteTitle:title,noteBody:description} :i)
        setData(tempData)
        navi('/notes')
    }else{
      setModel(true);
    }
  }
  return (
    <div style={{textAlign:'center',marginTop:'40px'}}>
    <Modals showModal={model} closeModal={() => setModel(false)} />
        <h1>Edit Notes</h1>
        <Form style={{width:'50%',margin:'40px auto',textAlign:'left'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title..."  value={title} onChange={(e)=>setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Note Content</Form.Label>
        <Form.Control type="text" placeholder="Description...." value={description} onChange={(e)=>setDescription(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="button" onClick={update}>
       Update Now
      </Button>
    </Form>
    </div>
  )
}

export default Edit