import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components'
import Button from './atom/Button';


const faidIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`
const faidOut = keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
`

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`

const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }

    to {
        transform: translateY(200px);
    
    }
`

const DarkBackground = styled.div<{disappear?: boolean}>`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:rgba(0,0,0,0.8);


    animation-name=${faidIn};
   animation-duration: 0.25s;
   animation-timing-function: ease-out;
   animation-fill-mode: forwards;

   ${props => props.disappear && css`
        animation-name=${faidOut};
   `}
`

const DialogBlock = styled.div<{disappear?:boolean}>`
    width:320px;
    padding: 1.5rem;
    background:white;
    border-radius:2px;
    h3 {
        margin:0;
        font-size: 1.5rem;
    }

    p {
        font-size: 1.125rem;
    }

    
    animation-name:${slideUp};
    animation-duration: 0.25s;
   animation-timing-function: ease-out;
   animation-fill-mode: forwards;

   
   ${props => props.disappear && css`
        animation-name=${slideDown};
   `}
`

const ButtonGroup = styled.button`
    margin-top: 3rem;
    display:flex;
    justify-content:flex-end;
`

const ShortMarginButton = styled(Button)`
    & + & {
        margin-left: 0.5rem;
    }
`



type DialogProps = any

const ANIMATION_DURATION = 250;


function Dialog({visible,title,chidren, confirmText='확인',cancelText='취소',onConfirm,onCancel}:DialogProps){

    // 현재 애니메이션 보여주는 중
    const [animate, setAnimate] = useState(false);
    //
    const [localVisible, setLocalVisible] = useState(visible);


    useEffect(()=>{

        // visible true -> false
        if(localVisible && !visible){
            setAnimate(true);
            // 꺼질 때는 애니메이션 재생 뒤에 꺼지도록...
            setTimeout(()=>setAnimate(false),ANIMATION_DURATION)
        }

        setLocalVisible(visible);
    },[localVisible,visible])



    if(!localVisible&&!animate){
        return null;
    }

    return <DarkBackground disappear={!visible}>
        <DialogBlock  disappear={!visible}>
            <h3>{titme}</h3>
            <p>{chidren}</p>
            <ButtonGroup>
                <ShortMarginButton color='gray' onClick={onCancel}>  
                    {cancelText}  
                 </ShortMarginButton>
                <ShortMarginButton color='pink' onClick={onConfirm}> 
                    {confirmText}  
                </ShortMarginButton>
            </ButtonGroup>
        </DialogBlock>
    </DarkBackground>
}

export default Dialog
