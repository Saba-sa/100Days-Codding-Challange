import React,{useContext} from 'react'
import { dataContext } from '../hooks/Context'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import '../App.css'

const Singlenote = () => {
  const {data,setData}=useContext(dataContext);
const del=(id)=>{
    const temp=data.filter(i=>i.id!==id)
    setData(temp)
}
  return (
    <>
        {data.map((i)=>{
    const {id,noteTitle,noteBody,time}=i;
 return <Card style={{ width: '18rem' }} key={id}>
      <Card.Body>
        <Card.Title>{noteTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{time}</Card.Subtitle>
        <Card.Text>
        {noteBody}
        </Card.Text>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <Card.Subtitle ><Link to={`/edit/${id}`}>
        <Button>Edit</Button>
      </Link></Card.Subtitle>
        <Card.Subtitle >
        <Button onClick={()=>del(id)}>Delete</Button>
        </Card.Subtitle>
        </div>
      </Card.Body>
    </Card>
    })
}
</>

)
}

export default Singlenote