import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

import Nav from 'react-bootstrap/Nav';
import { DELETE } from '../Redux/action';



import Badge, { BadgeProps } from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import {useDispatch, useSelector} from "react-redux";



const Header = () => {

  const [price, setPrice] = useState(0);

  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);

  const dispatch = useDispatch();


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const delt = (id) => {
      dispatch(DELETE(id))
    }

    const total = () => {
      let price = 0;
      getData.map((ele,k) => {
        price = ele.price * ele.qnty + price
      });
      setPrice(price);
    }

    useEffect(() => {
      total()
    }, [total])
  return (
    <>
    <Navbar bg="dark" variant="dark" style={{height:"60px"}}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
          </Nav>
          <Badge badgeContent={getData.length} color="primary"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          <i class="fa fa-shopping-cart text-light" style={{fontSize:25, cursor:"pointer"}} aria-hidden="true" ></i>
          </Badge>
        </Container>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',}}>

              {
                getData.length ? 
                <div className='card_details' style={{width:"24rem",padding:10}}>
                  <Table>
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Restaurant Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        getData.map((ele) => {
                          return (
                            <>
                            <tr>
                              <td>
                                <NavLink to={`/cart/${ele.id}`} onClick={handleClose}>
                                <img src={ele.imgdata} alt=""
                                style={{width:"5rem", heigth:"5rem"}}/>
                                </NavLink>
                              </td>
                              <td>
                                <b><p>{ele.rname}</p>
                                <p>Price : ₹ {ele.price}</p>
                                <p>Quantity : {ele.qnty}</p></b>
                                <p style={{color:"red", fontSize:20, cursor:"pointer"}} onClick={()=>delt(ele.id)}>
                                  <i  className='fas fa-trash smalltrash'
                                  ></i>
                                </p>
                              </td>
                              <td className='mt-5' style={{color:"red", fontSize:20, cursor:"pointer"}} onClick={()=>delt(ele.id)}>
                              <i className='fas fa-trash largetrash'></i>
                              </td>
                            </tr>
                            </>

                          )
                        })
                      }
                      <p className='text-center'>Total : ₹ {price}</p>
                    </tbody>
                  </Table>
                </div> :
                <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem", padding:10, position:"relative"}}>
                <i className='fa fa-close smallclose' style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}
                onClick={handleClose}></i>
                <p style={{fontSize:27}}>Your cart is empty</p>
                <img className='emptycart_img' style={{width:"5rem", padding:10}} src="/images/cart.gif"/>

            </div>
              }
                
                

            </Menu>
      </Navbar>
    </>
  )
}

export default Header