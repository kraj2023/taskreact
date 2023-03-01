import React from 'react';
import logo from '../images/logo1.png';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg'
import download from '../images/download.png';
// import { BiCode } from 'react-bootstrap-icon';


const Website = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a href='http://www.excellentsoftwares.com/'><img src={logo} width="150px" height="50px"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">                          
                         {
                            [{Home:"href=https://www.flipkart.com/?affid=siteplug&affExtParam1=93fb6e370bde7ca6a391eac27388721d"},'About Us','Contact Us','Gallery'].map((o)=>(
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" >{o}</a>
                                </li>
                            ))
                         }

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic4} className="d-block w-100" alt="..." height="600px" />
                    </div>
                    <div className="carousel-item">
                        <img src={pic2} className="d-block w-100" alt="..." height="600px" />
                    </div>
                    <div className="carousel-item">
                        <img src={pic3} className="d-block w-100" alt="..." height="600px" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='container-fluid bg-white'>
                <div className='row'>
                    <div className='col-10'>
                        <h3 className='display-6 text-center mt-5 mb-5' style={{ marginLeft: "170px" }}>
                            Excellent Softwares is into providing customized business solutions to every business needs.<br></br>  Established in 2002 and located at Delhi.
                        </h3>
                    </div>
                </div>
            </div>

            <div className='row justify-content-evenly bg-white text-center'>
                <div className='col-md-3'>
                    <h1></h1>
                    <h5>Built for Developers</h5>
                    <p> Excellent Softwares is into providing customized business solutions to every business needs.Established in 2002 and located at Delhi.</p>
                </div>
                <div className='col-md-3'>
                    <h1><i class="bi bi-code"></i></h1>
                    <h5>Built for Developers</h5>
                    <p> Excellent Softwares is into providing customized business solutions to every business needs.Established in 2002 and located at Delhi.</p>
                </div>
                <div className='col-md-3'>
                    <h1><i class="bi bi-code"></i></h1>
                    <h5>Built for Developers</h5>
                    <p> Excellent Softwares is into providing customized business solutions to every business needs.Established in 2002 and located at Delhi.</p>
                </div>
            </div>

            <div className='row justify-content-evenly bg-white py-4'>
                <div className='col-md-5'>
                    <img src={pic1}></img>
                </div>
                <div className='col-md-5'>
                    <img src={download} width="585px" height="337px"></img>
                </div>


                <div className='row  justify-content-evenly'>
                    <div className='col-md-10'>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-5'></div>
                    <div className='col-sm-5'></div>
                </div>

                <div className="footer bg-dark text-white p-4 mt-5 text-center">
                    2023@excellentsoftwares
                </div>
            </div>
        </>
    )
}

export default Website;