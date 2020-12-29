module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `http://sethdavissoftware.us/`,
    // Your Name
    name: 'Seth Davis',
    // Main Site Title
    title: `Seth Davis | Backend Developer`,
    // Description that goes under your name in main bio
    description: `Backend Developer with experience in Game Design, Web-app Development, and Database Management.
sethhdavis99@gmail.com | 443-244-5792`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/SethHDavis99`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/seth-h-davis/`,
    // Content of the About Me section
    about: `Hello! My name is Seth Davis, and I've been writing software and games since High School, beginning work at Bytelion in my senior year. In Bytelion I found myself comfortable in the developer role, as I worked with a variety of teams in a variety of projects. I learned languages like Ruby on Rails, and how to manage entire PostgreSQL databases like the massive database attractions within Argo. After becoming accepted to UMBC, I found myself involved in the UMBC Game Developer’s Club, where I was able to realize my passion for game development. Working with a team, I completed my first public game: Binary Bubbles. Now after joining IGDA, and continuing to expand my knowledge of software and game development, there is no more perfect industry for me other than software!`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Ele-Mental',
        description:
          'A mind-bending first-person puzzle game created in Unreal Engine. Use different elements to effect to world around you in unique ways!',
        link: 'https://default-frogs.itch.io/ele-mental',
      },
      {
        name: 'Midnight Monorail',
        description:
          'A fast-paced track building strategy game built in GameMaker Studio. Winner of the GMTK 2020 Game Jam!',
        link: 'https://default-frogs.itch.io/midnight-monorail',
      },
      {
        name: 'Binary Bubbles',
        description:
          'Puzzle-platformer with the goal of moving code bubbles between objects to solve puzzles!',
        link: 'https://default-frogs.itch.io/binary-bubbles',
      },
      {
        name: 'Argo Navigation',
        description:
          'Navigation app for boaters looking to share info, find landmarks, and enjoy a community all on the open water.',
        link: 'https://www.bytelion.com/portfolio/argo-navigation/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Bytelion',
        description: 'Backend Developer, October 2017 - August 2020',
        link: 'https://www.bytelion.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C++, Python, Unreal Engine, GameMaker, PostgreSQL, Ruby on Rails',
      },
      {
        name: 'Software',
        description: 'Microsoft Office, Google Products and Services, Slack, GitHub, Atom, Postman, JIRA, Confluence, AWS',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
