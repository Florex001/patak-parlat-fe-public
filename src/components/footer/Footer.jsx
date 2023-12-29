import React from 'react'
import "./footer.css";
import { AiTwotonePhone } from 'react-icons/ai'
import { ImLocation2 } from "react-icons/im";
import Lottie from 'lottie-react'
import animationData from '../../assets/footer.json'

function Footer() {
    return (
        <section>
            <footer>
                <div className="footer-content">
                    <div className="footer-left">
                        <Lottie animationData={animationData} className='footer-left-animation' />
                    </div>
                    <div className="footer-right">
                            <h2>Vegye fel velünk a kapcsolatot!</h2>
                            <div className="footer-right-content">
                            <div className="telefon">
                                <div className="telefon-left">
                                    <AiTwotonePhone />
                                </div>
                                <div className="telefon-right">
                                    <p>Telefon</p>
                                    <a href="tel:+06202242703">06 / 20 224-2703</a>
                                </div>
                            </div>
                            <div className="email">
                                <div className="email-left">
                                <ImLocation2 />
                                </div>
                                <div className="email-right">
                                    <p>Telephely</p>
                                    <p>Sárospatak, Wesselényi 26.</p>
                                </div>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2652.704896344606!2d21.55737967684397!3d48.327754937901574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738ca4f25a6b11d%3A0xb4a4ac8ad2f9c078!2zU8Ohcm9zcGF0YWssIFdlc3NlbMOpbnlpIMO6dCAyNiwgMzk1MA!5e0!3m2!1shu!2shu!4v1703857491261!5m2!1shu!2shu" title='gps' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer