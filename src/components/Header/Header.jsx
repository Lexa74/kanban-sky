import {useState} from "react";
import {Container} from "../../globalStyle.styled.js";
import * as S from './header.styled.js'

export const Header = ({addCard, globalTheme, setGlobalTheme}) => {
    const [isOpenModalUser, setIsOpenModalUser] = useState(false)

    function openModal(e) {
        e.preventDefault()
        setIsOpenModalUser(prev => !prev)
    }
    return (
        <S.Header>
            <Container>
                <S.HeaderBlock>
                    <S.HeaderLogoLight>
                        <a href="" target="_self"><img src="/images/logo.png" alt="logo" /></a>
                    </S.HeaderLogoLight>
                    <S.HeaderLogoDark>
                        <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo" /></a>
                    </S.HeaderLogoDark>
                    <S.HeaderNav>
                        <button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard" onClick={addCard}>Создать новую задачу</a></button>
                        <S.HeaderUser href="#user-set-target" className="_hover02" onClick={openModal}>Ivan Ivanov</S.HeaderUser>
                        {isOpenModalUser && (
                            <div className="header__pop-user-set pop-user-set" id="user-set-target">
                                {/*<a href="">x</a> */}
                                <p className="pop-user-set__name">Ivan Ivanov</p>
                                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                                <div className="pop-user-set__theme">
                                    <p>Темная тема</p>
                                    <input type="checkbox" className="checkbox" name="checkbox" onChange={() => setGlobalTheme(!globalTheme)} />
                                </div>
                                <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
                            </div>
                        )}
                    </S.HeaderNav>
                </S.HeaderBlock>
            </Container>
        </S.Header>
    )
}