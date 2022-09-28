import PropTypes from 'prop-types';

export function App( {title,subtitle} ){
    //document.createElement... es lo mismo
    return (
    <>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    </>
    );
}

//verificacion y creacion de props
App.propTypes ={
    title : PropTypes.string.isRequired,
    subtitle : PropTypes.string.isRequired
}
//default props
App.defaultProps = {
    title: 'No Hay Titulo',
    subtitle: 'no hay subtitulo',
    avg:'no se que poner xd'
}