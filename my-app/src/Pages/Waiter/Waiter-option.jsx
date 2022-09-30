import React from 'react';
import { Navbar } from '../../Components/navbar/Navbar.jsx';
import add from '../../Pictures/add.png';
import waiter from '../../Pictures/waiter-serving.png';
import Footer from '../../Components/footer/Footer.jsx'
import './Waiter.css'



export function Waiter() {

    
    return (
        <>
            <Navbar />
            <div className='container'>
                <button className='btn-add' >
                <img className='img-add' src={add}   />
                    <span className='textN'>New order</span>
                </button>
                <button className='btn-waiter' >
                <img  className='img-waiter' src={waiter}/>
                    <span className='textA'>Active orders</span>  
                </button>
            </div>
            <Footer />

        </>
    )
}

