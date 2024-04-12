import styles from './frase.module.css'

function Frase() {
    return(
        <div className={styles.FraseContainer}>
            <p className={styles.FraseContent}>Este é um componente com uma Frase</p>
        </div>
    )
}

export default Frase