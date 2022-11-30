import React, { useState } from 'react';
import CardsData from "./CardsData";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css";
import { useDispatch } from 'react-redux';
import {ADD} from "../Redux/action";



const Cards = () => {
  const [data, setData] =useState(CardsData);
  // console.log(data);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e))
  }

  return (
    <div className='container mt-3'>
        <h2 className='text-center'>Add to Cart Project</h2>
        <div className='row d-flex justify-content-center align-items-center'>
          {
          data.map((e, id) => {
            return (
              <>
              <Card style={{ width: '22rem', border:"none" }} className="mx-2 mt-4 card_style">
                <Card.Img variant="top" src={e.imgdata} style={{height:"16rem"}} className="mt-3"/>
                <Card.Body>
                  <Card.Title>{e.rname}</Card.Title>
                  <Card.Text>
                    Price : <b>₹ {e.price}</b>
                    </Card.Text>
                    <div className='button_div d-flex justify-content-center'>
                    <Button variant="primary" onClick={() => send(e)} className="col-lg-12">Add to Cart</Button>
                    </div>
                    </Card.Body>
                    </Card>
              </>
            )
          })}
        
        </div>
    </div>
  )
}

export default Cards