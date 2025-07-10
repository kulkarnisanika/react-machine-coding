import { useState } from 'react'
import { data } from './accordionData'
import Accordion from './Accordion';

const AccordionList = () => {
    /**
     * AccordionList
     *      Accordion
     * 
     * states - accordionData, activeAccordion
     * 
     * Accordion - (data, setActiveHandler=(will set active index))
     * 
     * 
     */

    const [accordionData] = useState(data);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const handleAccordionExpandCollapse = (action, index) => {
        if (action === 'expand') {
            setActiveAccordion(index)
        }

        if (action === 'collapse') {
            setActiveAccordion(null)
        }

    }

    return (
        <div>
            {
                accordionData?.map((item, index) => {
                    return (
                        <div key={index}>
                            <Accordion
                                accordionDetails={item}
                                isExpand={index === activeAccordion}
                                setAccordion={(action) => handleAccordionExpandCollapse(action, index)} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AccordionList