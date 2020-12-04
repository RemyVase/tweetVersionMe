import React, { Component } from 'react';

import TweetBox from '../../components/TweetBox';
import Tweet from '../../components/Tweet';
import { tweets } from '../../constants';
import moment from 'moment';

import './Home.css';

class Home extends Component{

    state= {
        tweets,
    }

    publish = tweet => {
        const { tweets } = this.state;

        this.setState({
            tweets: [{ 
                avatar: 'https://i-dja.unimedias.fr/sites/art-de-vivre/files/styles/large/public/dj115_chaton_jardin_annala.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=599&w=900',
                username: 'remyvase',
                fullname: 'Rémy Vase',
                content: tweet,
                date: moment().format('DD/MM/YYYY'),
            },
            ...tweets,
            ],
        })
    }

    remove = index => {
        const { tweets } = this.state;
        this.setState({ tweets: tweets.filter((tweet,i) => i !== index) })
    }

    render(){
        const { tweets } = this.state;

        return (
            <div className="homepage">
                <TweetBox publish={this.publish} />
                <div className="tweets">
                    {tweets.map((tweet, index) => (
                        <Tweet
                            key={index}
                            index={index}
                            remove={this.remove}
                            { ...tweet }
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;