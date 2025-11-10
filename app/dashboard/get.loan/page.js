   "use client"
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import* as yup from "yup"

const schema = yup.object().shape({
    amount: yup.number().required("Amout is required").min(5000),
});

const duration =[
    {id: "7", days: 30 },
    {id: "60", days: 60},
    {id: "90", days: 90}
]

export default function GetLoan () {
    const [clickedRate, setClickedRate ] = useState(undefined)
    const [rate,setRate] = useState(0)
    const [LoanDuration,setLoanDuration] = useState(0)

    const {handleSubmit,handleChange, values,touched, errors}= useFormik ({
        initialValues: {
            amount: 0,
        },
        onSubmit: ()=>{
            alert("Loan Rquest received")
            alert(`you have requested a loan of ${values.amount} for ${LoanDuration}days at an interest rate of ${rate}%`)
        },
        validationSchema:schema,
    })
    return (
        <main className="min-h-screen flex justify-center py-4 md:py-6 lg:px-16">
            <div className="w-full  md:w-[350px] h-[550px] flex flex-col gap-4 p-2 border border-gray-200 rounded-md shadow-md ">
                <h1 className="text-center text-lg font-semibold text-indigo-500">Get Insant Loan From fastcash</h1>
                <form onSubmit={handleSubmit}
                 className="flex flex-col gap-4">
                    <div className="w-full mb-2">
                        <TextField
                        type="number"
                        label="Amount"
                        placeholder="Enter Loan Amount"
                        id="amount"
                        size="small"
                        value={values.amount}
                        onChange={handleChange}
                        className="w-full"
                        />
                        {touched.amount && errors.amount ? <span className="text-xs text-red-500">{errors.amount}</span> : null}
                    </div>
                    <div className="border-dashed border border-indigo p-4 rounded-md">
                        <p>Choose your loan Duration</p>
                        <ul className="grid grid-cols-3 gap-2">
                            {duration.map(item =>
                            <li key={item.id}
                            onClick={()=>{
                                setClickedRate(item.id)
                                if (item.days === 30) {
                                    setRate(10)
                                }else if(item.days === 60) {
                                    setRate(20)
                                }else if (item.days === 90) {
                                    setRate(30)
                                }
                                if (item.days === 30) {
                                    setLoanDuration(30)
                                }else if (item.days === 60) {
                                    setLoanDuration(60)
                                }else if (item.days === 90) {
                                    setLoanDuration(90)
                                }
                            }}

                            className="h-16 bg-indigo-500 text-white rounded-md text-md justify-center flex items-center cursor-pointer">{item.days} Days </li>)}
                        </ul>
                    </div>
                    <div className="border-dashed border border-indigo-600 p-4 rounded-md">
                        <h1 className="text-indigo-800">Interest rate for {LoanDuration}</h1>
                        <p className="text-4xl text-indigo-800">{rate}%</p>
                    </div>
                    <div className="flex flex-col gap-3 bg-linear-to-b from bg-indigo-400 to-indigo-900 border-dashed border-indigo-600 p-4 rounded-md">
                        <p  className="text-indigo-200">Repayment amount</p>
                        <p className="text-white text-4xl">500,000</p>
                    </div>
                    <div>
                        <button type="submit" className="p-2 rounded-md bg-indigo-800 text-white uppercase">Get loan</button>
                    </div>
                </form>

            </div>
        </main>
        
    )
}