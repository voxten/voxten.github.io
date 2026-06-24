import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../utils/wrapper';
import { firestore } from '../firebase';
import { collection, getDocs, query } from 'firebase/firestore';

const ServiceCard = ({ title, icon, index }) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
            whileHover={{ y: -8, scale: 1.02 }}
            className="w-full relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

            <div className="h-full bg-gradient-to-b from-gray-900/90 to-gray-900/40 rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-white/5 backdrop-blur-md shadow-xl transition-all duration-300 group-hover:border-white/10 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] min-h-[180px]">

                <div className="relative p-3 rounded-xl bg-white/5 border border-white/5 mb-4 group-hover:bg-indigo-600/10 group-hover:border-indigo-500/20 transition-all duration-300">
                    <img
                        src={icon}
                        alt={title}
                        className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <h3 className="text-white text-lg font-bold tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
                    {title}
                </h3>
            </div>
        </motion.div>
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
        <div className="max-w-7xl mx-auto px-4">
            <motion.div variants={textVariant()} className="flex flex-col gap-1">
                <span className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase">
                    Introduction
                </span>
                <h2 className="text-white font-extrabold md:text-[56px] sm:text-[46px] text-[36px] tracking-tight">
                    About Me
                </h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-gray-400 text-[16px] md:text-[17px] max-w-3xl leading-[28px] border-l-2 border-indigo-500/30 pl-4 py-1"
            >
                Creating games in Unity is something I aspire to do full-time, no matter what.
                Although it's not my primary occupation, I really enjoy coding clean, interactive web pages.
            </motion.p>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(About, "about");