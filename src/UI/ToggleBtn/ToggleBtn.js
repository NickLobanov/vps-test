import React, {useState} from "react";
import ToggleBtnStyle from './toggleBtn.module.css'
import { useSelector } from "react-redux";

export const ToggleBtn = () => {
    const {datacenters} = useSelector(state => ({
        datacenters: state.VPSReducer.datacenters
    }))

    const [selectDatacenter, setDatacenter] = useState(datacenters[0].name)

    return (
        <div className={ToggleBtnStyle.wrapper}>
            {
                datacenters.map(item => (
                    <p key={item.name} className={`${ToggleBtnStyle.text} ${item.name === selectDatacenter && ToggleBtnStyle.active}`}
                        onClick={() => setDatacenter(item.name)}>{item.location}</p>
                ))
            }
        </div>
    )
}