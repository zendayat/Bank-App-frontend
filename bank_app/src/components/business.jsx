import { features } from "../constants"
import styles, {layout} from "../style"
import Button from './Button'

const FeatureCard = ({icon, title, content, index}) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ? "mb-6" : "mb-0"}`} >
      <div>
        <img src={icon} className=" w-[50%] h-[50%] object-contain"/>
      </div>
    </div>
  )
}
const business = () => {
  return (
    <section id=" features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You Do The Business <br className=" sm:block hidden"/>We'll Handle The Money</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index)=>(
          <FeatureCard key={feature.id} {...feature} index ={index}/>
        ))}
      </div>
    </section>
  )
}

export default business
