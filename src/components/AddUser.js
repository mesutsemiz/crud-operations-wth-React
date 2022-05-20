import React ,{useState,useContext} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState  ';
import{v4 as uuid} from 'uuid';
import { Link, useHistory } from 'react-router-dom';

export const AddUser = () => {
  const [name, setName] = useState("");
  const {addUser} = useContext(GlobalContext)
  const history = useHistory()

  const onSubmit=()=>{
    const newUser={
      id:(uuid),
      name:name
    }
    addUser(newUser)
    history.push("/")
  }

  const onChange=(e)=>{
    setName(e.target.value)

  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          placeholder="EnterName"
          style={{ width: '80%' }}
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger m-2">
        Cancel
      </Link>
    </Form>
  );
};
