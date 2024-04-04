import { FC } from "react"
import "./Enjoy.scss"

const Enjoy: FC = () => {
  return (
    <section className="enjoy">
        <div className="enjoy__content">
            <h1 className="enjoy__title">
                <span className="enjoy__title_enjoy">Enjoy</span> premium coffee at our charming cafe
            </h1>
            <p className="enjoy__text">
                With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.
            </p>
            <button className="enjoy__btn" type="button">Menu</button>
        </div>
        
    </section>
  )
}

export default Enjoy;