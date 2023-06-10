// panel that displays the correct dose after calculations
interface ResultPanelProps {
    drug: string;
    tabletStrength: string;
    partialTab: string;
}



function DosePanel({drug, tabletStrength, partialTab}: ResultPanelProps) {
    return (
        <div className='ans'>Please give up to {partialTab} tablet of {drug} {tabletStrength} every 6 hours</div>
    )
}


function ResultPanel() {
    return (
        <div style={{background: '#fbf4e9c'}}>
            <DosePanel drug='Advil' tabletStrength="200mg" partialTab="1 and 1/4" />
        </div>
    )
}

export default ResultPanel;