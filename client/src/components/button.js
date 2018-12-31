import React from 'react';
import { Link } from 'react-router-dom';

const MyButton = (props) => {
    
    //check type of button we're specifying return JSX
    const buttons = () => {
        let template = '';

        //get default type return something
        switch(props.type){
            case "default":
                template = <Link
                    className="link_default"
                    to={props.linkTo}
                    {...props.addStyless}
                >
                    {props.title}
                </Link>
            break;
            default:
                template='';
        }

        return template
    }

    return (
        <div className="my_link">
            {buttons()}
        </div>
    );
};

export default MyButton;