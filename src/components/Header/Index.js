import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
    const location = useLocation();
    return(
        <Wrapper>
            <Nav>
                <Link to="/">
                    <div isCurrentPage={location.pathname === "/"}>
                        HomePage
                    </div>
                </Link>
                <Link to="/Hotel">
                    <div isCurrentPage={location.pathname === "/Hotel"}>Hotel</div>
                </Link>
                <Link to="/price">
                    <div isCurrentPage={location.pathname === "/Rooms"}>Rooms</div>
                </Link>
                <Link to="/Contact">
                    <div isCurrentPage={location.pathname === "/Contact"}>
                        <img style={{width:'25px', marginTop:'-5px' }} src="" />
                    </div>
                </Link>
            </Nav>
        </Wrapper>
    );
};

const Wrapper = styled.header``;

const Nav = styled.nav`
    display: flex;
`;