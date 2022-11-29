import React from 'react';
import Table from "react-bootstrap/Table";


const CardsDetails = () => {
  return (
    <>
    <div className='container mt-2'>
      <h2 className='text-center'>Items Details Page</h2>

      <section className='container mt-3'>
        <div className='iteamsdetails'>
          <div className='items_img'>
            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg" alt=""/>
          </div>

          <div className='details'>
            <Table>
              <tr>
                <td>
                  <p><b>Restaurant </b>: Masala</p>
                  <p><b>Price </b>: 300</p>
                  <p><b>Dishes </b>: Masala, inidikjk</p>
                  <p><b>Total </b>: ₹ 300</p>
                </td>
                <td>
                  <p><strong>Rating : </strong><span style={{background:"green", color:"#fff", padding:"2px 5px", borderRadius:"5px"}}>3.5 ★</span></p>
                  <p><strong>Order Review : </strong><span >1175 + order placed from here recently</span></p>
                  <p><strong>Remove : </strong><span ><i style={{color:"red", fontSize:20, cursor:"pointer"}} className='fas fa-trash'></i></span></p>
                </td>
              </tr>
            </Table>

          </div>
        </div>

      </section>
    </div>

    </>
  )
}

export default CardsDetails