// panel that displays the correct dose after calculations
interface ResultPanelProps {
    drug: string;
    tabletStrength: string;
    partialTab: string;
    dose: number;
}



function DosePanel({drug, tabletStrength, partialTab, dose}: ResultPanelProps) {
    return (
        <div className='ans'>Please give a maximum of {partialTab} tablet of {drug} {tabletStrength} ({dose}mg) every 6 hours</div>
    )
}


function ResultPanel({drug, tabletStrength, partialTab, dose}: ResultPanelProps) {
    return (
        <div style={{background: '#fbf4e9c'}}>
            <DosePanel drug={drug} tabletStrength={tabletStrength} partialTab={partialTab} dose={dose} />
        </div>
    )
}

export default ResultPanel;