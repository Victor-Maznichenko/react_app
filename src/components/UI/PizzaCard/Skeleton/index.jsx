import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#ebebeb"
    foregroundColor="#c7c7c7"
    {...props}
  >
    <circle cx="140" cy="125" r="125" /> 
    <rect x="40" y="275" rx="4" ry="4" width="200" height="21" /> 
    <rect x="5" y="326" rx="5" ry="5" width="130" height="32" /> 
    <rect x="141" y="326" rx="5" ry="5" width="130" height="32" /> 
    <rect x="5" y="365" rx="5" ry="5" width="85" height="32" /> 
    <rect x="96" y="365" rx="5" ry="5" width="85" height="32" /> 
    <rect x="187" y="365" rx="5" ry="5" width="85" height="32" /> 
    <rect x="5" y="427" rx="5" ry="5" width="90" height="26" /> 
    <rect x="125" y="420" rx="15" ry="15" width="155" height="40" />
  </ContentLoader>
)

export default Skeleton
