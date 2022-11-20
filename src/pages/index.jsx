import { Button, Col, Container, Grid, Input, Row, Spacer } from '@nextui-org/react';
import { useState } from 'react'
import CardImage from '../components/dataDisplay/Card';

import '../style/divider.css';

const AgregarProducto = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [file, setFile] = useState('Ningun archivo seleccionado');

  const handleSubmit = () =>{
    console.log('Datos que se estan agregando ', id);
  };

  const handleFile = async ({target}) =>{
    
    const reader = new FileReader();

    reader.onload = ev => {
      console.log('Data = >', ev.target.result);
      setFile(ev.target.result);
    }


    reader.readAsDataURL(target.files[0]);
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
          <Row>
            {/* <Button light auto onClick={handleFile}>examinar</Button>
            <Input labelPlaceholder="img" value={file} /> */}
            <input type='file' onChange={handleFile} accept="image/*" />
          </Row>
        </Col>
      </Row>
      <Spacer y={1} />
      <Row justify='center' >
        <Button onClick={handleSubmit}>
          Agregar
        </Button>
      </Row>
      <div className='divider' />
      <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={3}>
        <CardImage id='1' title='example title' src={file} />
      </Grid>
      <Grid xs={12} sm={3}>
        <CardImage id='1' title='example title' />
      </Grid>
      <Grid xs={12} sm={3}>
        <CardImage id='1' title='example title' />
      </Grid>
      <Grid xs={12} sm={3}>
        <CardImage id='1' title='example title' />
      </Grid>
      <Grid xs={12} sm={3}>
        <CardImage id='1' title='example title' />
      </Grid>
    </Grid.Container>
      
    </Container>
  )
}

export default AgregarProducto;
