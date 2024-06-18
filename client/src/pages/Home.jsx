import InstructionsModal from "../components/InstructionsModal";

function Home() {
    const show = true;
    return (
        <>
        <p>Page d'accueil</p>
        <InstructionsModal show={show}/>
        
        </>
    )
}

export default Home;