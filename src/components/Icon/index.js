import React from "react";
import Icons from "fonts/untitled-font-1.svg"; // Path to your icons.svg

const Icon = props => {
	return (
        <svg 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                className={`icon icon-${props.name}`}
        >
			<use xlinkHref={`${Icons}#${props.name}`} />
		</svg>


	)
}

export default Icon;