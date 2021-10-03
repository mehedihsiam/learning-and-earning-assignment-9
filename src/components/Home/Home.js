import Button from '@restart/ui/esm/Button';
import CoursesHome from '../CoursesHome/CoursesHome';
import './Home.css';
import img2 from "./img/boy.jpg"
const Home = () => {
    return (
        <div>

            <div className="container py-5 d-flex">
                <div className="banner-left">
                    <img src={img2} alt="" />
                </div>
                <div className="banner-right">
                    <h1 className="mt-5">Start Learning for Your Self</h1>
                    <p className="motivation">You must be skilled to live in the 21 cetury. This is time is the time of skills. Every skilled person can live Happyly. If you have skills, you can earn. But before earning, you must be skilled.
                        Remember, dos'nt die any skilled person for Lack of food.</p>
                    <Button className="rounded-pill btn btn-outline-warning">Read More</Button>
                </div>
            </div>
            <CoursesHome></CoursesHome>
        </div>
    );
};

export default Home;