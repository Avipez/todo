import React from 'react'
import { LoadingSkeleton } from '../LoadingSkeleton';
import "../App/app.css"

const TodoLoading = () => {
    return (
        new Array(3)
            .fill(1)
            .map((item, index) => <LoadingSkeleton key={index} />)
    );
}

export default TodoLoading;