export interface Song {
  albumImageUrl: string,
  artist: string,
  songUrl: string,
  title: string,
}


export interface Project {
  title: string,
  liner: string,
  description: string,
  images: string[],
  link: string,
  languages: string[]
}

export interface WorkExperience {
  company: string,
  startDate: string,
  endDate: string,
  position: string,
  location: string,
  description: string,
  imageUrl: string
}

export const projects: Project[] = [
  {
    title: 'BitBlit API',
    liner: 'A 2D graphics API library created in C++ for creating dynamic visual content.',
    description: 'A 2D graphics API library created in C++ for creating dynamic visual content. It supports a wide array of shapes including circles, parallelograms, and complex polygons, with advanced features such as customizable shaders for textures, gradients, and colors. Key functionalities include multiple tiling modes, transformation capabilities using linear algebra, and various blend modes for creative pixel manipulation.',
    images: [],
    link: 'https://github.com/milesreng/bitblit-api',
    languages: ['cplusplus']
  }, {
    title: 'Scholarly',
    liner: 'A full-stack web application aimed at enhancing collaboration on research projects for students at Duke University.',
    description: 'I created Scholarly to enhance how the Duke community collaborates on research projects. I challenged myself to develop this full-stack web application in the hopes that I could both learn a new web framework (Vue) and create a tool to streamline the management of academic research tasks.\nI used MongoDB to securely store and query project data, with Express.js to handle the backend API server. I designed the frontend with Vue.js, creating a responsive and engaging user interface. I also utilized Docker and Kubernetes to host my project within a cluster.\n I implemented OpenID Connect (OIDC) for authorization with Gitlab OAuth2.0 for user authentication. Once users have securely logged in, they can create research projects, allowing them to collaborate with teams and manage tasks efficiently. I designed the task management system to enable users to assign tasks to team members and update the task\'s status.',
    images: [],
    link: 'https://github.com/milesreng/scholarly',
    languages: ['typescript', 'vuejs', 'docker', 'mongodb']
  }, {
    title: 'CS330 Case Study',
    liner: 'A collaborative deep-dive into the algorithmic efficiency of passenger-to-driver matching on NYC app data.',
    description: 'A collaborative deep-dive into the algorithmic efficiency of passenger-to-driver matching on NYC app data. Leveraged advanced data structures and algorithms such as an A* heuristic to achieve more efficient travel times and kd-trees to optimize spatial queries.',
    images: [],
    link: '',
    languages: ['python', 'r']
  }, {
    title: 'Statify for Spotify',
    liner: 'A web app that allows users to authenticate through the Spotify API and view a summary of their favorite tracks, artists, and genres.',
    description: '',
    images: [],
    link: '',
    languages: ['react', 'javascript']
  }, {
    title: 'Pantry Pal',
    liner: 'A recipe sharing platform where users can browse, upload, and rate recipes. Includes features for meal planning and grocery list generation.',
    description: '',
    images: [],
    link: '',
    languages: ['react', 'mongodb', 'express']
  }
]

export const experiences: WorkExperience[] = [
  {
    company: 'First American',
    startDate: '05/2024',
    endDate: '08/2024',
    position: 'Software Development Intern',
    location: 'Chicago, IL',
    description: 'This past summer, I had the opportunity to intern at Oak Street Health, a revolutionary healthcare provider dedicated to delivering high-quality primary care for older adults. During my time with Oak Street Health, I played a pivotal role in implementing essential security controls, roles, profiles, and permission sets in Salesforce CRM, ensuring data security and compliance with HIPAA regulations. Additionally, I applied Agile methodologies to redesign critical business processes, resulting in an impressive increase in efficiency related to the creation and maintenance of company-wide data access policies.',
    imageUrl: 'https://us1-photo.nextdoor.com/business_logo/1b/db/1bdb0ccdad006b60d53a24ef36c1f511.jpg'
  }, {
    company: 'Duke GEMINI Research Center',
    startDate: '08/2023',
    endDate: '',
    position: 'Research Fellow',
    location: 'Durham, NC',
    description: 'I&apos;ve had the privilege to join a groundbreaking research project aimed at addressing the global burden of alcohol use disorders. Our team is dedicated to developing innovative solutions to tackle this public health issue. Our research involves the development and trans-cultural adaptation of a multilingual computer application designed to assess patients&apos; alcohol use behaviors, known as the Alcohol Use Behavioral Phenotyping Test (AUBPT). My responsibilities on the team have included the development of design outlines for tasks to facilitate the collaboration of our global health content subteam and app development subteam. Additionally, I am responsible for encoding gamified tasks using React.js with an integrated back-end through Firebase.  Through this project, I continue to gain hands-on experience in interdisciplinary  research, collaborating with international partners, and developing skills in  web development, study design, data collection, and statistical analysis.',
    imageUrl: 'bass_logo.png'
  }, {
    company: 'Oak Street Health',
    startDate: '05/2023',
    endDate: '08/2023',
    position: 'IT Applications Intern',
    location: 'Chicago, IL',
    description: 'This past summer, I had the opportunity to intern at Oak Street Health, a revolutionary healthcare provider dedicated to delivering high-quality primary care for older adults. During my time with Oak Street Health, I played a pivotal role in implementing essential security controls, roles, profiles, and permission sets in Salesforce CRM, ensuring data security and compliance with HIPAA regulations. Additionally, I applied Agile methodologies to redesign critical business processes, resulting in an impressive increase in efficiency related to the creation and maintenance of company-wide data access policies.',
    imageUrl: 'https://s3.amazonaws.com/company-photo.theladders.com/39148/6467a01c-3edd-4987-ac2c-2cc5ae80c7e1.png'
  }, {
    company: 'Target',
    startDate: '09/2019',
    endDate: '05/2021',
    position: 'Starbucks Barista',
    location: 'Redmond, WA',
    description: 'This past summer, I had the opportunity to intern at Oak Street Health, a revolutionary healthcare provider dedicated to delivering high-quality primary care for older adults. During my time with Oak Street Health, I played a pivotal role in implementing essential security controls, roles, profiles, and permission sets in Salesforce CRM, ensuring data security and compliance with HIPAA regulations. Additionally, I applied Agile methodologies to redesign critical business processes, resulting in an impressive increase in efficiency related to the creation and maintenance of company-wide data access policies.',
    imageUrl: 'https://assets.simon.com/tenantlogos/5951.png'
  },
]

