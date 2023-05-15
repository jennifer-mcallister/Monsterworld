import { Nav } from "../components/Nav"

export const Home = () => {
    return(
        <>
            <Nav></Nav>
            <div className="welcome-text-container">
                <h1>Welcome to Monsterworld!</h1>
                <h2>Create your own little zoo of monsters</h2>
                <p>But don't forget to feed them..</p>
            </div>

        </>
    )
}