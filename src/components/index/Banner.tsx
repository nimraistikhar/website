import React from 'react'

import styled from '@emotion/styled'
import GitLab from '../../resources/gitlab.svg'
import GitHub from '../../resources/octicons-mark-github.svg'
import Bitbucket from '../../resources/bitbucket.svg'
import { sizes, colors } from '../../styles/variables'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Styled = styled.div`
  .pattern {
    &::after {
      height: 75%;

      @media (max-width: 800px) {
        height: 90%;
      }
    }
  }

  .banner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10rem 0 10rem;

    &__screenshot {
      &-container {
        display: block;
        margin-top: 3rem;
        width: 100%;
        max-width: 1000px;
        box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.2);
      }
    }

    h1 {
      font-size: 4.5rem;
      font-weight: 400;

      @media (max-width: ${sizes.breakpoints.md}) {
        font-size: 3.8rem;
      }

      span {
        display: block;
        font-weight: 400;
      }
    }

    p {
      max-width: 450px;
      margin: 2.5rem auto;

      img {
        height: 2rem;
        margin-left: 1.5rem;
      }
    }
  }

  .works-with {
    color: ${colors.textLight};
  }
`

const Banner = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "screenshot.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Styled>
        <div className="pattern">
          <div className="row">
            <header role="banner" className="banner">
              <div className="banner__text-box">
                <h1>
                  <strong>Dev Environments</strong> Built for the Cloud.
                </h1>
                <p>Describe your dev environments as code and automate the last missing piece in your DevOps pipeline.</p>
                <a href="#get-started" className="btn btn--cta">
                  Try Now
                </a>
                <p className="works-with">
                  Works with
                  <img src={GitLab} alt="GitLab" />
                  <img src={GitHub} alt="GitHub" />
                  <img src={Bitbucket} alt="Bitbucket" />
                </p>
              </div>
              <div className="banner__screenshot-container">
                <Img alt="Gitpod Screenshot" fluid={data.file.childImageSharp.fluid} className="banner__screenshot" />
              </div>
            </header>
          </div>
        </div>
      </Styled>
    )}
  />
)

export default Banner
