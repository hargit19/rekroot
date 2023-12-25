import React from 'react'
import Landing from "./Components/Landing"
import TopCompanies from './Components/TopCompanies'
import Listings from './Components/Listings'
import MobBanner from './Components/MobBanner'
import TopIndustries from './Components/TopIndustries'


export default function index() {
  return (
    <>
    <Landing></Landing>
    <TopCompanies></TopCompanies>
    <Listings></Listings>
    <MobBanner></MobBanner>
    <TopIndustries></TopIndustries>
    </>
  )
}
