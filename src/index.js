
/*
    TODO :
     - Rename your package in package.json
     - add your repo url under repository in package.json
     - add your npm name under author in package.json
     - Rename your react component
     - building your component
     - add the needed propTypes

*/


import React from 'react';
import PropTypes from 'prop-types';

class MyReactComponent extends React.Component {
    render() {
        const { textColor,text } = this.props;
        const color = textColor || "red";

        return (
            <div>
                <h1 style={{color}}>
                    {text}
                </h1>
            </div>
        )
    }
}

// PropTypes
// https://reactjs.org/docs/typechecking-with-proptypes.html
MyReactComponent.propTypes = {
    textColor: PropTypes.string,
    text:PropTypes.string
};


export default MyReactComponent;