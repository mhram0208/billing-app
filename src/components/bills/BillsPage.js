import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncGetAllBills } from '../../actions/billActions'
import AddBill from './AddBill'
import BillsTable from './BillsTable'

function BillsPage(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetAllBills())
    }, [])

    const bills = useSelector(state => state.bills)

    return (
        <div>
            <AddBill />
            {bills.length > 0 ? (
                <BillsTable bills={bills} />
            ) : (
                <h4>No Bills Found</h4>
            )
            }
        </div>
    )
}

export default BillsPage
