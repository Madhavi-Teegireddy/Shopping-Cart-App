import React, { useEffect, useState } from 'react';
import Table from "react-bootstrap/Table";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';




const CardsDetails = () => {

  const [data, setData] = useState([]);


  const {id} = useParams();
  // console.log(id)

  const getData = useSelector((state) => state.cartReducer.carts);
  // console.log(getData);

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id
    });
    setData(compareData)
  };

  useEffect(() => {
    compare();
  }, [id])

  return (
    <>
    <div className='container mt-2'>
      <h2 className='text-center'>Items Details Page</h2>

      <section className='container mt-3'>
        <div className='iteamsdetails'>
          {
            data.map((ele) => {
              return (
                <>
                <div className='items_img'>
            <img src={ele.imgdata} alt=""/>
          </div>

          <div className='details'>
            <Table>
              <tr>
                <td>
                  <p><b>Restaurant </b>: {ele.rname}</p>
                  <p><b>Price </b>: ₹{ele.price}</p>
                  <p><b>Dishes </b>: {ele.address}</p>
                  <p><b>Total </b>: ₹{ele.price} </p>
                </td>
                <td>
                  <p><strong>Rating : </strong><span style={{background:"green", color:"#fff", padding:"2px 5px", borderRadius:"5px"}}>{ele.rating} ★</span></p>
                  <p><strong>Order Review : </strong><span >{ele.somedata}</span></p>
                  <p><strong>Remove : </strong><span ><i style={{color:"red", fontSize:20, cursor:"pointer"}} className='fas fa-trash'></i></span></p>
                </td>
              </tr>
            </Table>

          </div>
                
                </>
              )
            })
          }
          
          </div>
      </section>
    </div>

    </>
  )
}

export default CardsDetails