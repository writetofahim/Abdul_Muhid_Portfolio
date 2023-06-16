import React from 'react';
import c1 from "../../assets/image/cert1.jpg";
import c2 from "../../assets/image/cert2.jpg";
import abdul from "../../assets/image/abdul.png";

const About = () => {
    const services = [
        {
            title: "Bookkeeping",
            description: "Accurate and organized bookkeeping services to track your financial transactions.",
            icon: "icon-bookkeeping"
        },
        {
            title: "Tax Preparation",
            description: "Comprehensive tax preparation and filing services to ensure compliance and maximize deductions.",
            icon: "icon-tax"
        },
        {
            title: "Financial Planning",
            description: "Personalized financial planning solutions to help you achieve your financial goals.",
            icon: "icon-planning"
        },
        {
            title: "Audit Support",
            description: "Expert assistance and guidance during audits to ensure accurate representation of your financial records.",
            icon: "icon-audit"
        },
        {
            title: "Payroll Services",
            description: "Efficient and reliable payroll services to streamline your payroll process and ensure compliance.",
            icon: "icon-payroll"
        }
    ];

    const imageGallery = [
        "/path/to/image1.jpg",
        "/path/to/image2.jpg",
        "/path/to/image3.jpg"
        // Add more image paths here
    ];

    return (
        <div className="w-full">
            <div className="container mx-auto">
                {/* Top Section */}
                <div className="mt-6 w-full flex flex-col md:flex-row items-center justify-evenly">
                    <div className="left f-1">
                        <h1 className="text-6xl italic text-primary font-bold">About Me</h1>

                    </div>
                    <div className="right f-1">
                        <img src={abdul} alt="Abdul Muhit's Image" />
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="mt-[100px]">
                    <h2 className="text-3xl md:text-6xl font-bold italic text-center">My Certifications</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-5 items-center mt-10">
                        <div className="w-full md:w-1/3 certification-card p-5 border hover:shadow-xl rounded-lg">
                            <div className="certification-card-inner text-center">
                                <img src={c1} alt="Certificate 1" className="object-contain h-96 w-96" />
                                <p className="text-center text-lg mt-4">CERTIFICATE IN IMMIGRATION LAW AND PRACTICE</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 certification-card p-5 border hover:shadow-xl rounded-lg">
                            <div className="certification-card-inner text-center">
                                <img src={c2} alt="Certificate 1" className="object-contain h-96 w-96" />
                                <p className="text-center text-lg mt-4">RECOGNISED AS COMPLIANT WITH THE AIA PUBLIC PRACTICE REGULATIONS AND REPUBLIC OF IRELAND</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mt-[100px]">
                    <h2 className="text-3xl md:text-6xl font-bold italic text-center">My Services</h2>

                    <div className="my-5 flex gap-5 justify-center flex-wrap">
                        {services.map((service, index) => (
                            <div key={index} className="w-full md:w-1/4 service-card bg-white rounded-lg shadow p-6 flex items-center hover:bg-gray-100 hover:shadow-lg border">
                                <div className="service-icon bg-primary text-white flex items-center justify-center rounded-full w-12 h-12 mr-4">
                                    <span className={service.icon}></span>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">{service.title}</h4>
                                    <p className="text-gray-700">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Gallery Section
                <div className="mt-10">
                    <h2 className="text-6xl text-center">Image Gallery</h2>
                    <div className="grid grid-cols-3 gap-4 mt-10">
                        {imageGallery.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Gallery Image ${index + 1}`}
                                className="object-cover w-full h-48 md:h-64 rounded-lg"
                            />
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default About;
