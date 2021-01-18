import React from 'react'
import './css/Item.css'
import PropTypes from 'prop-types'
import Button from './Button'
import {IconButton} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


function Item({ 
    id ,
    title, 
    desc,
    descLink,
    backgroundImg,
    leftBtnText,
    leftBtnLink,
    rightBtnText,
    rightBtnLink,
    twoButtons,
    first 
}) {
    return (
        <div className="item" id={id} style={{
            backgroundImage : `url(${backgroundImg})`
        }}>
            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item__lowerThird">
                    <div className="item__buttons">
                    <Button imp="primary" text={leftBtnText} link={leftBtnLink}/>
                     {twoButtons &&(
                         <Button imp="secondary" text={rightBtnText} link={rightBtnLink}/>
                     )}
                    </div>
                     {first &&(
                         <div className="item__expand">
                             <IconButton  style={{color : '#fff'}}>
                             <ExpandMoreIcon fontSize="large" className="expand__btn"/>
                             </IconButton>
                             
                         </div>
                     )}
                </div>
            </div>
        </div>
    )
}

Item.propTypes = {
    id : PropTypes.string,
    title : PropTypes.string,
    desc : PropTypes.string,
    descLink : PropTypes.string,
    leftBtnText : PropTypes.string,
    leftBtnLink : PropTypes.string,
    rightBtnText : PropTypes.string,
    rightBtnLink : PropTypes.string,
    twobuttons : PropTypes.bool,
    first : PropTypes.bool
}

export default Item
