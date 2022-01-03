import React from 'react'
import styled from 'styled-components'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const FooterWrapper = styled.div`
    min-height: 300px;
    width: 100%;
    background: var(--col-white);
    .contents {
        min-height: 250px;
        max-width: 1130px;
        margin: 0 auto;
        padding: 1.5rem 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        border-bottom: 1px solid #fff;
        p {
            font-size: 14px;
            margin-top: 12px;
            color: var(--col-black);
        }
        .links .icon {
            font-size: 25px;
            margin-top: 1rem;
        }
        .links .icon:nth-child(3) {
            font-size: 25px;
            margin-left: 1rem;
        }
    }
    p.copyright {
        font-size: 13px;
        text-align: center;
        margin-top: 1rem;
        color: var(--col-black);
    }
`

const Footer = () => {
    return (
        <FooterWrapper>

            <div className="contents">
                <div className="about">
                  About
                   <p>Tourvaille is a company affiliated to the best tourism company providing the data, information and guidance to the tourist along with the best experience possible.</p>
                </div>
                <div className="links">
                Contact<br/>
                <FaFacebook className="icon"/>
                <AiFillInstagram className="icon"/></div>
                <div className="services">tourvaillenepal@gmail.com<br/><br/> +977 9847289137</div>

            </div>
            <p className="copyright">copyright&copy;tourvaille-2021</p>
        </FooterWrapper>
    )
}

export default Footer
