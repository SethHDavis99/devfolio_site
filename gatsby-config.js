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
    github: `https://github.com/SethHDavis99`,
    linkedin: `https://www.linkedin.com/in/seth-h-davis/`,
    itch: `https://default-frog.itch.io/`,
    // Content of the About Me section
    about: `Gameplay Engineer with 5+ years of professional game development experience, specializing in Unreal Engine 5. Advanced C++ proficiency and hands-on experience with designing and implementing critical gameplay systems, custom GAS-based frameworks, data-driven architectures, and designer-facing tools. Contributed to the shipped AAA title Marvel’s Midnight Suns and independently owned the mission system for an additional unannounced AAA Firaxis project.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Marvel\'s Midnight Suns',
        description:
          'Immersive personal story as you battle corrupted versions of iconic Marvel characters and rise up against the demonic forces of Lilith to stop her reviving her evil master, Chthon.',
        link: 'https://midnightsuns.2k.com/',
      },
      {
        name: '12 Games 12 Months',
        description:
          'A collection of games I created during the year 2025. I created, designed, and programmed all 12 games within the span of one year.',
        link: 'https://itch.io/c/5401040/12-games-12-months-challenge',
      },
      {
        name: 'Lasso Lassie',
        description:
          'Ongoing solo project developed using GODOT. An action beat em\' up developed, engineered, and designed solely by myself.',
        link: 'https://default-frog.itch.io/lasso-lassie',
      },
      {
        name: 'Midnight Monorail',
        description:
          'A fast-paced track building strategy game built in GameMaker Studio. Winner of the GMTK 2020 Game Jam!',
        link: 'https://default-frogs.itch.io/midnight-monorail',
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
        name: 'Firaxis Games',
        description: 'JR Gameplay Engineer, May 2021 - Present',
        link: 'https://firaxis.com/',
      },
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
