import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout: preact.FunctionalComponent = ({ children }) => {
    return (
        <div>
            {/* Your other components */}
            <Header />
            <main
                style={{
                    minHeight: "70vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
