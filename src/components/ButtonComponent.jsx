const ButtonComponent =(props)=> {
return (
    <div>
        <button style = {{backgroundColor: "darkorange",color:"white", border:"solid 1px white", borderRadius:"20px", padding:"12px", fontWeight:"bold"}}>{props.myText}</button>
    </div>
)
}
export default ButtonComponent