import {
    css,
    html,
    javascript,
    react,
    npm,
    mysql,
    wordpress,
    unity,
    unreal,
    csharp,
    cpp,
    gimp,
    photoshop,
    git,
    puzzledTime,
    fnaf,
    racing,
    fastBreak,
    blacksmithClicker,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "skills",
        title: "Skills",  
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Unity Developer",
        icon: unity,
    },
    {
        title: "Front End Developer",
        icon: react,
    },
    {
        title: "Backend Developer",
        icon: mysql,
    },
    {
        title: "Graphic Designer",
        icon: gimp,
    },
];

const skills = [
    {
        name: "UNITY",
        percentage: 99,
        icon: unity,
    },
    {
        name: "C#",
        percentage: 90,
        icon: csharp,
    },
    {
        name: "GIT",
        percentage: 80,
        icon: git,
    },
    {
        name: "C++",
        percentage: 75,
        icon: cpp,
    },
    {
        name: "UNREAL ENGINE",
        percentage: 70,
        icon: unreal,
    },
    {
        name: "HTML",
        percentage: 95,
        icon: html,
    },
    {
        name: "CSS",
        percentage: 90,
        icon: css,
    },
    {
        name: "JS",
        percentage: 85,
        icon: javascript,
    },
    {
        name: "WORDPRESS",
        percentage: 85,
        icon: wordpress,
    },
    {
        name: "REACT",
        percentage: 80,
        icon: react,
    },
    {
        name: "My SQL",
        percentage: 75,
        icon: mysql,
    },
    {
        name: "NPM",
        percentage: 70,
        icon: npm,
    },
    {
        name: "PHOTOSHOP",
        percentage: 85,
        icon: photoshop,
    },
    {
        name: "GIMP",
        percentage: 80,
        icon: gimp,
    },
];

const groupProjects = [
    {
        name: "Puzzled Time",
        description: "Puzzled Time is a project that combines elements of a platform, puzzle and adventure game in a steampunk style. Such a combination will force the player to strain his mind and take him on an amazing journey beyond time and space. Playing the role of a young time traveler Iris, we will follow the traces of her life, unravel the mysteries of the past, future and present. Puzzled Time is primarily a great, suspenseful storyline and atmospheric and addictive gameplay.",
        tags: [{
            name: "Group Project",
            color: "blue-text-gradient",
        }, 
        {
            name: "Finished",
            color: "green-text-gradient",
        },        
        {
            name: "2D",
            color: "orange-text-gradient",
        }],
        image: puzzledTime,
        source_code_link: "https://gitlab.com/dmarcinowski/puzzled-time",
        download_link: "https://mega.nz/file/ZE82lAQB#L0C1t8M410LLlWJh6oOIA_cW3hQ3JYqj3VmxJCi1IvE",
        downloadable: true,
    },
    {
        name: "Fast Break",
        description: "In this game you need to find all 5 torn pages of teacher password. Why? Because you just failed your exam and you need to change your grade, but remember you need to be fast!!! Teacher will catch you, so hide when she's coming and then find all torn pages.",
        tags: [{
            name: "Group Project",
            color: "blue-text-gradient",
        },
        {
            name: "Finished",
            color: "green-text-gradient",
        },        
        {
            name: "3D",
            color: "orange-text-gradient",
        }],
        image: fastBreak,
        source_code_link: "https://github.com/voxten/GameJam",
        download_link: "https://github.com/voxten/",
        downloadable: true,
    },
    {
        name: "Lihter",
        description: "More info soon",
        tags: [{
            name: "Group Project",
            color: "blue-text-gradient",
        },
        {
            name: "Unfinished",
            color: "pink-text-gradient",
        },        
        {
            name: "2D",
            color: "orange-text-gradient",
        }],
        image: git,
        source_code_link: "https://github.com/Example-Text-Studio/Lihter",
        download_link: "https://github.com/voxten/",
        downloadable: false,
    },
];

const soloProjects = [{
        name: "Blacksmith Clicker",
        description: "More info soon",
        tags: [{
            name: "Solo Project",
            color: "blue-text-gradient",
        },
        {
            name: "Finished",
            color: "green-text-gradient",
        },
        {
            name: "2D",
            color: "orange-text-gradient",
        }],
        image: blacksmithClicker,
        source_code_link: "https://github.com/voxten/Blacksmith-Clicker",
        download_link: "https://mega.nz/file/ZdlEFbxL#jk05eYrwRJNxgdae75w5WrjYkjW757BPfTCzUnVQMVI",
        downloadable: true,
    },
    {
        name: "Never Room",
        description: "My first big project, making this game since 2019",
        tags: [{
            name: "Solo Project",
            color: "blue-text-gradient",
        },
        {
            name: "Unfinished",
            color: "pink-text-gradient",
        },
        {
            name: "3D",
            color: "orange-text-gradient",
        }],
        image: git,
        source_code_link: "https://github.com/voxten/",
        download_link: "https://github.com/voxten/",
        downloadable: false,
    },
    {
        name: "FNAF Game",
        description: "Fan Game Based on Scott Cawthon's FNAF Games",
        tags: [{
            name: "Solo Project",
            color: "blue-text-gradient",
        },
        {
            name: "Unfinished",
            color: "pink-text-gradient",
        },
        {
            name: "3D",
            color: "orange-text-gradient",
        }],
        image: fnaf,
        source_code_link: "https://github.com/voxten/FNAF-Game",
        download_link: "https://github.com/voxten/",
        downloadable: false,
    },
    {
        name: "Racing Game",
        description: "More info soon",
        tags: [{
            name: "Solo Project",
            color: "blue-text-gradient",
        },
        {
            name: "Unfinished",
            color: "pink-text-gradient",
        },
        {
            name: "3D",
            color: "orange-text-gradient",
        }],
        image: racing,
        source_code_link: "https://github.com/voxten/Racing-Game",
        download_link: "https://mega.nz/file/lEUAARLQ#CG8giPC-FxdlUS-vr6QTgJSSJ0xlHMAtXJerWnjSvNQ",
        downloadable: true,
    },
];

export { services, groupProjects, soloProjects, skills};