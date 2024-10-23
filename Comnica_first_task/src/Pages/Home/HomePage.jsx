import { RoundedButton } from "@/Components/shared";
import { HELLO_COMNICA, writeToConsole } from "@/utils";

export const HomePage = () => {
	return (
		<div id="landingPage">
			<div id="landingPage-col-1">
				<div className="logoContainer">
					<img src="./img/comnica_logo.webp" alt="comnica_logo" />
				</div>
				<div className="content">
					<div>
						<h1>Comnica Signature</h1>
						<h3>Digitális aláíró szolgáltatás a Comnicától</h3>
					</div>
					<div>
						<img
							src="./img/landing_page_illustration.webp"
							alt="landing_page_illustration"
						/>
					</div>
				</div>
			</div>
			<div id="landingPage-col-2">
				<div className="content">
					<h2>
						Üdvözlöm a <br />
						Comnica Signature-ben!
					</h2>
					<p>
						A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán.
						A folyamat több percet is igénybe vehet, ezért kérjük, csak akkor
						kezdje el, ha készen áll rá.
					</p>
					<RoundedButton onClick={() => writeToConsole(HELLO_COMNICA)}>
						KEZDHETJÜK
					</RoundedButton>
				</div>
			</div>
		</div>
	);
};
