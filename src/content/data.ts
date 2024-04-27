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
  image: string,
  link: string,
  languages: string[]
}

export const projects: Project[] = [
  {
    title: 'BitBlit API',
    liner: 'A 2D graphics API library created in C++ for creating dynamic visual content.',
    description: 'A 2D graphics API library created in C++ for creating dynamic visual content. It supports a wide array of shapes including circles, parallelograms, and complex polygons, with advanced features such as customizable shaders for textures, gradients, and colors. Key functionalities include multiple tiling modes, transformation capabilities using linear algebra, and various blend modes for creative pixel manipulation.',
    image: '',
    link: 'https://github.com/milesreng/bitblit-api',
    languages: ['cplusplus']
  }, {
    title: 'Scholarly',
    liner: 'A full-stack web application aimed at enhancing collaboration on research projects for students at Duke University.',
    description: 'A full-stack web application aimed at enhancing collaboration on research projects for students at Duke University. Users authenticate through Gitlab OAuth2 and can create and manage research projects and tasks within a responsive UI designed in Vue.js.',
    image: '',
    link: 'https://github.com/milesreng/scholarly',
    languages: ['typescript', 'vuejs', 'docker', 'mongodb']
  }, {
    title: 'CS330 Case Study',
    liner: 'A collaborative deep-dive into the algorithmic efficiency of passenger-to-driver matching on NYC app data.',
    description: 'A collaborative deep-dive into the algorithmic efficiency of passenger-to-driver matching on NYC app data. Leveraged advanced data structures and algorithms such as an A* heuristic to achieve more efficient travel times and kd-trees to optimize spatial queries.',
    image: '',
    link: '',
    languages: ['python', 'r']
  }, {
    title: 'Statify for Spotify',
    liner: 'A web app that allows users to authenticate through the Spotify API and view a summary of their favorite tracks, artists, and genres.',
    description: '',
    image: '',
    link: '',
    languages: ['react', 'javascript']
  }, {
    title: 'Pantry Pal',
    liner: 'A recipe sharing platform where users can browse, upload, and rate recipes. Includes features for meal planning and grocery list generation.',
    description: '',
    image: '',
    link: '',
    languages: ['react', 'mongodb', 'express']
  }
]