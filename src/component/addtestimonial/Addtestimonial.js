import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
function Addtestimonial () {
    const [testimonialInfo, setTestimonialInfo] = useState()
    let history = useHistory();

    const handleButton = () => {
        const data = testimonialInfo
        const formData = new FormData();
        for (const [key, value] of Object.entries(testimonialInfo)) {
            console.log(`${key}: ${value}`);
            formData.append(key,value);
          }
          
        
        axios.post(`http://localhost:8080/api/add`,
            formData 
        )
            .then(res => {
                console.log(res);
                console.log(res.data);
                // store the user in localStorage
                alert("Testimonails add Successfull!!")
                history.push('/testimonial');
            }).catch(error => {
                console.error('There was an error!', error);
                
            });


    }

    const onFileChange = event => {
        const file = event.target.files[0]
        
        const name = 'uploadfile'
        setTestimonialInfo({
            ...testimonialInfo,
            [name]: file
        });
    }
    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setTestimonialInfo({
            ...testimonialInfo,
            [name]: value
        });
    }

    

    return(
        <div>
            <section id="contact" className="contact-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center pb-10">
                                <h4 className="title">Add Testimonial</h4>
                            </div> 
                        </div>
                    </div> 
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form">
                                
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="file" name="uploadfile" className="form-control" onChange={(event) => onFileChange(event)} required="required"/>
                                            </div> 
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" name="name" className="form-control" placeholder="Testimonials Titile" onChange={(event) => handleOnChange(event)} required="required"/>
                                            </div> 
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" name="post" className="form-control" placeholder="Post" onChange={(event) => handleOnChange(event)} required="required"/>
                                            </div> 
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea placeholder="Your Testimonials" className="form-control" name="description" onChange={(event) => handleOnChange(event)} required="required"></textarea>
                                            </div> 
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <select name="active" className="form-control" onChange={(event) => handleOnChange(event)}>
                                                    <option value="">Please Select</option>
                                                    <option value="1">Yes</option>
                                                    <option value="0">No</option>
                                                </select>
                                            </div> 
                                        </div>
                                        
                                        
                                        <p className="form-message"></p>
                                        <div className="col-md-12">
                                            <div className="single-form form-group text-center">
                                                <button type="submit" className="main-btn" onClick={handleButton}>Add Testimonial</button>
                                            </div> 
                                        </div>
                                    </div> 
                                
                            </div> 
                        </div>
                    </div> 
                </div> 
            </section>
        </div>
    );
}

export default Addtestimonial;