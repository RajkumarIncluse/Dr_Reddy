import { useState } from "react";
import AnimeInputField from "../../../Common/AnimeInputField";

function Step1({ setIsStep1 }) {
  const [val, setVal] = useState('')

  return (
    <>
      <AnimeInputField
        txt="DPR Number"
        wrapperCls="my-8"
        spanCls="text-sm text-gray-400"
        value={val}
        onChange={e => setVal(e.target.value)}
      />

      <button
        onClick={() => setIsStep1(p => !p)}
        className='block w-1/2 mx-auto bg-[#6e5bc5] text-white'
      >
        Next
      </button>
    </>
  )
}

export default Step1