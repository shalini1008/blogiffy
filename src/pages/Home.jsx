import React from 'react';
import { Button, Container } from '../components';
import home from "../image/home-page.png";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function Home() {
    const authStatus = useSelector((state) => state.auth.status);

    return (
        <div className="w-full py-10 bg-white">
            <Container>
                <div className="flex flex-col lg:flex-row gap-8 p-5 md:p-15">
                    <div className="text-slate-800 lg:w-2/3 flex flex-col gap-6 mx-auto my-auto">
                        <div className="text-4xl lg:text-7xl font-bold leading-tight">
                            <h1>Welcome to Blogiffy</h1>
                        </div>
                        <div className="text-xl lg:text-2xl leading-relaxed">
                            <p>
                                In today's fast-paced and stressful world, mental health issues are becoming increasingly prevalent. Seeing people around me experiencing high levels of stress makes me feel numb, whether it's my sister, my college friends, or myself struggling with study or job pressure.
                                I envision a platform where people can connect and talk about their problems, and together, we can cope with mental health challenges. Even just knowing that others are experiencing similar struggles can provide comfort and remind us that we're not alone in this journey called life.
                            </p>
                        </div>
                        <div>
                            <Link to={authStatus ? "/all-posts" : "/login"}>
                                <Button bgColor="bg-secondary-color" textColor="text-white" hover="hover:bg-hover-color hover:text-white">
                                    {authStatus ? "View All Posts" : "Get Started"}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="rounded-xl w-64 h-64 md:w-112 md:h-112 lg:w-128 lg:h-128 overflow-hidden mx-auto my-auto">
                        <img src={home} alt="Home" className="w-full h-full object-cover" />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;
