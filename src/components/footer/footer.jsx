import './footer.css'
import Icon_facebook from '../../pictures/Icon_Social/Icon_Social.png'
import Icon_Inst from '../../pictures/Icon_Social/Icon_Social (1).png'
import Icon_VK from '../../pictures/Icon_Social/Icon_Social (2).png'
import Icon_Linkedin from '../../pictures/Icon_Social/Icon_Social (3).png'

export const MyFooter = () => (
        <div className='my-footer'>
            <div className='footer-title'>© 2020-2023 Cleverland. Все права защищены.</div>
            <div className='footer-icon'>
                <img src={Icon_facebook} alt='img'/>
                <img src={Icon_Inst} alt='img'/>
                <img src={Icon_VK} alt='img'/>
                <img src={Icon_Linkedin} alt='img'/>
            </div>
        </div>
)

