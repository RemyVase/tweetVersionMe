import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import { highlightedStr } from '../../helpers/';

import './Tweet.css';

class Tweet extends Component{

    static propTypes = {
        username: PropTypes.string.isRequired,
        date: PropTypes.string,
        fullname: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        remove: PropTypes.func.isRequired,
    } 

    static defaultProps = {
        date: moment().format('DD/MM/YYYY'),
    }

    state = {
        isFocus: false,
    }

    handleFocus = ({ type }) => {
        //console.log(type);
        this.setState({ isFocus: type === 'mouseenter'});
    };

    render() {
        const { avatar, fullname, content, username, date, index, remove } = this.props;
        const { isFocus } = this.state;

        return (
            <div className="tweet">
                <div className="avatar">
                    <img src={avatar} role="presentation" alt="avatar"/>
                </div>
                <div className="data">
                    <div className="infos">
                        <strong>{fullname}</strong>
                        <small className="gray username">@{username}</small>
                        <small className="gray date">- {date} </small>
                        {username ==="remyvase" && (
                            <FontAwesomeIcon
                                className="gray trash"
                                icon={isFocus ? 'trash-restore' : 'trash'}
                                onMouseEnter= {this.handleFocus}
                                onMouseLeave= {this.handleFocus}
                                onClick = {() => remove(index)}
                            />
                        )}
                    </div>
                    <div className="content">
                        <p>{highlightedStr(content)}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tweet;