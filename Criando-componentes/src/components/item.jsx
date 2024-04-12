import PropsTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}
Item.PropsTypes = {
    marca: PropsTypes.string.isRequired,
}

export default Item