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
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-start overflow-y-auto z-[9999] p-4 pt-10 pb-10 custom-scrollbar"
                >
                    <div className="absolute inset-0" onClick={onClose} />

                    <motion.div
                        initial={{ scale: 0.97, y: 15 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.97, y: 15 }}
                        className="bg-gray-900/90 border border-white/10 backdrop-blur-2xl rounded-2xl p-6 md:p-8 w-full max-w-4xl relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] z-[90] my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 h-9 w-9 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">{project.name}</h2>
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {project.tags?.map((tag) => (
                                        <span
                                            key={tag.name}
                                            className="text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-md bg-white/5 text-indigo-300 border border-indigo-500/10"
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.description && (
                                <p className="text-gray-300 text-sm leading-relaxed max-w-3xl border-l-2 border-indigo-500 pl-4 py-0.5 bg-indigo-500/5 rounded-r-lg">
                                    {project.description}
                                </p>
                            )}

                            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/40 border border-white/5 shadow-2xl">
                                <img
                                    src={project.image}
                                    alt={`${project.name} main preview`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* CTAs/Downloads Layout */}
                            {project.isWebsite ? (
                                project.preview_link && (
                                    <div className="space-y-2">
                                        <a
                                            href={project.preview_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-emerald-900/20 w-full"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            <span>Launch Live Website</span>
                                        </a>
                                    </div>
                                )
                            ) : (
                                (project.downloadable || project.download_links) && (
                                    <div className="space-y-3">
                                        {project.downloadable && project.download_link && (
                                            <a
                                                href={project.download_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-indigo-900/20 w-full"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                <span>Download Latest Production Build</span>
                                            </a>
                                        )}

                                        {project.download_links && Object.values(project.download_links).length > 0 && (
                                            <div className="grid gap-2">
                                                {Object.values(project.download_links)
                                                    .sort((a, b) => new Date(b.date?.toDate?.() || b.date) - new Date(a.date?.toDate?.() || a.date))
                                                    .map((link, index) => (
                                                        <a
                                                            key={index}
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex justify-between items-center px-4 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/5 transition-all duration-200 w-full"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                <span className="font-semibold text-sm text-gray-200">{link.version || `Version ${index + 1}`}</span>
                                                            </div>
                                                            <span className="text-gray-400 text-xs tracking-wider">
                                                                {formatDate(link.date)}
                                                            </span>
                                                        </a>
                                                    ))}
                                            </div>
                                        )}
                                    </div>
                                )
                            )}

                            {/* Gallery Section */}
                            {loading ? (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="aspect-square bg-white/5 rounded-xl animate-pulse border border-white/5" />
                                    ))}
                                </div>
                            ) : gallery.length > 0 && (
                                <div className="pt-4 border-t border-white/5">
                                    <h3 className="text-base font-bold tracking-wider uppercase text-gray-400 mb-3">Project Showcase Gallery</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {gallery.map((img) => (
                                            <div
                                                key={img}
                                                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer border border-white/5 bg-black/20"
                                                onClick={() => setFullscreenIndex(gallery.indexOf(img))}
                                            >
                                                <img
                                                    src={img}
                                                    alt="Project screenshot"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                                />
                                                <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <div className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white text-xs scale-90 group-hover:scale-100 transition-transform duration-300">
                                                        🔍 View Fullscreen
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                {fullscreenIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-[10000] flex flex-col items-center justify-center p-4"
                        onClick={closeFullscreen}
                    >
                        <button
                            onClick={closeFullscreen}
                            className="absolute top-6 right-6 h-11 w-11 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all text-base z-[10010]"
                            aria-label="Close fullscreen"
                        >
                            ✕
                        </button>

                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={gallery[fullscreenIndex]}
                                alt={`Fullscreen ${fullscreenIndex + 1}`}
                                className="max-h-full max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                            />

                            {/* Left Navigation */}
                            <button
                                onClick={showPrev}
                                className="absolute left-4 h-12 w-12 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white text-3xl hover:bg-black/70 transition"
                                aria-label="Previous image"
                            >
                                ‹
                            </button>
                            {/* Right Navigation */}
                            <button
                                onClick={showNext}
                                className="absolute right-4 h-12 w-12 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white text-3xl hover:bg-black/70 transition"
                                aria-label="Next image"
                            >
                                ›
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectModal;