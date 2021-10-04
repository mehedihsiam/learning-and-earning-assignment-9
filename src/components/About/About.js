import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Member from '../Member/Member';
import './About.css'
const About = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        fetch('aboutUs.JSON')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="container">
                <h1 className="text-center title mt-5">About Us</h1>
                <div className="members mt-5">
                    {
                        members.map(member => <Member
                            key={member.key}
                            member={member}
                        ></Member>)
                    }
                </div>
            </div>
        </div>
    );
};

export default About;