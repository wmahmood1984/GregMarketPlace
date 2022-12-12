import fs from "fs"
import { Cdata } from "./config.js";

import abc from "./oceania.json" assert {type:"json"}




const doSome = ()=>{
    const countries = abc.countries

    const code1 = Cdata[5].subMenu.map((v,e)=>v.code)

    const revisedCountries = countries.map((v,e)=>{
       

       const revisedObje = Object.assign(v, {code : code1[e]});
       //console.log(revisedObje)
        return revisedObje 
    })

 

    const target = abc;

    const revisedTarget = Object.assign(target,revisedCountries)

    const newdata = JSON.stringify(revisedTarget)

    fs.writeFile('oceania2.json', newdata, err => {
        if (err) {
          throw err
        }
        console.log('JSON data is saved.')
      })

    console.log("revised",revisedTarget)
}

doSome()