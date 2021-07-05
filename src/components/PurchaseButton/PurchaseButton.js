import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { PurchaseButtonStyles } from './PurchaseButtonStyles';

const useStyle = makeStyles((theme) => PurchaseButtonStyles(theme));

export const PurchaseButton = props =>{
    const classes = useStyle();
    const {clickCancelar} = props;
    const history = useHistory();
    return<div className={classes.generalContainer}>
        <div className={classes.container}>
            <Link className={classes.buttons} onClick={() => history.push(`/cart`)}>Terminar compra</Link>
            <Link className={classes.buttons} onClick={() => clickCancelar(false)}>Cancelar</Link>
        </div>
    </div>
}
