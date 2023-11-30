import "./app.css";
import Routes from "./routes/routes.navigator";
import Layout from "./components/layout/Layout";

export function App() {
    return (
        <>
            <Layout>
                {/* Your other components */}
                <Routes />
            </Layout>
        </>
    );
}