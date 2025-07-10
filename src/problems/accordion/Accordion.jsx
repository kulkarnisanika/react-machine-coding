import './accordion.css'

const Accordion = ({ accordionDetails, isExpand, setAccordion }) => {
    const { heading = '', details = '' } = accordionDetails;
    const actionToBePerformed = isExpand ? "collapse" : "expand"
    return (
        <div className='accordion'>
            <div className='accordion-header'>
               <div>
                    {heading}
               </div>
                <div  className="expand-button" onClick={() => setAccordion(actionToBePerformed)}>
                    {isExpand ? '-' : '+'}
                </div>

            </div>
            <div>
                {
                    isExpand && <div className='accordion-details'>
                        {details}
                    </div>
                }
            </div>
        </div>
    )
}

export default Accordion