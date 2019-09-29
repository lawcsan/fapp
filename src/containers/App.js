import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ConfigProvider, Root, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
// import {isWebView} from '@vkontakte/vkui/src/lib/webview';
import * as vkSelectors from '../store/vk/reducer';
import * as vkActions from '../store/vk/actions';
import AboutPanel from './AboutPanel';
import NewPanel from './NewPanel';
import MainPanel from './MainPanel';
import { RouteNode } from 'react-router5'

class App extends Component {

    componentWillMount() {
        this.props.dispatch(vkActions.initApp());
    }

    render() {
        let activePanel = 'mainPanel';
        
        switch (this.props.route.name) {
            case 'about':
                activePanel = 'aboutPanel';
                break;
            case 'new':
                activePanel = 'newPanel';
                break;
            default:
                activePanel = 'mainPanel';
                break;
        }
        
        
//         let activePanel = this.props.route.name === 'about' ? 'newPanel' : 'mainPanel';
//         let activePanel = this.props.route.name === 'new' ? 'newPanel' : 'mainPanel';

        return (
            <ConfigProvider insets={this.props.insets} isWebView={true}>
                <Root activeView="mainView">
                    <View id="mainView" activePanel={activePanel}>
                        <MainPanel router={this.props.router} id="mainPanel" accessToken={this.props.accessToken}/>
                        <AboutPanel router={this.props.router} id="aboutPanel"/>
                        <NewPanel router={this.props.router} id="newPanel"/>
                    </View>
                    
                </Root>
            </ConfigProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        accessToken: vkSelectors.getAccessToken(state),
        insets: vkSelectors.getInsets(state),
    };
}

export default connect(mapStateToProps)(
    (props) => (
        <RouteNode nodeName="">
            {({ route }) => <App route={route} {...props}/>}
        </RouteNode>
    )
);
