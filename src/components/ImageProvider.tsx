import React, { CSSProperties } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import styled from '@emotion/styled'

const StyledImageProvider = styled.div`
    height: 100%;
    width: 100%;
`

interface ImageProviderProps {
    fileName: string
    alt: string
    style?: CSSProperties
}

const ImageProvider = ({ fileName, alt, style }: ImageProviderProps) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(traceSVG: { color: "#0b2144" }) {
            originalName
            tracedSVG
            src
          }
        }
      }
    }
  `)

  const fluid = allImageSharp.nodes.find((n: any) => n.fluid.originalName === fileName)
    .fluid

  return (
    <StyledImageProvider>
      <Img className="gatsby-image" fluid={fluid} alt={alt} style={{...style, position: 'none'}} imgStyle={{top: '50%', transform: 'translateY(-50%) scale(.93)'}} />
    </StyledImageProvider>
  )
}

export default ImageProvider;
