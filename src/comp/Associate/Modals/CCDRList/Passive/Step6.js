import ApproveOrRejectBtn from "../../../../Common/ApproveOrRejectBtn"

function Step6() {
  return (
    <div className='dfc gap-0 pb-6 max-w-[90vw] max-h-[70vh]'>
      <h1 className="my-6 text-xl font-bold">6. Outer Box Packing Details: </h1>

      <div className='scroll-y pr-4 -mr-4'>
        <h4 className="mb-2 text-lg font-semibold">Instructions</h4>

        <div className="ml-4 my-4">
          <p>Transfer the Product packed in inner box to the corresponding outer box with Packing List.</p>
          <p>Ensure that data logger is switched on and placed as per current version of SOP no.FTGDCO56.</p>
          <p>Close the outer box lid with BOPP tape. Paste the distribution Label on outer Box corresponding with packing list.</p>
          <p>Carry Strap the box and keep on the pallet.</p>
          <p>Put Tick mark &#10003; or &#x2717; wherever is applicable.</p>
        </div>

        <div className="df my-4">
          <p>Date</p>
          <input type="text" />
        </div>

        <table className='w-full my-6'>
          <thead className="text-center">
            <tr>
              <td className='px-4 py-1 border' colSpan='2'>Box No.</td>
              <td className='px-4 py-1 border' rowSpan='2'>Start time (A)</td>
              <td className='px-4 py-1 border' rowSpan='2'>End time (B)</td>
              <td className='px-4 py-1 border' rowSpan='2'>Time out of Refrigeration (C=B-A)</td>
              <td className='px-4 py-1 border' colSpan='2'>label pasted</td>
              <td className='px-4 py-1 border' colSpan='2'> Carry Strapping of packed boxes.</td>
              <td className='px-4 py-1 border' rowSpan='2'>Done by</td>
            </tr>
            <tr>
              <td className='px-4 py-1 border'>From</td>
              <td className='px-4 py-1 border'>To</td>
              <td className='px-4 py-1 border'>Yes</td>
              <td className='px-4 py-1 border'>No</td>
              <td className='px-4 py-1 border'>Yes</td>
              <td className='px-4 py-1 border'>No</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='px-4 py-1 border'><input type="text" /></td>
              <td className='px-4 py-1 border'><input type="text" /></td>
              <td className='px-4 py-1 border'><input type="text" /></td>
              <td className='px-4 py-1 border'><input type="text" /></td>
              <td className='px-4 py-1 border'><input type="text" /></td>
              <td className='px-4 py-1 border'><input type="checkbox" /></td>
              <td className='px-4 py-1 border'><input type="checkbox" /></td>
              <td className='px-4 py-1 border'><input type="checkbox" /></td>
              <td className='px-4 py-1 border'><input type="checkbox" /></td>
              <td className='px-4 py-2 border'>
                <div className='dfc'>
                  <div className='mb-3'>Raj kumar 12.06.2022</div>
                  <div className="df">
                    <ApproveOrRejectBtn />
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td className='px-4 py-1 border' colSpan='10'>
                <div className='df justify-end'>
                  <button className='bg-[#6e5bc5] text-white'>Add</button>
                </div>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td className='px-4 py-1 border' colSpan='10'>
                <div>
                  <div className="my-2">
                    <strong className="font-medium">Allowable time out of Refrigeration (TOR): </strong>
                    Not more than 15 min.
                  </div>
                  <div className="df my-2">
                    <strong className="font-medium">Maximum Time out of Refrigeration (TOR): </strong>
                    <input className='w-12 p-0 border-0 border-b rounded-none' type="text" />
                    Min
                  </div>
                  <div className="df my-2">
                    <strong className="font-medium">Overall packing activity Verified by: </strong>
                    <span>Raj kumar 12.06.2022</span>
                    <ApproveOrRejectBtn />
                  </div>
                  <div className='df my-2'>
                    <strong className='shrink-0 font-medium'>Remarks (if any):</strong>
                    <input type="text" />
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default Step6