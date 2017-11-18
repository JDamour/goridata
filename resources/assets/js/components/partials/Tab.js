import React, {PropTypes} from 'react';

export const Tab = (props) => {
    return (
        <li className={`${props.isActive ? 'is-active' : ''}`}>
            <a onClick={(event) => {
                    event.preventDefault();
                    props.onClick(props.tabIndex);
                }}>
                <span className="icon is-small">
                    <i className={`${props.iconClassName}`}/>
                </span>
                <span>{`${props.linkClassName} `}</span>
            </a>
        </li>
    )
}

export default Tab;