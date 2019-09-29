import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Div, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './Footer.css'
import Icon24Message from '@vkontakte/icons/dist/24/message';

class Footer extends Component {
    
    render() {
        return (
            <Div className="footer">
                <Button level="3" component="a" target="_blank"
                           href="https://vk.me/minifapp" before={<Icon24Message/>}/>
                <Button level="3" component="a" target="_blank"
                           href="https://vk.com/minifapp">Группа</Button>
                <Button level="3" component="a" onClick={this.openAbout.bind(this)}>О
                    программе</Button>
                <Button level="3" component="a" onClick={this.openNew.bind(this)}>New</Button>
            </Div>
        );
    }

    openAbout() {
        this.props.router.navigate('about');
    }

    openNew() {
        this.props.router.navigate('new');
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(Footer);
