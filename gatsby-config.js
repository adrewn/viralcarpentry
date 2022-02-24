module.exports = {
  siteMetadata: {
    title: `Viral Carpentry`,
    fullTitle: `VIRAL CARPENTRY`,
    description: `Listen better | Plan better | Build better.`,
    about: `We have built every size and style of staircase imaginable. Whether your dream stairs and railings are traditional, modern or contemporary. Viral Carpentry has the know-how and experience to realize your dreams.`,
    email: `viral.carpentry@gmail.com`,
    social: {
      facebook: `https://facebook.com/viral.carpentry`,
      twitter: `#`,
      instagram: `https://instagram.com/viral.carpentry`,
      linkedin: `#`
    },
    contact: {
      mobile: `+1 (647) 819 7474`,
      telephone: `+1 (647) 819 7474`
    },
    address: `GTA - Ontario - Canada`,
    map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1472034.6831909616!2d-80.36330396068857!3d43.89586371573611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a1d7471156d%3A0x4ecad8e272e4c2a2!2sGreater%20Toronto%20Area%2C%20Ontario!5e0!3m2!1svi!2sca!4v1645281148749!5m2!1svi!2sca`,
    opening: {
      day: `Monday - Saturday`,
      hour: `8:00am - 5:00pm`
    },
    careers: {
      title: `Benefits and rewards`,
      about: `Our diverse capabilities provide employees with the ability to
      work on projects of all sizes and types and receive amazing
      benefits in return. They include but are in no way limited to:`,
      benefits: [
        `Healthcare and wellness benefits`,
        `Retirement and financial protection`,
        `Employee development programs`
      ]
    },

    author: {
      name: `Andrew Nguyen`,
      position: `Web Developer`,
      email: `andrew.nguyen.rv@gmail.com`,
      contact: `+1 (647) 819 7474`,
      website: `https://andrewnguyen.netlify.app`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`)
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/brand-logo.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],

}
