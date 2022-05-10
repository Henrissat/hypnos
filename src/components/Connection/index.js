import styled from "styled-components";
import "../Home/Home.css";
import "./Connection.css";

export default function Connection() {
    return (
        <Wrapper>
                <div className="block_login">
                    <Register><a href="/Register" className="linkLogin">Créer un compte</a></Register>
                    
                    <Login><a href="/LoginUser" className="linkLogin">Je suis déjà inscrit</a></Login>
                </div>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: #000;
    opacity: 80%;
`;

const Register = styled.div`
    position: relative;
    margin: 2rem;
`;

const Login = styled.div`
    position: relative;
`;
