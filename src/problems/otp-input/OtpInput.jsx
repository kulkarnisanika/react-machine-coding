import { useRef, useState } from "react";
import "./otp-input.css"
import { useEffect } from "react";

const OtpInput = () => {

    /**
     * OTP length - array intialization
     * Input filed mapping wrt length
     * onChange handling -
     * onPaste handling
     * useRef - field focus adjustment
     */
    const OTP_LENGTH = 6;
    const [otpInput, setOtpInput] = useState([...Array(OTP_LENGTH)]?.fill(""));
    const inputRef = useRef([]);

    useEffect(() => {
        inputRef?.current[0]?.focus();
    }, [])
    const handleInputChange = (e,index) => {
        if(isNaN(e?.target?.value)) return;
        const val= e.target.value.trim()?.slice(-1);
        const clonnedInputData = [...otpInput];
        clonnedInputData[index] = val;
        setOtpInput(clonnedInputData);
        val && inputRef?.current[index+1]?.focus();
        
    }
    const handleOnKeyDown = (e,index) => {
        if(e?.key === "Backspace" ){
            !e?.target?.value && inputRef?.current[index-1].focus();
        }
    }
    const handleOnPaste = (e) => {
        let val = e.clipboardData.getData('text')?.slice(0,OTP_LENGTH)?.split("");
        if(isNaN(val)) return;
        setOtpInput(val)
    }
    return (
        <div className="main-container">
            <h1>OTP Input Implementation</h1>
            <div>
                {
                    otpInput?.map((v,index) => {
                        return(
                           
                            <input type="text"
                                key={index}
                                className="otp-input"
                                value={otpInput[index]}
                                ref={(ele) => (inputRef.current[index] = ele)}
                                onChange={(e) => handleInputChange(e,index)}
                                onKeyDown={(e) => handleOnKeyDown(e,index)}
                                onPaste={(e) => handleOnPaste(e)}>
                        </input>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OtpInput