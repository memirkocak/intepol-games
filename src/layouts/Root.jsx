import Header from "../components/Header";
import "../App.css";


export default function Root( { children } ) {
    return (
        <>
        <section>
            <Header />
            { children }
        </section>
        </>
    )
}