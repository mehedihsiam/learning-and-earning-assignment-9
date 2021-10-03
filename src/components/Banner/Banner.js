import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import img from "./img/graphic.png"

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className="container py-5">
                    <div className="d-flex">
                        <div className="banner-left pt-5">
                            <p className="welcoming">Welcome to</p>
                            <p className="welcoming dfr-color-a fw-bold">LNE Tutorials</p>
                            <p className="text-color-a banner-desc fw-light">Take a course with us. We will make you succeed.We have a lot of expert and world class trainer for each and ecvery course.</p>
                            <Button className="btn btn-outline-warning rounded-pill">
                                <Link className="px-4 dtn-txt" to='/courses'>View Our Courses</Link>
                            </Button>
                        </div>
                        <div className="banner-right pt-5">
                            <img src={img} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;