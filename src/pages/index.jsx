import { Button, Col, Container, Input, Row, Spacer } from '@nextui-org/react';
import { useState } from 'react'
import CardImage from '../components/dataDisplay/Card';

import '../style/divider.css';

const AgregarProducto = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = () =>{
    console.log('Datos que se estan agregando ', id);
  };

  return (
    <Container>
      <Spacer y={2} />
      <Row justify='center' gap={2} >
        <Col>
          <Input labelPlaceholder="id" onChange={(e)=>setId(e.target.value)} />
        </Col>
        <Col>
          <Input labelPlaceholder="Nombre" onChange={(e)=>setNombre(e.target.value)}/>
        </Col>
      </Row>
      <Spacer y={1} />
      <Row>
        <Col>
          <Input labelPlaceholder="precio" onChange={(e)=>setPrecio(e.target.value)}/>
        </Col>
        <Col>
          <Input labelPlaceholder="categoria" onChange={(e)=>setCategoria(e.target.value)}/>
        </Col>
        <Col>
          <Input labelPlaceholder="img" />
        </Col>
      </Row>
      <Spacer y={1} />
      <Row justify='center' >
        <Button onClick={handleSubmit}>
          Agregar
        </Button>
      </Row>
      <div className='divider' />
      <CardImage />
    </Container>
  )
}

export default AgregarProducto;
