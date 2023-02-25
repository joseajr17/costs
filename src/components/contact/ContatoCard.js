import styles from './ContatoCard.module.css';

function ContatoCard({name, email, git, linkedin}){
    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>E-mail:</span> {email}
            </p>
            <p>
                <span>GitHub:</span> {git}
            </p>
            <p>
                <span>LinkedIn:</span> {linkedin}
            </p>
        </div>
    )
}

export default ContatoCard