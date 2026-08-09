import { Link } from "react-router";
import { Header } from "../components/Header";
import './ErrorPage.css'

export function ErrorPage () {
    return(
        <>
            <title>404</title>  
            <Header />

            <div className="error-page-background">
                <div className="error-page-texts">
                    <h1>404</h1>
                    <p>You're On the Wrong Hood Nigga</p>
                    <Link className="error-page-btn" to="/">Go Back Home Bitch</Link>
                </div>
            </div>
        </>
    );
}