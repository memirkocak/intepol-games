import Header from "../components/Header";
import "../App.css";
import Footer from "../components/Footer";

export default function Root( { children } ) {
    return (
        <>
        <section className="root-layout">
            <Header />
            <main className="main-content">
                { children }
            </main>
            <Footer />
        </section>
        </>
    )
}