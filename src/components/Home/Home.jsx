import NavBar from "../NavBar/NavBar"

export default function Home({ cartCount }) {
    return (
        <>
            <NavBar cartCount={cartCount}/>
            <img src="src\assets\marketplace.png"/>
        </>
    )
}