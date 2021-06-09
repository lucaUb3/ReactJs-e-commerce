import React from 'react';
import ItemListContainer from './PageComponents/ItemListContainer';
import Counter from './Counter/Counter';

export const RenderProps = props => {
    return <ItemListContainer {...dataCounter}
    render={data=> <Counter {...data}/>}>
    </ItemListContainer>
}