import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase.js";
import { AnimatePresence, motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fullscreenIndex, setFullscreenIndex] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const imgRef = collection(firestore, `projects/${project.id}/images`);
                const snapshot = await getDocs(imgRef);
                const imgs = snapshot.docs.map((doc) => doc.data().url);
                setGallery(imgs);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [project]);

    const closeFullscreen = () => setFullscreenIndex(null);
    const showPrev = () => setFullscreenIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    const showNext = () => setFullscreenIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));

    const formatDate = (date) => {
        if (date?.toDate) {
            return new Date(date.toDate()).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
            });
        }
        return date || '';
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-start z-[9999]"
            >
                <div className="absolute inset-0" onClick={onClose} />

                <motion.div
                    initial={{ scale: 0.95, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 20 }}
                    className="bg-tertiary rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl z-[90] mt-10"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                        aria-label="Close modal"
                    >
                        ✕
                    </button>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white">{project.name}</h2>

                        <div className="flex flex-wrap gap-2 text-sm mt-2">
                            {project.tags?.map((tag) => (
                                <span
                                    key={tag.name}
                                    className={`${tag.color} text-xs px-2 py-1 rounded-full`}
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>

                        {project.description && (
                            <p className="text-gray-300">{project.description}</p>
                        )}

                        <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img
                                src={project.image}
                                alt={`${project.name} main preview`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Preview or Download Section */}
                        {project.isWebsite ? (
                            project.preview_link && (
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold text-white">Preview</h3>
                                    <a
                                        href={project.preview_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition w-full"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h16M4 10h16M4 14h16M4 18h16"
                                            />
                                        </svg>
                                        <span>Visit Website</span>
                                    </a>
                                </div>
                            )
                        ) : (
                            (project.downloadable || project.download_links) && (
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold text-white">Downloads</h3>

                                    {project.downloadable && project.download_link && (
                                        <a
                                            href={project.download_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition w-full"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                />
                                            </svg>
                                            <span>Download Latest Version</span>
                                        </a>
                                    )}

                                    {project.download_links && Object.values(project.download_links).length > 0 && (
                                        <div className="space-y-2">
                                            {Object.values(project.download_links)
                                                .sort((a, b) => new Date(b.date?.toDate?.() || b.date) - new Date(a.date?.toDate?.() || a.date))
                                                .map((link, index) => (
                                                    <a
                                                        key={index}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex justify-between items-center px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition w-full"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-5 w-5 text-indigo-400"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                                />
                                                            </svg>
                                                            <span className="font-medium">{link.version || `Version ${index + 1}`}</span>
                                                        </div>
                                                        <span className="text-gray-400 text-sm">
                                    {formatDate(link.date)}
                                </span>
                                                    </a>
                                                ))}
                                        </div>
                                    )}
                                </div>
                            )
                        )}


                        {loading ? (
                            <div className="grid grid-cols-3 gap-4">
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="h-32 bg-gray-800 rounded-lg animate-pulse"
                                    ></div>
                                ))}
                            </div>
                        ) : gallery.length > 0 && (
                            <>
                                <h3 className="text-xl font-semibold text-white mt-6">Gallery</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {gallery.map((img) => (
                                        <div
                                            key={img}
                                            className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                                            onClick={() => setFullscreenIndex(gallery.indexOf(img))}
                                        >
                                            <img
                                                src={img}
                                                alt="Project screenshot"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>

                {/* Fullscreen Gallery */}
                <AnimatePresence>
                    {fullscreenIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 z-[90] flex justify-center items-start pt-16"
                            onClick={closeFullscreen}
                        >
                            <motion.div
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.95 }}
                                className="relative w-full h-full max-w-6xl max-h-[95vh] flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={gallery[fullscreenIndex]}
                                    alt={`Fullscreen ${fullscreenIndex + 1}`}
                                    className="max-h-full max-w-full object-contain rounded-lg"
                                />

                                <button
                                    onClick={closeFullscreen}
                                    className="absolute top-4 right-4 text-white text-3xl hover:opacity-75"
                                    aria-label="Close fullscreen"
                                >
                                    ✕
                                </button>
                                <button
                                    onClick={showPrev}
                                    className="absolute left-4 text-white text-4xl hover:opacity-75"
                                    aria-label="Previous image"
                                >
                                    ‹
                                </button>
                                <button
                                    onClick={showNext}
                                    className="absolute right-4 text-white text-4xl hover:opacity-75"
                                    aria-label="Next image"
                                >
                                    ›
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;