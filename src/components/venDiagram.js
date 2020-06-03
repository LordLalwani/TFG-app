import React from 'react';
import "./venDiagram.scss"

const VenDiagram = () => {
    return (
        <div className="svgDiv">
            <svg width="389px" height="342" xmlns="http://www.w3.org/2000/svg">

                <g>
                    <title>background</title>
                    <rect x="-1" y="-1" width="391" height="344" id="canvas_background" fill="none" />
                    <g id="canvasGrid" display="none">
                        <rect id="svg_3" width="100%" height="100%" x="0" y="0" stroke-width="0" fill="url(#gridpattern)" />
                    </g>
                </g>
                <g>
                    <title>Layer 1</title>
                    <path id="svg_1" d="m0,111.5c0,-61.60221 49.89779,-111.5 111.5,-111.5c61.60221,0 111.5,49.89779 111.5,111.5c0,61.60221 -49.89779,111.5 -111.5,111.5c-61.60221,0 -111.5,-49.89779 -111.5,-111.5z" stroke-opacity="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="null" stroke="#fff" fill-opacity="null" fill="none" />
                    <path id="svg_2" d="m52,230.203125c0,-61.60221 49.89779,-111.5 111.5,-111.5c61.60221,0 111.5,49.89779 111.5,111.5c0,61.60221 -49.89779,111.5 -111.5,111.5c-61.60221,0 -111.5,-49.89779 -111.5,-111.5z" stroke-linecap="null" stroke-linejoin="null" stroke-width="null" stroke="#fff" fill="none" />
                    <path id="svg_4" d="m166,154.5c0,-61.60221 49.89779,-111.5 111.5,-111.5c61.60221,0 111.5,49.89779 111.5,111.5c0,61.60221 -49.89779,111.5 -111.5,111.5c-61.60221,0 -111.5,-49.89779 -111.5,-111.5z" stroke-opacity="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="null" stroke="#fff" fill-opacity="null" fill="none" />
                </g>
            </svg>
            <h3 className="venHeading1">Technology</h3>
            <h3 className="venHeading2">Business<br></br>Strategy</h3>
            <h3 className="venHeading3">User<br></br>Experience</h3>
            <div className="circle"></div>
        </div>
    )
}
export default VenDiagram
