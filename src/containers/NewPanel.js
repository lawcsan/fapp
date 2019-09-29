import React, {Component} from 'react';
import { Panel, PanelHeader, HeaderButton, Group, Div, List, Cell, Link, platform, IOS } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {connect} from 'react-redux';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Footer from './Footer';

class NewPanel extends Component {

    render() {
        const osname = platform();

        return (
            <Panel id={this.props.id}>
                <PanelHeader
                    left={<HeaderButton onClick={this.navigationBack.bind(this)}>{osname === IOS ?
                        <Icon28ChevronBack/> : <Icon24Back/>}</HeaderButton>}
                >
                    О программе
                </PanelHeader>
                <Group title="THIS IS NEW PANEL">
                    <Div>
                        Это пробная приложуха, разбираюсь как оно вообще должно работать
                        Что за mini apps такие, как работают Git Pages, и вообще вот это вот всё.
                    </Div>
                </Group>
                <Group title="Используемые ресурсы">
                    <List>
                        <Cell multiline>
                            Иконки – <Link href="https://www.flaticon.com/authors/smashicons">Smashicons</Link>.
                            Лицензия <Link
                            href="http://creativecommons.org/licenses/by/3.0/">CC
                            3.0 BY</Link>.
                        </Cell>
                        <Cell multiline>
                            Курсы ЦБ РФ – <Link href="https://www.cbr-xml-daily.ru/">API</Link>.
                        </Cell>
                        <Cell multiline>
                            Курс USD/EUR – <Link href="https://free.currencyconverterapi.com/">API</Link>.
                        </Cell>
                    </List>
                </Group>
                <Footer router={this.props.router}/>
            </Panel>
        );
    }

    navigationBack() {
        this.props.router.navigate('currency')
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(NewPanel);
