import React from 'react'

export default function NoJSXComponent (propsObject) {

    let aktDatum = new Date();

    let geburtsJahr = aktDatum.getFullYear() - propsObject.age;
    let pElement = React.createElement('p', `Ich wurde geboren: ${geburtsJahr}`)
    console.log('pElement :>> ', pElement);
    return (
        <div>
        {pElement}
        </div>
        
    )

}

