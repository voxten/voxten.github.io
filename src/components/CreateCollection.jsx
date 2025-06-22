import React, { useState } from "react";
import { firestore } from "../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../wrapper";

const CreateCollection = () => {
    const [newTag, setNewTag] = useState({
        name: "",
        color: "" // Changed from color picker to text input
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked :
                name === 'id' ? parseInt(value) || 0 : value
        });
    };

    const handleTagInputChange = (e) => {
        const { name, value } = e.target;
        setNewTag({
            ...newTag,
            [name]: value
        });
    };

    const addTag = () => {
        if (newTag.name.trim() === "") return;
        if (newTag.color.trim() === "") {
            setErrorMessage("Tag color is required");
            return;
        }

        setFormData({
            ...formData,
            tags: [...formData.tags, newTag]
        });

        setNewTag({
            name: "",
            color: ""
        });
        setErrorMessage("");
    };

    const removeTag = (index) => {
        const updatedTags = formData.tags.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            tags: updatedTags
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");
        setSuccessMessage("");

        if (!formData.id) {
            setErrorMessage("ID is required");
            setIsSubmitting(false);
            return;
        }

        try {
            // Convert tags array to map for Firestore
            const tagsMap = {};
            formData.tags.forEach((tag, index) => {
                tagsMap[index] = tag;
            });

            const collectionData = {
                ...formData,
                tags: tagsMap,
                download_links: formData.download_links.reduce((acc, link, index) => {
                    acc[index] = link;
                    return acc;
                }, {})
            };
            // Use setDoc with the specified ID
            const docRef = doc(firestore, "projects", formData.id.toString());
            await setDoc(docRef, collectionData);

            setSuccessMessage("Collection created successfully!");
            // Reset form
            setFormData({
                id: "",
                name: "",
                description: "",
                download_link: "",
                downloadable: false,
                image: "",
                tags: [],
                download_links: []
            });
        } catch (error) {
            console.error("Error creating collection:", error);
            setErrorMessage(`Failed to create collection: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Add this to your existing state
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        description: "",
        download_link: "",
        downloadable: false,
        image: "",
        tags: [],
        download_links: [] // Add this line
    });

// Add this state for new download links
    const [newDownloadLink, setNewDownloadLink] = useState({
        version: "",
        date: "",
        url: ""
    });

// Add these handler functions
    const handleDownloadLinkInputChange = (e) => {
        const { name, value } = e.target;
        setNewDownloadLink({
            ...newDownloadLink,
            [name]: value
        });
    };

    const addDownloadLink = () => {
        if (!newDownloadLink.version || !newDownloadLink.url) {
            setErrorMessage("Version and URL are required for download links");
            return;
        }

        setFormData({
            ...formData,
            download_links: [...formData.download_links, newDownloadLink]
        });

        setNewDownloadLink({
            version: "",
            date: "",
            url: ""
        });
        setErrorMessage("");
    };

    const removeDownloadLink = (index) => {
        const updatedLinks = formData.download_links.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            download_links: updatedLinks
        });
    };

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Create New</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Project Collection</h2>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                Create a new project collection with all the required details.
            </motion.p>

            <form onSubmit={handleSubmit} className="mt-8 max-w-3xl mx-auto">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">ID (Number)</label>
                    <input
                        type="number"
                        name="id"
                        value={formData.id}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Image URL</label>
                    <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Download Link</label>
                    <input
                        type="url"
                        name="download_link"
                        value={formData.download_link}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        name="downloadable"
                        checked={formData.downloadable}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-700 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-300">Downloadable</label>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Tags</label>

                    <div className="flex gap-2 mb-2">
                        <input
                            type="text"
                            name="name"
                            value={newTag.name}
                            onChange={handleTagInputChange}
                            placeholder="Tag name"
                            className="flex-1 px-3 py-1 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="text"
                            name="color"
                            value={newTag.color}
                            onChange={handleTagInputChange}
                            placeholder="Color (e.g., #FF0000 or 'red')"
                            className="flex-1 px-3 py-1 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button
                            type="button"
                            onClick={addTag}
                            className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-md text-white"
                        >
                            Add
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {formData.tags.map((tag, index) => (
                            <div
                                key={index}
                                className="flex items-center px-3 py-1 rounded-full text-xs"
                                style={{
                                    backgroundColor: tag.color,
                                    color: 'white'
                                }}
                            >
                                {tag.name}
                                <button
                                    type="button"
                                    onClick={() => removeTag(index)}
                                    className="ml-2 text-xs"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Download Links</label>

                        <div className="space-y-2 mb-2">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                <input
                                    type="text"
                                    name="version"
                                    value={newDownloadLink.version}
                                    onChange={handleDownloadLinkInputChange}
                                    placeholder="Version (e.g., v2.0)"
                                    className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <input
                                    type="text"
                                    name="date"
                                    value={newDownloadLink.date}
                                    onChange={handleDownloadLinkInputChange}
                                    placeholder="Date (e.g., March 2025)"
                                    className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <input
                                    type="url"
                                    name="url"
                                    value={newDownloadLink.url}
                                    onChange={handleDownloadLinkInputChange}
                                    placeholder="Download URL"
                                    className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={addDownloadLink}
                                className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-md text-white"
                            >
                                Add Download Link
                            </button>
                        </div>

                        <div className="space-y-2 mt-2">
                            {formData.download_links.map((link, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center px-3 py-2 bg-gray-800 rounded-md"
                                >
                                    <div>
                                        <span className="font-medium">{link.version}</span>
                                        {link.date && <span className="text-gray-400 ml-2">({link.date})</span>}
                                        <div className="text-sm text-gray-300 truncate">{link.url}</div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeDownloadLink(index)}
                                        className="text-red-400 hover:text-red-300"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {successMessage && (
                    <div className="mb-4 p-3 bg-green-800 text-green-200 rounded-md">
                        {successMessage}
                    </div>
                )}

                {errorMessage && (
                    <div className="mb-4 p-3 bg-red-800 text-red-200 rounded-md">
                        {errorMessage}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Creating..." : "Create Collection"}
                </button>
            </form>
        </>
    );
};

export default SectionWrapper(CreateCollection, "create-collection");