import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import menu from "@mui/material/Menu";



import Badge, { BadgeProps } from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';



const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <>
    <Navbar bg="dark" variant="dark" style={{height:"60px"}}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
          </Nav>
          <Badge badgeContent={4} color="primary"
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
                
                <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem", padding:10, position:"relative"}}>
                    <i className='fa fa-close smallclose' style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}
                    onClick={handleClose}></i>
                    <p style={{fontSize:27}}>Your cart is empty</p>
                    <img className='emptycart_img' style={{width:"5rem", padding:10}} src="/images/cart.gif"/>

                </div>

            </Menu>
      </Navbar>
    </>
  )
}

export default Header