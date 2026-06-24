import React from "react";

const FilterBar = ({ allProjects, selectedTags, setSelectedTags, excludeMode, setExcludeMode }) => {
    const mainTagGroups = {
        Type: ["Solo Project", "Group Project"],
        Status: ["Finished", "Unfinished"],
        Platform: ["2D Game", "3D Game", "Website", "Mobile"]
    };

    const otherGroups = {
        Year: ["2021", "2022", "2023", "2024", "2025", "2026"]
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
        <div className="mt-8 flex flex-col gap-6 items-center w-full max-w-5xl mx-auto p-6 bg-gray-900/40 border border-white/5 backdrop-blur-xl rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)]">

            <div className="flex flex-wrap justify-center xl:justify-between items-center gap-6 w-full border-b border-white/5 pb-6">
                <div className="flex flex-wrap justify-center gap-6">
                    {Object.entries(mainTagGroups).map(([group, tags]) => (
                        <div key={group} className="flex flex-col gap-1.5 min-w-[200px]">
                            <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase px-1">
                                {group}
                            </span>
                            <div className="flex p-1 bg-black/40 rounded-xl border border-white/5 backdrop-blur-sm">
                                <button
                                    onClick={() => handleDropdownChange(group, "")}
                                    className={`flex-1 text-center py-1.5 px-3 text-xs font-medium rounded-lg transition-all duration-200 ${
                                        !getSelectedValue(group)
                                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                                            : "text-gray-400 hover:text-gray-200"
                                    }`}
                                >
                                    All
                                </button>
                                {tags.map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => handleDropdownChange(group, tag)}
                                        className={`flex-1 text-center py-1.5 px-3 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                                            getSelectedValue(group) === tag
                                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                                                : "text-gray-400 hover:text-gray-200"
                                        }`}
                                    >
                                        {tag.split(" ")[0]} {/* Shorten label for space if needed */}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center sm:items-end gap-1.5">
                    <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase px-1">
                        Filter Engine
                    </span>
                    <button
                        onClick={() => setExcludeMode(prev => !prev)}
                        className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-xl border transition-all duration-300 ${
                            excludeMode
                                ? "bg-rose-500/10 text-rose-400 border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.1)] hover:bg-rose-500/20"
                                : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:bg-emerald-500/20"
                        }`}
                    >
                        <span className={`h-2 w-2 rounded-full animate-pulse ${excludeMode ? "bg-rose-400" : "bg-emerald-400"}`} />
                        Mode: {excludeMode ? "Exclude Chosen" : "Match Chosen"}
                    </button>
                </div>
            </div>

            <div className="w-full">
                <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-3 text-center">
                    Filter by Tech & Timeline
                </p>
                <div className="flex flex-wrap justify-center gap-2 max-h-[150px] overflow-y-auto custom-scrollbar p-1">
                    {[...otherGroups.Year, ...techTags].map(tag => {
                        const isSelected = selectedTags.includes(tag);
                        return (
                            <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`px-3 py-1.5 rounded-xl border text-xs font-medium tracking-wide transition-all duration-200 ${
                                    isSelected
                                        ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-transparent shadow-lg shadow-indigo-600/20 scale-105"
                                        : "bg-white/5 text-gray-300 border-white/5 hover:bg-white/10 hover:border-white/10"
                                }`}
                            >
                                {tag}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FilterBar;