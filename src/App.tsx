import React, { FunctionComponent, useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/atom/Button';
import Dialog from './components/Dialog';
import ErrorBoundary from './components/ErrorBoundary';



const theme = {

    pallete :{

    },

    
}

const AppBlock = styled.div`
    
`

function App () {

    const [dialog,setDialog] = useState(false);

    const handleClickButton = () =>{

        setDialog(true);
    }

    const handleClickConfirm = ()=>{
        setDialog(false);
    }

    const handleClickCancel= ()=>{
        setDialog(false);
    }

    return <ThemeProvider theme={theme}>

        <ErrorBoundary>

            <AppBlock>
                <Button color='pink' size="large" onClick={handleClickButton}>삭제</Button>
            </AppBlock>
            
            
            <Dialog title='정말 삭제하시겠습니까' confirmText='삭제' cancelText='삭제'
                visible={dialog}
                onCancel={handleClickCancel}
                onConfirm={handleClickConfirm}
            >

                데이터를 정말로 삭제하시겠습니까
            </Dialog>
        </ErrorBoundary>

    </ThemeProvider>

}

export default App;