import { AboutContainer } from "../about/styles";
import { TechnologiSection } from "./styles";

export default function TechnologiesSection() {
    return (
        <TechnologiSection id="technologies">
            <div className="container">
                <h1>Tecnologias para Desenvolvimento Mobile</h1>

                <p>Algumas das tecnologias que utilizei no desenvolvimento de aplicativos para iOS e Android incluem:</p>
                <table className="container">
                    <tr>
                        <th><h2>IOS</h2></th>
                        <th><h2>Android</h2></th>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                <li>Xcode</li>
                                <li>Swift</li>
                                <li>Objective-C</li>
                                <li>UIKit</li>
                                <li>Core Data</li>
                                <li>Auto Layout</li>
                                <li>Alamofire</li>
                                <li>MapKit</li>
                                <li>Core Location</li>
                            </ul>

                        </td>
                        <td>
                            <ul>
                                <li>Android Studio</li>
                                <li>Java</li>
                                <li>Kotlin</li>
                                <li>XML</li>
                                <li>Material Design</li>
                                <li>SQLite</li>
                                <li>Firebase</li>
                                <li>Google Maps API</li>
                                <li>Google Play Services</li>
                                <li>Google Analytics</li>
                            </ul>
                        </td>
                    </tr>
                </table>
               

            </div>
        </TechnologiSection>
    )
}