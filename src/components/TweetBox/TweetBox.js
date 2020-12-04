import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TweetBox.css';

class TweetBox extends Component {

    static propTypes = {
        publish: PropTypes.func.isRequired,
    };

    state = {
        value:"",
    };

    handleSubmit = () =>{
        const { value } = this.state;
        const { publish } = this.props;

        if(value.length > 0 && value.length <= 140){
            publish(value);

            this.setState({ value: ''});
        }
    }

    handleChange = ({ target: { value }}) => {
        this.setState({ value });
    };

    handleFocus = ({ type }) => {
        this._textarea.placeholder = type === "focus" ? '' : "Composez votre tweet";
    }

    render(){
        const { value } = this.state;

        return(
            <div className="tweetbox">
                <textarea
                    className={value.length > 140 && 'alert'}
                    rows={3}
                    placeholder="Composez votre tweet"
                    value={value}
                    onChange={this.handleChange}
                    ref={t => this._textarea = t}
                    onFocus={this.handleFocus}
                    onBlur={this.handleFocus}
                />
                <div className="action">
                    <button 
                        type="button" 
                        disabled={!value.length || value.length > 140}
                        onClick={this.handleSubmit}>
                            Tweet
                    </button>
                    <span className="count">{140 - value.length}</span>
                </div>
            </div>
        );

    }
}

export default TweetBox;