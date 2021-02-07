import { useCallback, useReducer, useState } from "react";


/**
 * @description reducer를 이용해 만들어 보자.
 * @param state 
 * @param action 
 */
function reducer(state,action) {

}


function useInputs(initialForm) {

    // useReducer


    const [form, setForm] = useState(initialForm);


    /**
     * @description 
     */
    const onChange = useCallback((e)=>  {

        const {name, value} = e.target;

        setForm(form => ({
            ...form,
            [name]: value
        }));
    })

    /**
     * @description form을 초기화합니다.
     */
    const reset= useCallback(()=>setForm(initialForm),[initialForm]);


    return [form, onChange, reset]
}


export default useInputs;