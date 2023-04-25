import live from "../../assets/Ellipse 1.png";
import logoBall from "../../assets/Soccer Ball.png"
import trophy from "../../assets/Trophy.png"
import teams from "../../assets/Highway Sign.png"
import { StyledHeader } from "./styleHeader";

export const Header = () => {

    return (
        <StyledHeader >
            <div className="liveMatchs">
                <h3> LIVE <img src={live} /> </h3>
                <ul>
                    <li>
                        <small>INT <span>5</span></small>
                        <small>COR <span>0</span></small>
                    </li>
                    <li>
                        <small>INT <span>5</span></small>
                        <small>COR <span>0</span></small>
                    </li>
                    <li>
                        <small>INT <span>5</span></small>
                        <small>COR <span>0</span></small>
                    </li>
                    <li>
                        <small>INT <span>5</span></small>
                        <small>COR <span>0</span></small>
                    </li>
                </ul>
            </div>

            <div className="logo">
                <h1>FUTNEWS <img src={logoBall} /></h1>
            </div>

            <nav>
                <img src={trophy} alt="troféu" />
                <img src={teams} alt="times" />
            </nav>

        </StyledHeader>
    );
};
