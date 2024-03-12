import Header from "@/layout/Header";

export interface LayoutProps {
    children: React.ReactNode;
}

function Layout(props: LayoutProps): JSX.Element {
    const { children } = props;
    const style = { minHeight: "700px" };
    return (
        <>
            <Header />
            <div style={style}>{children}</div>
        </>
    );
}

export default Layout;