import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [imieNazwisko, setImieNazwisko] = useState("")
  const [nrSekcji, setNrSekcji] = useState("")

  const [sekcje, setSekcje] = useState([
    "Piłka nożna", 
    "Szachy",
    "Robotyka",
    "Pływanie"
  ])

  const UstawImieNazwisko = (i) => {
    setImieNazwisko(i.target.value);
  }

  const UstawNrSekcji = (n) => {
    setNrSekcji(n.target.value);
  }

  const Wyslij = (e) => {
    e.preventDefault();
    let sekcja = "";
    switch(nrSekcji){
      case "1": sekcja = "Piłka nożna"; break;
      case "2": sekcja = "Szachy"; break;
      case "3": sekcja = "Robotyka"; break;
      case "4": sekcja = "Pływanie"; break;
      default: sekcja = "Nieprawidłowy numer sekcji";
    }
      
    console.log({imieNazwisko, sekcja})
  }

  return (
    <>
      <h2>Liczba sekcji: {sekcje.length}</h2>
      <ol>
        {sekcje.map((element, index) =>(
          <li key={index}>{element}</li>
        ))}
      </ol>

      <form onSubmit={Wyslij}>
        <div className="mb-3">
          <label htmlFor="imieNazwisko" className="form-label">Imię i nazwisko:</label>
          <input type="text" className="form-control" id="imieNazwisko" onChange={UstawImieNazwisko} />
        </div>
        <div className="mb-3">
          <label htmlFor="numerSekcji" className="form-label">Numer sekcji:</label>
          <input type="number" className="form-control" id="numerSekcji"  onChange={UstawNrSekcji} />
        </div>
        <button type="submit" className="btn btn-primary">Zapisz</button>
      </form>
    </>
  )
}

export default App
