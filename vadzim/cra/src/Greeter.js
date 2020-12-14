import NoJSXComponent from './NoJSXComponent'
function Greeter() {
    let name = 'Vadzim'
    return (
        <div>
            <p>
                Greeter works
            <br />
          Hallo React, ich bin Vadzim und möchte dich kennenlernen.
            </p>
            <NoJSXComponent age={36} />
        </div>
    )
}
export default Greeter