import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://x.com/SERPRO?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target='blank'>
                            <img src='/images/x.png' alt='' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/serprobrasil/' target='blank'>
                            <img src='/images/instagram.png' alt='' />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/images/logo.png' alt=''/>
            </section>
            <section>
                <p>
                    Desenvolvido por José Henrique.
                </p>
            </section>
        </footer>
    )
}

export default Rodape