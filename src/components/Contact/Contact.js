import React from 'react';
import Banner from '../Banner/Banner';
import Button from 'react-bootstrap/Button';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container">
                <h1 className="text-center title my-5">Contact Us</h1>

                <div className="d-flex my-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29185.612906018334!2d90.24822209148728!3d23.882468450830054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e998af65bee5%3A0x51e41cefc20b8fa8!2sJahangirnagar%20University%2C%20Savar%20Union!5e0!3m2!1sen!2sbd!4v1633305375765!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" className="banner-left"></iframe>
                    <div className="banner-right px-5">
                        <textarea className="form-control" placeholder="Write your comment here" id="exampleFormControlTextarea1" rows="7"></textarea>
                        <Button className="btn btn-warning my-4">Send</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;