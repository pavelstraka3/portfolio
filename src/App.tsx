import './App.css'
import NavBar from "./components/navBar.tsx";
import {ThemeProvider} from "./components/themeProvider.tsx";
import {Header1} from "@/components/ui/header1.tsx";
import {Header2} from "@/components/ui/header2.tsx";

function App() {

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <NavBar/>
            <Header1>Pavel Straka</Header1>
            <Header2>Frontend developer</Header2>
        </ThemeProvider>
    )
}

export default App
