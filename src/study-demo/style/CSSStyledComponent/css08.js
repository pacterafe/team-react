import styled from 'styled-components';
import React,{ Component } from 'react'

export const Link = ({className , children}) => (
    <a className={className}>
        {children}
    </a>
)

export const StyledLink = styled(Link)`
    color: red;
`