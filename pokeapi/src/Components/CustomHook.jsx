import React from "react";
import {useFetch} from '../hooks/useFetch';
import {useCounter} from '../hooks/useCounter';
import {Loading} from './Loading';
import {NASA} from './NASA';

export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://images-api.nasa.gov/search?q=galaxy&media_type=image&page=${counter}`);
    const item = data?.collection?.items[0];

    return (
        <>
            <h1>NASA Image Library</h1>
            <hr/>
            {
                isLoading 
                ? <Loading /> 
                : item && (
                    <NASA 
                        id={counter} 
                        title={data.collection.items[0]?.data[0]?.title} 
                        imageUrl={[data.collection.items[0]?.links[0]?.href]} 
                    />
                )
            }
            
            <button className='btn btn-primary' onClick={() => decrement()} disabled={counter <= 1}> Anterior</button>
            <button className='btn btn-primary' onClick={() => increment()}> Siguiente</button>
        </>
    );
}