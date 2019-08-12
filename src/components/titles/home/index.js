import React from 'react'
import './index.css'
import { reverse } from '@utils/string/'

const HomeTitle = ({ children }) => (
    <h1 className="home-title">{ reverse(children) }</h1>
)

export default HomeTitle
