import React from 'react'

const ErrorBanner = ({ message }) => {
    let errorMesage = message || "에러입니다.";
    return (
        <div>{errorMesage}</div>
    )
}

export default ErrorBanner