import { Colum50, TechnologiSection } from "./styles";

export default function TechnologiesSection() {
    return (
        <div id="technologies">
            <TechnologiSection>
                <Colum50>
                    <div className="android-logo" />
                </Colum50>
                <Colum50>
                    <p>Android Developer at the largest Bank in South America,
                        coding for a specific project call "Light app" wich is the lite version of the Bank's App.</p>

                    <p> Deployed mobile application that leveraged Java and Kotlin to deliver
                        a seamless and secure solution that mirrors the leading banks’ branding and user experience</p>

                    <p> Refactored key parts of the client’s Android app, improving app performance from 92% crash free sessions to 99.9%</p>

                    <h2>In this particular project the tech that we use:</h2>
                    <ul>
                        <li>Kotlin/ Java;</li>
                        <li>Architecture components (Live Data, Data Binding, ViewModel(MVVM), Room);</li>
                        <li>Coroutines;</li>
                        <li>Koin;</li>
                        <li>SDK'S.</li>
                    </ul>
                    
                </Colum50>
            </TechnologiSection>

        </div>
    )
}