import { useEffect, useState } from 'react'

const Model = ({ title = "Confirmation", logoutConfirm = false, handleChildData, workingPurpose=null }) => {

    const [isActive, setIsActive] = useState(logoutConfirm);

    useEffect(() => {
    
        setIsActive(logoutConfirm)
    }, [workingPurpose, logoutConfirm])

    const logoutCancel = () => {
        setIsActive(false)
        handleChildData(false)
    }

    
    return (
        <>
            <div className={`model-container ${isActive == true ? 'active' : ''}`}>
                <div className={`model-content ${isActive == true ? 'active' : ''}`}>
                    <div className="model-header">
                        <h4>{title}</h4>
                    </div>
                    <div className="model-main-content">
                        <p>Are You Sure?</p>


                    </div>
                    <div className="model-footer">
                        <button type='button' onClick={logoutCancel}>Cancel</button>
                        <button type='button' onClick={workingPurpose}>Ok</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Model