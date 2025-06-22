import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../wrapper';
import { firestore } from '../firebase';
import { collection, getDocs, query } from 'firebase/firestore';

const ServiceCard = ({ title, icon, index }) => {
    return (
        <div className="xs:w-[100%] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full p-[1px] rounded-[20px]"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </div>
    );
};

const About = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const servicesQuery = query(collection(firestore, 'aboutServices'));
                const servicesSnapshot = await getDocs(servicesQuery);
                const servicesData = servicesSnapshot.docs.map(doc => doc.data());
                setServices(servicesData);
            } catch (error) {
                console.error("Error fetching services: ", error);
            }
        };

        fetchServices();
    }, []);

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    Introduction
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">About Me</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Creating games in Unity is something I aspire to do full-time, no matter what. Although it's not my primary occupation, I really enjoy coding web pages.
            </motion.p>

            <div className="mt-20 gap-5 flex flex-wrap">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
