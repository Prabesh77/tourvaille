import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    min-height: 300px;
    width: 100%;
    background: var(--col-white);
    .contents {
        min-height: 250px;
        max-width: 1130px;
        margin: 0 auto;
        padding: 1.5rem 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #fff;
    }
`

const Footer = () => {
    return (
        <FooterWrapper>

            <div className="contents">
                <div className="about">About</div>
                <div className="services">Services</div>
                <div className="terms">Terms</div>
                <div className="links">Quick Links</div>
            </div>
            
        </FooterWrapper>
    )
}

export default Footer
