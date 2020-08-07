import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFPYz-bmLCeGA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=1HWHBgBljvXyJ8Y2H8ZFrChYjshy_sU-S0OK4_SWejg" alt="Rodrigo"/>
                <div>
                    <strong>Rodrigo Lourenço</strong>
                    <span>Informática</span>
                </div>
            </header>

            <p>
                Louco por Informática.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de expreriências.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 120,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whats App"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;