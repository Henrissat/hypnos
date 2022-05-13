import styled from "styled-components";
import React from "react";
import "./contact.css";

export default function Contact() {
    const urlHotel = "https://hypnos.netlify.app/";

    return(
        <Wrapper>
            <HeaderBack />
            <h1>Contact</h1>
            <img src={`${urlHotel}/images/chandelier-g6f5a69dd7_1920.jpg`} className="bgHeader"/>
            <div className="forms-container">
                <form name="contact" method="POST" data-netlify="true" onSubmit="submint" className="form-contact">
                    <div className="infos-cantin" style={{marginTop: '2rem'}}>
                        <a href="tel:+33650122859">06 50 12 28 59</a><br/>
                        <a href="mailto:hypnos-hotel@gmail.com">hypnos@gmail.com</a>
                        <p className="txt-contact"><span>Un projet de prise de vue, une demande de devis personnalisé ?</span><br/><span> Vous avez reçu un bon cadeau et souhaitez prendre RDV.
    Vous pouvez m'envoyer un message directement sur WhatsApp, via Instagram ou par le formulaire ci-dessous.</span><br/><span>
    Je vous réponds généralement en moins de 24h.</span></p>
                    </div>
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label for="name">Nom</label><br/>
                        <input type="text" name="Nom" />
                    </p>
                    <p>
                        <label for="email">Email</label><br/>
                        <input type="email" name="email" />
                    </p>
                    <p>
                        <label for="role[]">Role</label><br/>
                        <select name="role[]" multiple>
                            <option value="customer">Client</option>
                            <option value="follower">Réservation</option>
                        </select>
                    </p>
                    <p>
                        <label for="message">Message</label><br/>
                        <textarea name="message"></textarea>
                    </p>
                    <p>
                        <button className="button" type="submit">Envoyer</button>
                    </p>
                </form>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
`;

const HeaderBack = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    maxWidth: 100%;
    height: 400px;
    background-image: url("images/pexels-pixabay-326650.jpg"); no-repeat;
    filter: brightness(80%);
    background-position: center;
    background-size: cover; 
`;