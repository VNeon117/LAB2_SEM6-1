import React from "react";
import {useFetch} from '../hooks/useFetch';
import {useCounter} from '../hooks/useCounter';
import {Loading} from './Loading';
import  {Card} from './Card';

export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    

    return (
        <>
            <h1>Información de Pokémon</h1>
            <hr/>
            {/* Optional chaining safely handles the name header */}
            <h2>{data?.name}</h2>

            {
                isLoading 
                ? <Loading /> 
                : data && <Card 
                            id={counter} 
                            name={data.name} 
                            sprites={[
                                data.sprites.front_default,
                                data.sprites.back_default,
                                data.sprites.front_shiny,
                                data.sprites.back_shiny,
                            ]} 
                          />
            }

            <button className='btn btn-primary' onClick={() => decrement()} disabled={counter <= 1}> Anterior</button>
            <button className='btn btn-primary' onClick={() => increment()}> Siguiente</button>
        </>
    );
}