import { useState } from "react";

export default function Test() {

    const webLanguages = [
        {
            name: "HTML",
            description: "HyperText Markup Language, il linguaggio di markup utilizzato per strutturare le pagine web."
        },
        {
            name: "CSS",
            description: "Cascading Style Sheets, usato per definire lo stile e il layout delle pagine web."
        },
        {
            name: "JavaScript",
            description: "Un linguaggio di programmazione lato client (e anche lato server con Node.js) che rende le pagine web interattive."
        },
        {
            name: "Node.js",
            description: "Un runtime JavaScript lato server che permette di eseguire JavaScript fuori dal browser."
        },
        {
            name: "Express",
            description: "Un framework minimalista per Node.js che semplifica la creazione di API e server web."
        },
        {
            name: "ReactJS",
            description: "Una libreria JavaScript per creare interfacce utente dinamiche e component-based."
        }
    ];

    const [selectedLanguage, setSelectedLanguage] = useState("");


    function handleClick(linguaggioCliccato) {
        console.log("Botton cliccato");
        setSelectedLanguage(linguaggioCliccato);

    }


    return (

        <>


            <header className="header text-center mt-4">
                <h1>Use-State Test</h1>
            </header>

            <main className="text-center d-flex flex-column justify-content-center align-items-center">

                <div className="container mt-5">
                    <h2>Web Languages</h2>
                    {webLanguages.map((language, index) => {
                        return (
                            <button onClick={() => handleClick(language)} className={`btn m-2 ${selectedLanguage && selectedLanguage.name === language.name
                                ? 'btn-warning'
                                : 'btn-primary'
                                }`} key={index}>{language.name}</button>
                        )
                    })}
                </div>


                <div className="container mt-5">
                    <div className="card">
                        <div className="card-body">
                            {selectedLanguage ? (
                                // Se selectedLanguage esiste, mostra i dettagli
                                <>
                                    <h5 className="card-title">{selectedLanguage.name}</h5>
                                    <p className="card-text">{selectedLanguage.description}</p>
                                </>
                            ) : (
                                // Se selectedLanguage è null, mostra il messaggio di default
                                <p className="card-text">Nessun linguaggio selezionato</p>
                            )}
                        </div>
                    </div>
                </div>


            </main>


        </>


    )


}