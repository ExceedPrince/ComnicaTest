export const HomePage = () => {
  return (
    <div id='landingPage' className='flex-row gap-10'>
      <div id='landingPage-col-1'>
        <div className="logoContainer">
          <img src="./comnica_logo.png" alt="comnica_logo"/>
        </div>
        <div className='content'>
          <div>
            <h1>Comnica Signature</h1>
            <h3>Digitális aláíró szolgáltatás a Comnicától</h3>
          </div>
          <div>
            <img src="" alt=""/>
          </div>
        </div>
      </div>
      <div id='landingPage-col-2'>
        <div className="content">
          <h2>
            Üdvözlöm a <br/>Comnica Signature-ben!
          </h2>
          <p>
            A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán. A folyamat több percet is igénybe vehet, ezért kérjük, csak akkor kezdje el, ha készen áll rá.
          </p>
          <button type="button" className="roundedBtn">
            KEZDHETJÜK
          </button>
        </div>
      </div>
    </div>
  )
}
