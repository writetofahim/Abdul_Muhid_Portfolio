import React from 'react';

const Services = () => {
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
    return (
        <div className="container mx-auto">
            <div className="mt-[100px]">
                <h2 className="text-3xl md:text-6xl font-bold italic text-center">My Services</h2>
                <p></p>

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
        </div>
    );
};

export default Services;