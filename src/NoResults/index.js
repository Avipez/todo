import React from 'react'
import "./NoResults.css"

const NoResults = ({ searchText }) => {
    return (
        <p> No hay resultados para {searchText}</p>
    );
}

export default NoResults;