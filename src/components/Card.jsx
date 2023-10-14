import React from 'react'
import {CgTimelapse} from 'react-icons/cg'
import {HiCheckCircle} from 'react-icons/hi'
import {TbCircleDotted, TbLineDashed} from 'react-icons/tb'
import {PiCellSignalHighFill, PiCellSignalMediumFill, PiCellSignalLowFill} from 'react-icons/pi'
import {FaExclamationTriangle, FaCircle,FaRegCircle, FaTimesCircle} from 'react-icons/fa'
import Profilepic from './Profilepic'

const Card = (props) => {

    let ticket = props.ticket
    let users = props.users
    let userArray = users.filter((item)=>{
        return item.id===ticket.userId
    })
    let user = userArray[0];
    let group = props.group

    let tagArr = ticket.tag
    const fullTitle = ticket.title
    const truncatedTitle = fullTitle.slice(0,65);

  return (
    <>
    <div className="card_container">
        <div className="card_title">
            <span>{ticket.id}</span>
            <div style={{display: group==="user"?"none":""}}><Profilepic online={user.available} user={user} ></Profilepic></div>
        </div>
        <div className="card_body">
            <div style={{display: group==="status"?"none":""}}>
            {ticket.status==="Backlog"?<TbCircleDotted style={{color: "grey",minWidth: '16px'}}></TbCircleDotted>
              :ticket.status==="Todo"?<FaRegCircle style={{color: "grey",minWidth: '16px',fontSize: '.9em'}}></FaRegCircle>
              :ticket.status==="In progress"?<CgTimelapse style={{color: "orange",minWidth: '16px'}}></CgTimelapse>
              :ticket.status==="Done"?<HiCheckCircle style={{color: "rgb(0, 89, 255)",minWidth: '16px'}}></HiCheckCircle>
              :<FaTimesCircle style={{color: "grey",minWidth: '16px'}}></FaTimesCircle>
            }
            </div>
            <span>{truncatedTitle}{fullTitle.length>65?"...":""}</span>
        </div>
        <div className="card_footer">
            <div style={{display: group==="priority"?"none":""}}>
            {ticket.priority===0?<TbLineDashed className='card_priority'></TbLineDashed>
                :ticket.priority===1?<PiCellSignalLowFill className='card_priority'></PiCellSignalLowFill>
                :ticket.priority===2?<PiCellSignalMediumFill className='card_priority'></PiCellSignalMediumFill>
                :ticket.priority===3?<PiCellSignalHighFill className='card_priority'></PiCellSignalHighFill>
                :<FaExclamationTriangle className='card_priority'></FaExclamationTriangle>
            }
            </div>
            <div className="card_feature_outer">
                {tagArr.map((tag)=>{
                    return (
                        <div className="card_feature">
                            <FaCircle className='card_circle'></FaCircle>
                            <span>{tag}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    </>
  )
}

export default Card