import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
function Testimonial () {
    let history = useHistory();
    const [testimonialList, settestimonialList] = useState()
    useEffect( () => {
        axios.get(
          'http://localhost:8080/api/testimonails-list',
        )
      .then(res => {
        settestimonialList(res.data.data)
        
        }).catch(error => {
            console.log('There was an error!', error);
        });
    },[]);

    const deleteTest = (id) => {
       
        axios.post(`http://localhost:8080/api/delete-testiomonals`,
            { id }
        )
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("Testiomonals Deleted Successfull!!")
            }).catch(error => {
                console.error('There was an error!', error);
               
            });
    }

    const EditTest = (id) => {
       history.push('/edit-testimonials');
    }

    
    const handlerTestimonial =()=>{
        return testimonialList && testimonialList.map((testimonial,index)=>{
            return <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="single-pricing mt-40">
                <img data={testimonial.photo.data} alt="baloon"/><hr></hr>
                <div className="pricing-header">
                    <h5>{testimonial.name}</h5>
                </div>
                <div className="pricing-list">
                    <p>{testimonial.description}</p> 
                </div>
                <div className="pricing-list">
                    <p>Posted By/Date : {testimonial.post}/{testimonial.createdAt}</p> 
                </div>
                <div className="pricing-btn ">
                    <a className="main-btn text-left" href="#" onClick={()=>EditTest(testimonial.id)}>Edit</a>
                    <a className="main-btn" style={{float: "right"}} href="#" onClick={()=>deleteTest(testimonial.id)}>Delete</a>
                </div>
                <div className="buttom-shape">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 112.35"><defs ></defs><title>bottom-part1</title><g id="bottom-part"><g id="Group_747" data-name="Group 747"><path id="Path_294" data-name="Path 294" className="cls-1 color-1" d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z" transform="translate(0 0)"/><path id="Path_297" data-name="Path 297" className="cls-2 color-1" d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z" transform="translate(0 0)"/><path id="Path_296" data-name="Path 296" className="cls-3 color-1" d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z" transform="translate(0 0)"/><path id="Path_295" data-name="Path 295" className="cls-4 color-1" d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z" transform="translate(0 0)"/></g></g></svg>
                </div>
            </div> 
        </div>
           })
    }
    return(
        <div>
        <section id="pricing" className="pricing-area">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title text-center pb-10">
                        <h4 className="title">Testimonials</h4>
                    </div> 
                </div>
            </div> 
            <div className="row justify-content-center">
                {handlerTestimonial()}
            </div>
        </div> 
    </section>
        </div>
        );

}

export default Testimonial;