import { ReactElement } from "react";


type ViewTablParam = {
    activeTab?: AaticeTab
    onTabChange: Function
}

enum AaticeTab {
    LIST,
    CHART,
}

const grenerteLinkClass = (current : AaticeTab ,view : AaticeTab) : string => {  
    return current === view ? 'nav-link active' : 'nav-link'
}

const ViewTab = ({activeTab = AaticeTab.LIST,onTabChange} : ViewTablParam) : ReactElement =>{
    return (
        <>
            <ul className='nav nav-tabs nav-fill my-4'>
            <li className='nav-item'>
                    <a className={grenerteLinkClass(activeTab,AaticeTab.LIST)} onClick={(event) : AaticeTab => { event.preventDefault(); onTabChange(AaticeTab.LIST); return AaticeTab.LIST}} href="#"> 
                    <i className="bi bi-list-ul"></i>
                        List Tab
                    </a>
            </li>
                <li className={'nav-item'}>
                    <a className={grenerteLinkClass(activeTab,AaticeTab.CHART)} onClick={(event): AaticeTab => { event.preventDefault(); onTabChange(AaticeTab.CHART); return AaticeTab.CHART }}  href="#"> 
                        <i className="bi bi-bar-chart-line-fill"></i>
                        Chart Tab
                        {activeTab}
                    </a>
                </li>
            </ul>
        </>
    )
}


export default ViewTab;

export {AaticeTab}
