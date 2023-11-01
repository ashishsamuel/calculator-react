import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [result, setResult] = useState('');
    const [input, setInput] = useState('');
    const operators = ['.','+','-','/','*']

    const getValue = (value) => {

      try{  
      if (value != '' || value !='DEL') {
          const inputArray = input.split('')
          if(!(inputArray.includes(value)&&operators.includes(value)) && value != input.slice(0,-1)){
            setInput(input + value.toString())
          }

          if(operators.includes(value)&& result!=''){
            setInput(result + value.toString())
            setResult('')
          }            
      }

      if (value === '=') {
          setResult(eval(input).toString())
      }else if(value === 'C'){
        setInput('')
        setResult('')
      }else if(value === 'DEL'){
        setInput(input.slice(0,-1))
        setResult('')
      }
      
      if(result!='' && (value === "00" || value === "0")){
        setInput('')
        setResult('')
      }
    }catch{
      setInput('')
      setResult('Invalid Expression')
    }
    }
  return (
    <>
      <div className='d-flex justify-content-center align-items-center flex-column m-auto'>
        <div className='m-5'>
          <h3>Calculator</h3>
        </div>
        <div className='bg-info border rounded mt-2 p-5'>
            <div className='bg-dark p-3'>
                <span className='p-2'>{input}</span>
                {result !='' && <span>{result}</span>
                }
            </div>
            <Row className='mt-2'>
            <Col>
              <Button className='m-1 bg-danger btn-hoverstyle' variant="contained" onClick={() => getValue('C')} >C</Button>
              <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('DEL')} >DEL</Button>
              <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('.')} >.</Button>
              <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('/')} >/</Button>
            </Col>
            </Row>
            <Row> 
           <Col>
              <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('7')} >7</Button>
              <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('8')} >8</Button>
              <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('9')} >9</Button>
              <Button className='m-1 bg-dark btn-hoverstyle'variant="contained" onClick={() => getValue('*')} >*</Button>
           </Col>
            </Row>
            <Row>
            <Col>
              <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('4')} >4</Button>
              <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('5')} >5</Button>
              <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('6')} >6</Button>
              <Button className='m-1 bg-dark btn-hoverstyle'variant="contained" onClick={() => getValue('-')} >-</Button>
            </Col>
            </Row>
            <Row>
            <Col>
              <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('1')} >1</Button>
              <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('2')} >2</Button>
              <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('3')} >3</Button>
              <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('+')} >+</Button>
            </Col>
            </Row>
            <Row>
           
              <Col>
                <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('00')} >00</Button>
                <Button className='m-1 bg-dark btn-hoverstyle' variant="contained" onClick={() => getValue('0')} >0</Button>
                <Button className='m-1 bg-warning btn-hoverstyle' style={{width:'140px'}} variant="contained" onClick={() => getValue('=')} >=</Button>
              </Col>
              
           </Row>
          </div>
      </div>
     
    </>
  );
}

export default App;
