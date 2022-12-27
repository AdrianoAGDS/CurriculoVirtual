import SocialNetworks from './SocialNetworks'

import Avatar from '../img/minhafoto.jpeg'

import '../styles/components/sidebar.sass'



const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Adriano Santos"/>
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">Download Curriculo</a>
    </aside>
}

export default Sidebar
