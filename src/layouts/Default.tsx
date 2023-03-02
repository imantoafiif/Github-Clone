interface props {
    children: JSX.Element[]
}

const Default = ({ children }: props) => {
    return (
        { children[0] }
    )
}

export default Default