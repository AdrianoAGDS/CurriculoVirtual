import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import '../styles/components/sidebar.sass'



const Sidebar = () => {
    return <aside id="sidebar">
        <img src="https://avatars.githubusercontent.com/u/86208603?v=4" alt="Adriano Santos"/>
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">Download Curriculo</a>
    </aside>
}

export default Sidebar
