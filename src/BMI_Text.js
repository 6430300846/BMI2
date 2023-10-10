import React from 'react'
import "./style.css"

function BMI_Text({bmi}) {
    let bmiValue = bmi.toFixed(2);
    console.log(bmiValue);
    
    if (bmiValue > 0.00) {
        console.log('True');
        if (bmiValue < 18.50) {
            return (
                <div className='Box_rank'>
                    อยู่เกณฑ์น้ำหนักน้อยหรือผอม
                </div>
            )
        } else if (bmiValue >= 18.50 && bmiValue <= 22.90) {
            return (
                <div className='Box_rank'>
                    อยู่เกณฑ์ปกติ
                </div>
            )
        } else if (bmiValue >= 23.00 && bmiValue <= 24.90) {
            return (
                <div className='Box_rank'>
                    น้ำหนักเกิน
                </div>
            )
        } else if (bmiValue >= 25.00 && bmiValue <= 29.90) {
            return (
                <div className='Box_rank'>
                    โรคอ้วนขั้นที่ 1
                </div>
            )
        } else if (bmiValue >= 30) {
            return (
                <div className='Box_rank'>
                    โรคอ้วนขั้นที่ 2
                </div>
            )
        }
    } else {
        console.log('false');
        return (
            <div className='Box_rank'>
                โปรดใส่น้ำหนักส่วนสูงของคุณ
            </div>
        )
    }
}

export default BMI_Text
