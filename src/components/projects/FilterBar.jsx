import React from "react";

const FilterBar = ({ allProjects, selectedTags, setSelectedTags, excludeMode, setExcludeMode }) => {
    const mainTagGroups = {
        Type: ["Solo Project", "Group Project"],
        Status: ["Finished", "Unfinished"],
        Platform: ["2D Game", "3D Game", "Website", "Mobile"]
    };

    const otherGroups = {
        Year: ["2021", "2022", "2023", "2024", "2025"]
    };

    const allTags = Array.from(new Set(allProjects.flatMap(p => p.tags.map(t => t.name))));
    const usedMainTags = new Set(Object.values(mainTagGroups).flat().concat(Object.values(otherGroups).flat()));
    const techTags = allTags.filter(tag => !usedMainTags.has(tag));

    const toggleTag = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const handleDropdownChange = (group, value) => {
        const groupTags = mainTagGroups[group];
        setSelectedTags(prev => {
            const withoutGroup = prev.filter(tag => !groupTags.includes(tag));
            return value ? [...withoutGroup, value] : withoutGroup;
        });
    };

    const getSelectedValue = (group) => {
        const groupTags = mainTagGroups[group];
        return groupTags.find(tag => selectedTags.includes(tag)) || "";
    };

    return (
        <div className="mt-6 flex flex-col gap-3 items-center w-full">
            <div className="flex flex-wrap justify-center gap-4 w-full">
                {Object.entries(mainTagGroups).map(([group, tags]) => (
                    <select
                        key={group}
                        value={getSelectedValue(group)}
                        onChange={(e) => handleDropdownChange(group, e.target.value)}
                        className="px-3 py-1 text-sm rounded border bg-gray-800 text-white border-gray-700 shadow-sm hover:border-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    >
                        <option value="">{group}</option>
                        {tags.map(tag => (
                            <option key={tag} value={tag} className="bg-gray-800">
                                {tag}
                            </option>
                        ))}
                    </select>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 w-full">
                {[...otherGroups.Year, ...techTags].map(tag => (
                    <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded-full border text-sm transition-colors ${
                            selectedTags.includes(tag)
                                ? "bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700"
                                : "bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <button
                onClick={() => setExcludeMode(prev => !prev)}
                className="mt-2 px-4 py-1 text-sm rounded border bg-indigo-600 text-white hover:bg-indigo-700 transition-colors border-indigo-600"
            >
                Filtering: {excludeMode ? "Exclude" : "Include"}
            </button>
        </div>
    );
};

export default FilterBar;